import SortBy from '@/component/SortBy';
import HomePageCard from '../../../component/HomePageCard';
import { Card } from '@heroui/react';
import React from 'react';


const categorySingleProductGet = async (categorySlug) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categorySlug}`,{
        cache :'no-store'
    }
  );


  
  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
}

const CategoryPage = async({params}) => {
    const {categorySlug} = await params
    const category= await categorySingleProductGet(categorySlug)
    // console.log('category' ,category)
    const currentCategory = category[0];
   
  
    return (
        <div className='mt-5 container mx-auto'>
            <Card >
              {/* Product Header */}
      <div className="flex items-center gap-3">
        {/* Emoji */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
          {currentCategory?.image}
        </div>

        {/* Sort S */}
        <div className="min-w-0">
          <h2 className="truncate text-3xl font-bold text-gray-900">
            {currentCategory?.categoryNameBn}
          </h2>

          <p className="mt-1 text-sm text-gray-500 ">
            {/* প্রতি {product.unit.toLocaleString("bn-BD")} */}
            {category.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
            </Card>
{/* 
            
        {/* Product Info */}
        <div className=" ">
          <h2 className="truncate text-3xl font-bold text-gray-900">
             <SortBy product={category}/>
          </h2>

        </div>

          
        </div>
    );
};

export default CategoryPage;