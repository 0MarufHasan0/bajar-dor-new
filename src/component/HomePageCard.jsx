import { Card } from "@heroui/react";
import React from "react";

const HomePageCard = ({ product }) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Card className="border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Header */}
      <div className="flex items-center gap-3">
        {/* Emoji */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
          {product.image}
        </div>

        {/* Product Info */}
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-gray-900">
            {product.nameBn}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            প্রতি {product.unit.toLocaleString("bn-BD")}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gray-100" />

      {/* Price Section */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-500">
            আজকের দাম
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">
              {product.today.toLocaleString("bn-BD")}
            </span>

            <span className="text-sm font-medium text-gray-500">
              টাকা
            </span>
          </div>
        </div>

        {/* Price Change */}
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold ${
            isUp
              ? "bg-red-50 text-red-500"
              : isDown
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <span>
            {isUp ? "▲" : isDown ? "▼" : "—"}
          </span>

          <span>
            {(product.change.pct).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default HomePageCard;