// app/trade/[slug]/page.tsx

export default async function TradeServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params here too
  const resolvedParams = await params;

  const title = resolvedParams.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-4xl mx-auto py-32 px-4 text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900" style={{ fontFamily: "var(--font-serif)" }}>
        {title} <span className="text-[#C9A84C]">Services</span>
      </h1>
      <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto tracking-wide">
        BJ Jewelry offers premium {title.toLowerCase()} solutions for our partners and clients. Our dedicated service portal is currently being upgraded.
      </p>
      
      <div className="mt-10">
        <a href="/contact" className="btn-gold py-3 px-8 text-xs">
          Contact Our Team
        </a>
      </div>
    </div>
  );
}