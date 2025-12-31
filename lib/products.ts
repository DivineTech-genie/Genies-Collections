type PRODUCT_TYPE = {
  id: number;
  name: string;
  category: string;
  price: string;
  imgUrl: string;
};

export const PRODUCTS: PRODUCT_TYPE[] = [
  {
    id: 0,
    name: "ADIDAS YEEZY 700 COPPER FADE SNEAKERS",
    category: "shoes",
    price: "$300",
    imgUrl: "/products/adidas_yeezy_sneaker.jpeg",
  },

  {
    id: 1,
    name: "AIR JORDAN MULE GOLF SHOES",
    category: "shoes",
    price: "$400",
    imgUrl: "/products/air_jordan_shoes.jpeg",
  },
];
