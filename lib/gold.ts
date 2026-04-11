import * as cheerio from "cheerio";

export interface MetalRates {
  gold24k: number;
  gold22k: number;
  gold18k: number;
  silver: number;
  platinum: number;
  mcxGold: number;
  updatedAt: string;
  changes: {
    gold24k: number;
    gold22k: number;
    gold18k: number;
    silver: number;
    platinum: number;
  };
}

let cachedRates: MetalRates | null = null;
let lastFetch = 0;
const CACHE_DURATION = 15 * 60 * 1000;

export async function getMetalRates(): Promise<MetalRates> {
  const now = Date.now();

  if (cachedRates && now - lastFetch < CACHE_DURATION) {
    return cachedRates;
  }

  try {
    const response = await fetch("http://www.kjpl.in/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Cache-Control": "no-cache",
      },
      next: { revalidate: 0 } 
    });

    if (!response.ok) throw new Error(`Website blocked request! HTTP status: ${response.status}`);

    const html = await response.text();
    const $ = cheerio.load(html);
    
    let finalGold = 0;
    let finalSilver = 0;

    // STRATEGY 1: Specifically target the "MJDTA RATE (Without GST)" table
    $("table").each((_, table) => {
      const tableText = $(table).text().toUpperCase();
      if (tableText.includes("MJDTA RATE") && tableText.includes("WITHOUT GST")) {
        $(table).find("tr").each((_, tr) => {
          const rowText = $(tr).text().toUpperCase();
          if (rowText.includes("GOLD:")) {
            const num = Number($(tr).text().replace(/[^0-9.]/g, ""));
            if (num > 1000) finalGold = num;
          }
          if (rowText.includes("SILVER:")) {
            const num = Number($(tr).text().replace(/[^0-9.]/g, ""));
            if (num > 10) finalSilver = num;
          }
        });
      }
    });

    // STRATEGY 2: Fallback to the top-right mini banner (e.g., "GOLD 14760  SILVER 280")
    if (finalGold === 0 || finalSilver === 0) {
      // Look at small divs/spans that contain both words
      $("div, span, td").each((_, el) => {
        const text = $(el).text().toUpperCase().replace(/\s+/g, " ");
        if (text.includes("GOLD") && text.includes("SILVER") && text.length < 60) {
           const goldMatch = text.match(/GOLD\s*([\d,]+)/);
           if (goldMatch && finalGold === 0) finalGold = Number(goldMatch[1].replace(/,/g, ""));
           
           const silverMatch = text.match(/SILVER\s*([\d,]+)/);
           if (silverMatch && finalSilver === 0) finalSilver = Number(silverMatch[1].replace(/,/g, ""));
        }
      });
    }

    if (finalGold === 0 || finalSilver === 0) {
        throw new Error(`Scraping blocked. Found Gold: ${finalGold}, Silver: ${finalSilver}`);
    }

    // We map the final scraped numbers directly to the output.
    const result: MetalRates = {
      gold24k: finalGold,  // 14760
      gold22k: finalGold,  // Keeping them the same since MJDTA is a single board rate
      gold18k: finalGold,
      silver: finalSilver, // 280
      platinum: 0, 
      mcxGold: 0, 
      updatedAt: new Date().toISOString(),
      changes: { gold24k: 0, gold22k: 0, gold18k: 0, silver: 0, platinum: 0 },
    };

    cachedRates = result;
    lastFetch = now;
    return result;
    
  } catch (error) {
    console.error("KJPL scrape failed:", error);
    if (cachedRates) return cachedRates;
    throw error;
  }
}
