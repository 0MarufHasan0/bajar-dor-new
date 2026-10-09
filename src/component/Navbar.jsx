"use client";

import { useEffect, useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [catagory, setCategory] = useState([]);
  const [date, setDate] = useState("");
  const pathname = usePathname();
  

  useEffect(() => {
    const CategoryNav = async () => {
      const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
      );

      const data = await res.json();

      setCategory(data);

      updateDate();
    };

    const updateDate = () => {
      const currentDate = new Date().toLocaleDateString("bn-BD", {
        timeZone: "Asia/Dhaka",
        dateStyle: "full",
      });

      setDate(currentDate);
    };

    CategoryNav();
    updateDate()

   
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator p-5 bg-background/70 backdrop-blur-lg">
      {/* Header */}
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>

            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo + Heading */}
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/logo-icon.png"
                alt="Bajar dor Logo"
                width={40}
                height={40}
                className="bg-[#058933] p-2 rounded-md"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold">বাজার দর</h1>
              <p className="text-gray-600">{date}</p>
              <p></p>
            </div>
          </div>
        </div>

        {/* Desktop Login */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
        </div>
      </header>

      {/* Desktop Category */}
      <div className="mx-auto hidden w-full max-w-7xl md:block">
        <ul className="flex gap-3 px-6 py-2">
          <li>
            <Link href="/" className={`${ pathname === `/`?'bg-green-500 text-white p-1':''}`}>
           🏠 হোম
            </Link>
          </li>
          {catagory.map((cat) => (
            <li key={cat?.id}>
              <Link
                href={`/categories/${cat?.slug}`}
                className= {`flex items-center gap-1 ${ pathname === `/categories/${cat?.slug}`?'bg-green-500 text-white p-1':''}`}
              >
                <span>{cat.icon}</span>
                <p>{cat.nameBn}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">

            
            {/* Mobile Categories */}
             <li>
            <Link href="/" className={`${ pathname === `/`?'bg-green-500 text-white p-1':''}`}>
           🏠 হোম
            </Link>
          </li>
            {catagory.map((cat) => (
              <li key={cat?.id}>
                <Link
                  href={`/categories/${cat?.slug}`}
                  className="flex items-center gap-2 py-2"
                >
                  <span>{cat.icon}</span>
                  <p>{cat.nameBn}</p>
                </Link>
              </li>
            ))}

            {/* Mobile Auth */}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>

              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}