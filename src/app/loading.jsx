
function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-gray-400 ${className}`}
    />
  );
}

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F1F6F1]">
      {/* Navbar Skeleton */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <SkeletonBlock className="h-10 w-10 rounded-xl" />

            <div className="space-y-2">
              <SkeletonBlock className="h-4 w-24 rounded-md" />
              <SkeletonBlock className="h-2 w-32 rounded-md" />
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <SkeletonBlock className="h-4 w-12 rounded-md" />
            <SkeletonBlock className="h-4 w-16 rounded-md" />
            <SkeletonBlock className="h-4 w-14 rounded-md" />
          </div>

          <SkeletonBlock className="h-9 w-24 rounded-lg" />
        </div>
      </header>

      {/* Price Ticker Skeleton */}
      <div className="border-b border-slate-200 bg-white py-3">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-hidden px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2">
              <SkeletonBlock className="h-3 w-3 rounded-full" />
              <SkeletonBlock className="h-3 w-24 rounded-md" />
              <SkeletonBlock className="h-3 w-10 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:py-8">
        {/* Hero Banner Skeleton */}
        <section className="flex min-h-[190px] flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex-1 space-y-4">
            <SkeletonBlock className="h-5 w-36 rounded-full" />
            <SkeletonBlock className="h-7 w-full max-w-md rounded-lg" />
            <SkeletonBlock className="h-4 w-full max-w-lg rounded-md" />
            <SkeletonBlock className="h-4 w-4/5 max-w-sm rounded-md" />
            <SkeletonBlock className="h-10 w-32 rounded-lg" />
          </div>

          <SkeletonBlock className="h-28 w-32 shrink-0 self-center rounded-2xl sm:h-36 sm:w-36" />
        </section>

        {/* Section 1 */}
        <section>
          <div className="mb-5 space-y-2">
            <SkeletonBlock className="h-6 w-44 rounded-md" />
            <SkeletonBlock className="h-3 w-60 rounded-md" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-3">
                  <SkeletonBlock className="h-4 w-3/5 rounded-md" />
                  <SkeletonBlock className="h-3 w-2/5 rounded-md" />
                  <SkeletonBlock className="h-4 w-1/2 rounded-md" />
                </div>

                <SkeletonBlock className="h-5 w-12 shrink-0 rounded-full" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="mb-5 space-y-2">
            <SkeletonBlock className="h-6 w-36 rounded-md" />
            <SkeletonBlock className="h-3 w-52 rounded-md" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-3">
                  <SkeletonBlock className="h-4 w-3/5 rounded-md" />
                  <SkeletonBlock className="h-3 w-2/5 rounded-md" />
                  <SkeletonBlock className="h-4 w-1/2 rounded-md" />
                </div>

                <SkeletonBlock className="h-5 w-12 shrink-0 rounded-full" />
              </div>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <div className="mb-5 space-y-2">
            <SkeletonBlock className="h-6 w-24 rounded-md" />
            <SkeletonBlock className="h-3 w-48 rounded-md" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-3">
                  <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />

                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-4 w-3/5 rounded-md" />
                    <SkeletonBlock className="h-3 w-2/5 rounded-md" />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div className="space-y-2">
                    <SkeletonBlock className="h-3 w-20 rounded-md" />
                    <SkeletonBlock className="h-5 w-24 rounded-md" />
                  </div>

                  <SkeletonBlock className="h-5 w-14 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
