
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F1F7F2] px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-emerald-100 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">

        {/* Illustration */}
        <div className="relative mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-emerald-50 sm:h-52 sm:w-52">
          <span className="text-8xl sm:text-9xl">🧺</span>

          <span className="absolute right-3 top-5 text-4xl">🥕</span>
          <span className="absolute bottom-5 left-3 text-4xl">🍅</span>
          <span className="absolute right-2 bottom-6 text-3xl">🥬</span>
        </div>

        {/* Error Code */}
        <p className="text-7xl font-extrabold tracking-tight text-emerald-700 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          পাতাটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          দুঃখিত! আপনি যে পাতাটি খুঁজছেন সেটি এখানে নেই।
          হয়তো লিংকটি ভুল অথবা পাতাটি সরিয়ে ফেলা হয়েছে।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:w-auto"
          >
            🏠 হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-slate-100 pt-5">
          <p className="text-sm font-bold text-emerald-700">
            🟢 বাজার দর
          </p>
          <p className="mt-1 text-xs text-slate-400">
            সঠিক দামে, সঠিক বাজারে
          </p>
        </div>
      </div>
    </main>
  );
}
