import { ProductObj } from "../types";

export const products: Array<ProductObj> = [
  {
    id: Math.random().toString(),
    name: "Ikea Armchair",
    price: 249.99,
    description:
      "Aliquip irure nisi proident commodo sunt officia veniam incididunt. Lorem do reprehenderit aliquip duis incididunt. Consequat ex consectetur laborum labore consectetur adipisicing occaecat dolore eiusmod consequat voluptate veniam aliquip. Eiusmod excepteur amet elit non do mollit irure excepteur officia laboris. Commodo occaecat veniam consequat mollit do dolor deserunt magna nisi nulla sint eu anim cillum. Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/ikea-ps-2012-armchair__1.webp"),
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Janinge Chair",
    price: 149.99,
    description:
      "Anim consequat Lorem aliqua sint enim esse cupidatat consectetur consectetur. Velit esse nulla aute anim tempor. Esse ex eiusmod ea non ut non ad in aliqua anim adipisicing id anim non. Occaecat nulla et enim anim consequat nisi aliquip dolor laborum et dolor nostrud consectetur aute.",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/janinge-chair__1.webp"),
        color: "#EAC91C",
      },
      {
        id: "1",
        source: require("../assets/images/products/janinge-chair__2.webp"),
        color: "#C8C9C4",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Urbeanears Headphones",
    price: 89.99,
    description:
      "Esse culpa dolore anim irure. Amet labore laborum quis excepteur nulla fugiat reprehenderit dolore cillum laboris nostrud officia eiusmod. Est consectetur anim proident pariatur occaecat eiusmod sint quis. Est cillum incididunt consequat irure. Adipisicing dolore ea anim exercitation. Consequat minim nostrud aliqua cupidatat ullamco sit eu nisi aliquip aliquip aute. Minim sunt occaecat enim labore veniam incididunt aliquip adipisicing in eiusmod amet adipisicing.",
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
        color: "#86A384",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Leifarne Armchair",
    price: 299.99,
    description:
      "Quis voluptate commodo consequat in nisi ad proident ea. Minim cupidatat qui amet in. Pariatur fugiat enim sunt id Lorem cupidatat. Tempor qui anim officia do irure consectetur cillum occaecat cillum. Sint ea sit proident Lorem id est amet amet occaecat eiusmod. Laboris adipisicing sint reprehenderit cupidatat velit veniam aliquip do incididunt minim proident. Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: require("../assets/images/products/leifarne-armchair__1.webp"),
        color: "#CD9929",
      },
      {
        id: "1",
        source: require("../assets/images/products/leifarne-armchair__2.webp"),
        color: "#DBDCD3",
      },
      {
        id: "2",
        source: require("../assets/images/products/leifarne-armchair__3.webp"),
        color: "#B99C6F",
      },
    ],
  },
];
