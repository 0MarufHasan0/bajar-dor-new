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
  const products= await allProducts()
  const dirUp = products.filter(p=> p.change.dir === "up").slice(0,6)
  const dirDown = products.filter(p=> p.change.dir === "down").slice(0,6)
  return (
   <div>
    {/* high Price  */}
    <section className="mt-10 space-y-5 container mx-auto">
      <h1 className="text-[#1D271F] text-4xl"><span className="text-red-600">▲</span> আজ দাম বেড়েছে</h1>
     <div className="grid grid-cols-3 ">
      {
      dirUp.map(product=>  <HomePageCard key={product.id} product = {product}/>)
     }
     </div>

    </section>
    {/* price down */}
    <section className="mt-10 space-y-5 container mx-auto">
      <h1 className="text-[#1D271F] text-4xl"><span className="text-green-600">▼</span> আজ দাম কমেছে</h1>
     <div className="grid grid-cols-3 ">
      {
      dirDown.map(product=>  <HomePageCard key={product.id} product = {product}/>)
     }
     </div>

    </section>
    {/* All product */}
    <section className="mt-10 space-y-5 container mx-auto">
      <h1 className="text-[#1D271F] text-4xl"> সব পণ্য</h1>
      <p className="text-gray-500">মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
     <div className="grid grid-cols-3 ">
      {
      products.map(product=>  <HomePageCard key={product.id} product = {product}/>)
     }
     </div>

    </section>
   </div>
  );
}
