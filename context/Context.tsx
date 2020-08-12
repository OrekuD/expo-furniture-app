import React, { useState, useContext, createContext } from "react";
import { AppContext, CartObj, ProductObj } from "../types";

const Context = createContext<AppContext>({
  tabbarState: "show",
  toggleTabbar: () => {},
  cart: [],
  manageCart: () => {},
  isProductInCart: () => false,
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [tabbarState, setTabbarState] = useState<"hide" | "show">("show");
  const [cart, setCart] = useState<CartObj[]>([]);

  const toggleTabbar = (state: "hide" | "show") => {
    setTabbarState(state);
  };

  const manageCart = (action: string, product?: CartObj | ProductObj) => {
    let tempCart: CartObj[] = [];
    let updatedProduct: CartObj | any = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD":
        if (isProductInCart(product)) {
          return;
        }
        product.count = 1;
        product.total = product.price;
        setCart([...cart, product]);
        break;
      case "REMOVE":
        setCart(cart.filter((cartItem) => cartItem.id !== product.id));
        break;
      case "EMPTY":
        setCart([]);
        break;
      case "INCREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        updatedProduct.total = Number(
          (updatedProduct.count * updatedProduct.price).toFixed(2)
        );
        console.log(updatedProduct.total);
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item.id !== product.id));
          return;
        }
        updatedProduct.count--;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const isProductInCart = (product: ProductObj) => {
    if (cart.find((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  const state: AppContext = {
    tabbarState,
    toggleTabbar,
    cart,
    manageCart,
    isProductInCart,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
