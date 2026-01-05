type CategoriesType = {
  category: string;
  coverImg: string;
  total_item: number;
  linkPath: string;
};

export const CATEGORIES: CategoriesType[] = [
  {
    category: "Shoes",
    coverImg: "/products/shoes_coverImg.jpeg",
    total_item: 62,
    linkPath: "/product-category/shoes",
  },

  {
    category: "Shirt",
    coverImg: "/products/shirts_coverImg.jpeg",
    total_item: 40,
    linkPath: "/product-category/shirts",
  },

  {
    category: "Bags",
    coverImg: "/products/bags_coverImg.jpeg",
    total_item: 24,
    linkPath: "/product-category/bags",
  },

  {
    category: "Accessories",
    coverImg: "/products/accessories_coverImg.jpeg",
    total_item: 34,
    linkPath: "/product-category/accessories",
  },
];

// export const CART = [
//   {
//     id: 0,
//     name: "ADIDAS YEEZY 700 COPPER FADE SNEAKERS",
//     category: "shoes",
//     price: "$300",
//     imgUrl: "/products/adidas_yeezy_sneaker.jpeg",
//     quantity: 1,
//   },
// ];
