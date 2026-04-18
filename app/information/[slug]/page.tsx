// app/information/[slug]/page.tsx

export default async function InformationPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Await the params Promise
  const resolvedParams = await params;
  
  // 2. Format the slug (e.g., "press-media" -> "Press Media")
  const title = resolvedParams.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-4xl mx-auto py-32 px-4 text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900" style={{ fontFamily: "var(--font-serif)" }}>
        BJ Jewelry <span className="text-[#C9A84C]">{title}</span>
      </h1>
      <div className="h-px w-24 bg-[#C9A84C] mx-auto opacity-50 mb-8"></div>
      
      <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto tracking-wide text-lg">
        This section is currently being updated. Please check back soon for more details regarding our {title.toLowerCase()}.
      </p>
      
      <div className="mt-10">
        <a href="/contact" className="btn-gold py-3 px-8 text-xs">
          Contact Us for Inquiries
        </a>
      </div>
    </div>
  );
}