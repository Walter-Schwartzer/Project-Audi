
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cart.css"

const Cart = () => {
  const {getTotalQuantity} = useContext(CartContext)
  let total = getTotalQuantity()
  return (
    <>
    <Link to="/cart">
      <div  href="#features" className="iconCart">
        🛒
      </div>
    </Link>
      <span className="cantidadCarrito">{total}</span>
    </>
  );
}

export default Cart