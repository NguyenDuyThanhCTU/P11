import Admin from "../Components/Admin/Admin";
import Contact from "../Components/Client/Home/Contact/Contact";
import Home from "../Components/Client/Home/Home";
import Introduce from "../Components/Client/Introduce/Introduce";
import News from "../Components/Client/News/News";
import NewsDetail from "../Components/Client/News/NewsDetail";
import ProductDetail from "../Components/Client/Products/ProductDetail";
import Products from "../Components/Client/Products/Products";

import Login from "../Components/Login/Login";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: AdminLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/san-pham/:id",
    component: Products,
    Layout: ClientLayout,
  },
  {
    path: "/chi-tiet-san-pham/:id",
    component: ProductDetail,
    Layout: ClientLayout,
  },

  {
    path: "/gioi-thieu/",
    component: Introduce,
    Layout: ClientLayout,
  },
  {
    path: "/tin-tuc/",
    component: News,
    Layout: ClientLayout,
  },
  {
    path: "/tin-tuc/:id",
    component: News,
    Layout: ClientLayout,
  },
  {
    path: "/chi-tiet-tin-tuc/:id",
    component: NewsDetail,
    Layout: ClientLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    Layout: ClientLayout,
  },
];
