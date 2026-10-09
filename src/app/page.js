
import HomePageCard from "../component/HomePageCard.jsx";

const allProducts = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await allProducts();

  const dirUp = products.filter((p) => p.change.dir === "up").slice(0, 6);
  const dirDown = products.filter((p) => p.change.dir === "down").slice(0, 6);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* High Price */}
      <section className="container mx-auto mt-10 space-y-5">
        <h1 className="text-2xl text-[#1D271F] sm:text-3xl lg:text-4xl">
          <span className="text-red-600">▲</span> আজ দাম বেড়েছে
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dirUp.map((product) => (
            <HomePageCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Price Down */}
      <section className="container mx-auto mt-10 space-y-5">
        <h1 className="text-2xl text-[#1D271F] sm:text-3xl lg:text-4xl">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dirDown.map((product) => (
            <HomePageCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="container mx-auto mt-10 space-y-5">
        <h1 className="text-2xl text-[#1D271F] sm:text-3xl lg:text-4xl">
          সব পণ্য
        </h1>

        <p className="text-sm text-gray-500 sm:text-base">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <HomePageCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}