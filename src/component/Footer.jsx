import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-4 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-600 sm:flex-row sm:text-left">
        <p>
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-gray-500">
          সকল দাম সম্ভাব্য; বাজার পরিস্থিতি অনুযায়ী পরিবর্তিত হতে পারে।
        </p>
      </div>
    </footer>
  );
};

export default Footer;