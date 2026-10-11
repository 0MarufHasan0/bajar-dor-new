
import { Skeleton } from "@heroui/react";

export default function CategoryLoading() {
  return (
    <div className="mx-auto hidden w-full max-w-7xl px-6 py-3 md:block">
      <ul className="flex items-center gap-4 overflow-hidden">
        {/* Home */}
        <li className="shrink-0">
          <Skeleton className="h-8 w-16 rounded-lg bg-gray-300" />
        </li>

        {/* Categories */}
        {Array.from({ length: 8 }).map((_, index) => (
          <li
            key={index}
            className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1"
          >
            <Skeleton className="h-5 w-5 rounded-md bg-gray-300" />

            <Skeleton className="h-4 w-16 rounded-md bg-gray-300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
