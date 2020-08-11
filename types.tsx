import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
};

export type HomeStackParamsList = {
  Home: undefined;
  Product: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export interface ProductObj {
  id: string;
  name: string;
  images: Array<{
    id: string;
    source: ImageRequireSource;
    color?: string;
  }>;
  price: number;
  description?: string;
}

export interface AppContext {
  toggleTabbar: (state: "hide" | "show") => void;
  tabbarState: "hide" | "show";
}
