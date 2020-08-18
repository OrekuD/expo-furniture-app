export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
};

export type HomeStackParamsList = {
  Home: undefined;
  Product: undefined;
};

export interface ProductObj {
  id: string;
  name: string;
  images: Array<{
    id: string;
    source: string;
    color?: string;
  }>;
  price: number;
  description?: string;
}

export interface CartObj extends ProductObj {
  count: number;
  total: number;
}

export interface AppContext {
  toggleTabbar: (state: "hide" | "show") => void;
  tabbarState: "hide" | "show";
  cart: CartObj[];
  manageCart: (
    action: "ADD" | "REMOVE" | "EMPTY" | "INCREASE" | "DECREASE",
    payload?: CartObj | ProductObj
  ) => void;
  isProductInCart: (product: ProductObj) => boolean;
}
