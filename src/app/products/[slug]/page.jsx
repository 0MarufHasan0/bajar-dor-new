
import Tablee from "@/component/Table";
import { Card } from "@heroui/react";
import { Table } from "lucide-react";

const getProductDetails = async (slug) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

const Details = async ({ params }) => {
  const { slug } = await params;

  const product = await getProductDetails(slug);

  console.log("products", product);

  const priceUp = product.today - product.yesterday;

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  // Price
  const prices = product.markets.flatMap((market) => [
    market.min,
    market.max,
  ]);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const marketPrices = product.markets.map(
    (market) => (market.min + market.max) / 2
  );

  const avgPrice =
    marketPrices.reduce((total, price) => total + price, 0) /
    marketPrices.length;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Product Header */}
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-4xl sm:h-20 sm:w-20 sm:text-5xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <p className="mb-2 text-sm font-semibold text-emerald-600">
                পণ্যের বিস্তারিত
              </p>

              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                {product.nameBn}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                প্রতি {product.unit.toLocaleString("bn-BD")}
              </p>

              <p className="mt-3 text-sm text-slate-600">
                গতকালের তুলনায় আজ দাম{" "}
                {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "একই আছে"} ·{" "}
                <span
                  className={`font-bold ${
                    isUp
                      ? "text-red-500"
                      : isDown
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }`}
                >
                  {Math.abs(priceUp).toLocaleString("bn-BD")} টাকা
                </span>
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="rounded-2xl bg-emerald-50 p-5 sm:min-w-60 sm:p-6">
            <p className="text-sm font-medium text-slate-600">
              আজকের দাম
            </p>

            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                {product.today.toLocaleString("bn-BD")}
              </h1>

              <span className="text-sm text-slate-500">
                টাকা / {product.unit}
              </span>
            </div>

            <div
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold ${
                isUp
                  ? "bg-red-100 text-red-600"
                  : isDown
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>

              <span>
                {product.change.pct.toLocaleString("bn-BD")}%
              </span>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <section>
          <div className="mb-5">
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
              দামের সারসংক্ষেপ
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              বিভিন্ন বাজারের দামের তুলনা
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-600">
                  সর্বনিম্ন দাম
                </h2>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  ↓
                </span>
              </div>

              <p className="mt-4 text-3xl font-extrabold text-emerald-600">
                {minPrice.toLocaleString("bn-BD")}
                <span className="ml-2 text-sm font-medium text-slate-500">
                  টাকা
                </span>
              </p>

              <p className="mt-2 text-sm text-slate-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </Card>

            <Card className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-600">
                  সর্বাধিক দাম
                </h2>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-xl">
                  ↑
                </span>
              </div>

              <p className="mt-4 text-3xl font-extrabold text-red-500">
                {maxPrice.toLocaleString("bn-BD")}
                <span className="ml-2 text-sm font-medium text-slate-500">
                  টাকা
                </span>
              </p>

              <p className="mt-2 text-sm text-slate-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </Card>

            <Card className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:col-span-2 sm:p-6 lg:col-span-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-600">
                  গড় দাম
                </h2>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ≈
                </span>
              </div>

              <p className="mt-4 text-3xl font-extrabold text-blue-600">
                {avgPrice.toFixed(0).toLocaleString("bn-BD")}
                <span className="ml-2 text-sm font-medium text-slate-500">
                  টাকা
                </span>
              </p>

              <p className="mt-2 text-sm text-slate-500">
                প্রতি {product.unit} হিসেবে
              </p>
            </Card>
          </div>
        </section>

        {/* Market Table */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                বিভিন্ন বাজারে দাম
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                বাজারভিত্তিক সর্বনিম্ন ও সর্বাধিক দামের তালিকা
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              {product.markets.length.toLocaleString("bn-BD")} টি বাজার
            </span>
          </div>

          <div className="overflow-x-auto">
            <Tablee product={product} />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Details;
