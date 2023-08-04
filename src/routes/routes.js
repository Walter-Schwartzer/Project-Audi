import CartContainer from "../componentes/page/cartContainer/CartContainer";
import ItemListContainer from "../componentes/page/itemList/ItemListContainer";
import CheckoutContainer from "../componentes/page/checkout/CheckoutContainer";
import ItemDetailContainer from "../componentes/page/itemDetail/ItemDetailContainer";

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
    Element: ItemDetailContainer
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
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer
  },
]
