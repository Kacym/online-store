import strawberry from "../images/strawberry.jpg";
import orange from "../images/orange.jpg";
import qiwi from "../images/qiwi.jpg";

export const products = [
  {
    title: "Product 1",
    amount: 1,
    img: strawberry,
    price: 1,
    basePrice: 1,
    id: Math.floor(Math.random() * 1000),
    number: 1,

  },
  {
    title: "Product 2",
    amount: 1,
    img: orange,
    price: 2,
    basePrice: 2,
    id: Math.floor(Math.random() * 100000),
    number: 2,
  },
  {
    title: "Product 3",
    amount: 1,
    img: qiwi,
    price: 3,
    basePrice: 3,
    id: Math.floor(Math.random() * 100000),
    number: 3,
  },
];
