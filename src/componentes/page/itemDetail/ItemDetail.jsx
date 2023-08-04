import CounterContainer from "../../common/counter/CounterContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css"


const ItemDetail = ({onAdd, totalQuantity, producto}) => {

  return (
    <div className="ctn-item-detail">
      <img src={producto.img}></img>
      <div className="ctn-i-product">
        <h2>{producto.title}</h2>
        <h4>${producto.price}</h4>
      </div>

      {(typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}

      {producto.stock === 0 && <h2>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2>tenes las maximas cantidades en el carrito</h2>
        )}

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
