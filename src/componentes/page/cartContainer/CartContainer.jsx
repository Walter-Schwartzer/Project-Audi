import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./CartContainer.css"

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()

  const limpiar = ()=>{
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si, eliminar!',
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito limpiado exitosamente', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito queda como estaba', '', 'info')
      }
    })
    
  }

  return (
    <div>
      <h1 style={{fontSize:"32px"}}>CARRITO</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="ctn-buy">
            <img src={elemento.img} style={{width:"170px", height:"100px"}}></img>
            <h4>{elemento.title}</h4>
            <h5>${elemento.price}</h5>
            <h5>{elemento.quantity}</h5>
            <button onClick={() => deleteById(elemento.id)}>❌</button>
          </div>
        );
      })}

          <h2 style={{fontSize:"20px", marginLeft:"20px"}}>El total es: ${total}</h2>
      <div style={{display:"flex", margin:"20px 10px", padding:"5px", justifyContent:"end"}} className="ctn-end-shop">
          
          {
            cart.length > 0  && <button onClick={limpiar}>🚮</button>
          }
          {
            cart.length > 0 && <Link to="/checkout" style={{fontSize:"32px"}}>🛍️</Link>
          }
          
      </div>

    </div>
  );
};

export default CartContainer;