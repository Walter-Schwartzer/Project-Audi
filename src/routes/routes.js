import CartContainer from "../componentes/page/cartContainer/CartContainer";
import ItemDetail from "../componentes/page/itemDetail/ItemDetail";
import ItemListContainer from "../componentes/page/itemList/ItemListContainer";
import CheckoutContainer from "../componentes/page/checkout/CheckoutContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer
  },
]