"use client";

function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-4 flex flex-col h-full animate-pulse">
      {/* Image Container with Badge and Heart Placeholders */}
      <div className="relative w-full aspect-square bg-gray-100 mb-4 rounded-sm">
        {/* Badge Placeholder (e.g., "BESTSELLER") */}
        <div className="absolute top-0 left-0 w-20 h-6 bg-gray-200" />
        
        {/* Heart Icon Placeholder */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-gray-200 rounded-full" />
      </div>

      {/* Text Details */}
      <div className="flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Product Title */}
          <div className="h-5 bg-gray-200 rounded-sm w-3/4 mb-2" />
          
          {/* MOQ (Crucial for B2B) */}
          <div className="h-3 bg-gray-100 rounded-sm w-1/3" />
        </div>

        {/* Send Inquiry Button Placeholder */}
        <div className="h-10 w-full bg-gray-200 rounded-sm" />
      </div>
    </div>
  );
}

export default function CollectionSkeletonGrid() {
  // Generate an array of 8 placeholder cards
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div className="w-full">
      {/* Grid mimicking your screenshot (4 columns on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skeletonArray.map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}