import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function productPath(category: string, name: string) {
  const slug = name.trim().replace(/\s+/g, "-").toLowerCase();
  return `/product-category/${category}/${slug}`;
}
