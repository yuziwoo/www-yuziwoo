import { lazy } from "react";

export const HomePage = lazy(
  () => import('../Home/Home')
);

export const ShopPage = lazy(
  () => import('../Shop/Shop')
);

export const ShoplistPage = lazy(
  () => import('../Shop/Shoplist')
);

export const AboutPage = lazy(
  () => import('../About/About')
);