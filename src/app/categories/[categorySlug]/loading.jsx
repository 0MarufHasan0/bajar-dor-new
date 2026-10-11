
export default function CategoryLoading() {
  return (
    <div className="container mx-auto mt-5 px-4">
      {/* Category Header Skeleton */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Emoji */}
          <div className="h-14 w-14 shrink-0 animate-pulse rounded-2xl bg-gray-400" />

          {/* Category Name & Product Count */}
          <div className="flex-1 space-y-3">
            <div className="h-8 w-48 max-w-full animate-pulse rounded-lg bg-gray-400" />

            <div className="h-4 w-64 max-w-full animate-pulse rounded-md bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Sort Section Skeleton */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="h-7 w-32 animate-pulse rounded-lg bg-gray-400" />

        <div className="h-10 w-44 max-w-[50%] animate-pulse rounded-xl bg-gray-400" />
      </div>

      {/* Product Cards Skeleton */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            {/* Product Image */}
            <div className="h-40 w-full animate-pulse rounded-xl bg-gray-400" />

            {/* Product Name */}
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded-md bg-gray-400" />

            {/* Price */}
            <div className="mt-3 h-6 w-1/2 animate-pulse rounded-md bg-gray-400" />

            {/* Product Details */}
            <div className="mt-3 h-4 w-full animate-pulse rounded-md bg-gray-400" />

            {/* Button */}
            <div className="mt-4 h-10 w-full animate-pulse rounded-xl bg-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
