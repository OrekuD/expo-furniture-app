import { ProductObj } from "../types";

export const products: Array<ProductObj> = [
  {
    id: Math.random().toString(),
    name: "Ikea Armchair",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/ikea-ps-2012-armchair__1.webp"),
      },
      {
        id: "1",
        source: require("../assets/images/products/ikea-ps-2012-armchair__2.jpg"),
      },
      {
        id: "2",
        source: require("../assets/images/products/ikea-ps-2012-armchair__3.jpg"),
      },
    ],
    price: 30,
  },
  {
    id: Math.random().toString(),
    name: "Janinge Chair",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/janinge-chair__1.webp"),
      },
      {
        id: "1",
        source: require("../assets/images/products/janinge-chair__2.webp"),
      },
    ],
    price: 30,
  },
  {
    id: Math.random().toString(),
    name: "Urbeanears Headphones",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/urbanears_blue.png"),
        color: "blue",
      },
      {
        id: "1",
        source: require("../assets/images/products/urbanears_grey.png"),
        color: "grey",
      },
      {
        id: "2",
        source: require("../assets/images/products/urbanears_pink.png"),
        color: "pink",
      },
      {
        id: "3",
        source: require("../assets/images/products/urbanears_mint.png"),
        color: "mint",
      },
    ],
    price: 80,
  },
  {
    id: Math.random().toString(),
    name: "Leifarne Armchair",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/leifarne-armchair__1.webp"),
      },
      {
        id: "1",
        source: require("../assets/images/products/leifarne-armchair__2.webp"),
      },
      {
        id: "2",
        source: require("../assets/images/products/leifarne-armchair__3.webp"),
      },
    ],
    price: 30,
  },
];
