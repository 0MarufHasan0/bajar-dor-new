
'use client';

import { Label, ListBox, Select } from "@heroui/react";
import { useState } from "react";
import HomePageCard from "./HomePageCard";

export default function SortBy({ product }) {
  const [sortBy, setSort] = useState('ডিফল্ট');

  const handleSort = (product) => {
    const sorted = [...product];

    if (sortBy === 'কম থেকে বেশি') {
      sorted.sort((a, b) => a.today - b.today);
    } else if (sortBy === 'বেশি থেকে কম') {
      sorted.sort((a, b) => b.today - a.today);
    }

    return sorted;
  };

  const sorted = handleSort(product);

  return (
    <div className="mt-6 px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div></div>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-center">
          <Label className="shrink-0">সাজান</Label>

          <Select
            className="w-full sm:w-[256px]"
            placeholder="Select one"
            selectedKey={sortBy}
            onSelectionChange={(value) => setSort(value)}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="ডিফল্ট" textValue="ডিফল্ট">
                  ডিফল্ট
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="কম থেকে বেশি" textValue="কম থেকে বেশি">
                  কম থেকে বেশি
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="বেশি থেকে কম" textValue="বেশি থেকে কম">
                  বেশি থেকে কম
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      <div className="my-4 text-xl font-bold sm:text-2xl lg:text-3xl">
        মোট {product.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((s) => (
          <div key={s.id} className="min-w-0">
            <HomePageCard product={s} />
          </div>
        ))}
      </div>
    </div>
  );
}