
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  const date = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
  });

  return (
    <section className="bg-[#f1f6f1] px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto container">
        <div className="flex min-h-[380px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] border border-[#e0e9e1] bg-[#fbfdfb] px-6 py-8 shadow-sm sm:px-10 md:flex-row md:px-12 lg:min-h-[440px] lg:px-16 lg:py-12">

          {/* Left Content */}
          <div className="w-full flex-1">
            <span className="inline-flex rounded-full bg-[#e1f2e6] px-4 py-2 text-sm font-medium text-green-700">
              {date}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[#202b24] sm:text-4xl lg:text-5xl">
              আজকের বাজারের দাম
              <br className="hidden sm:block" /> এক নজরে
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
              বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
              দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link
              href="#সব-পণ্য"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-800"
            >
              সব পণ্য দেখুন →
            </Link>
          </div>

          {/* Right Illustration */}
          <div className="relative flex w-full max-w-[400px] shrink-0 items-center justify-center md:w-[42%]">
            <div className="absolute h-64 w-64 rounded-full bg-[#e1f2e6] sm:h-80 sm:w-80" />

            <div className="relative flex h-64 w-full items-center justify-center sm:h-80">
              <Image
                src="/bazar-hero.png"
                alt="বাজারের পণ্যের ছবি"
                width={400}
                height={320}
                priority
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
