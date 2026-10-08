import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const allDataMarquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
};

const MarqueeHeadline = async () => {
  const data = await allDataMarquee();

  return (
    <div className="w-full bg-gray-200 overflow-hidden border-y border-default-200 py-2 shadow-sm">
      <Marquee
        speed={100}
        pauseOnHover={true}
        gradient={false}
        autoFill={true}
     
      >
   

        {data.map((product) => (
                <Link  key={product.id} href={`/products/${product.slug}`}>
          <div
           
            className="mx-2 flex items-center gap-3 rounded-full border border-default-200 bg-default-50 px-4 py-2 transition hover:bg-default-100"
          >
            {/* Product */}
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {product.image}
              </span>

              <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                {product.nameBn}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-base font-bold text-foreground">
                {product.today.toLocaleString("bn-BD")}
              </span>

              <span className="text-xs text-default-500">
                টাকা/{product.unit.toLocaleString("bn-BD")}
              </span>
            </div>

            {/* Change */}
          <div
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                    ? "bg-green-50 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {product.change.dir === "up" ? (
                  <>
                    <span>▲</span>
                    <span>{product.change.pct}%</span>
                  </>
                ) : product.change.dir === "down" ? (
                  <>
                    <span>▼</span>
                    <span>{product.change.pct}%</span>
                  </>
                ) : (
                  <>
                    <span>—</span>
                    <span>{product.change.pct}%</span>
                  </>
                )}
               </div>
          </div>

          </Link>
        ))}
       
       
       
       
       
      </Marquee>
    </div>
  );
};

export default MarqueeHeadline;