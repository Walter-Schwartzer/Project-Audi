import { useContext, useState } from "react";
import "./Checkout.css"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom";

const CheckoutContainer = () => {

  const [orderId, setOrderId] = useState("")

  const { cart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const [data, setData] = useState({
    nombre: "",
    phone: "",
    email: "",
  });


  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp()
    }
    
    const orderCollections = collection( db , "orders" )
    addDoc( orderCollections, order ).then(res => setOrderId(res.id))

    cart.forEach((product) =>{
      updateDoc(doc(db, "products", product.id) , {stock: product.stock - product.quantity,})
    })
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });

  };


  return (
    <div>
      <h1 style={{fontSize:"32px", marginBottom:"100px", marginLeft:"100px"}}>Checkout</h1>

      {
        orderId ? (
          <div style={{display:"flex", flexDirection:"column", margin:"10px 300px", fontSize:"30px"}}>
            <h3>Gracias por su compra!</h3>
            <h4>Su orden de compra es {orderId}</h4>
            <Link to="/" style={{border:"3px solid #000", width:"300px", cursor:"pointer", display:"flex", justifyContent:"center"}}>Volver a comprar</Link>
          </div>
          )
          :
          (
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
            style={{border:"1px solid #000", width:"360px", height:"50px", marginBottom:"5px"}}
            />
            <input
            type="number"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
            style={{border:"1px solid #000", width:"360px", height:"50px", marginBottom:"5px"}}
            />
            <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
            style={{border:"1px solid #000", width:"360px", height:"50px", marginBottom:"5px"}}
            />
            <button type="submit" className="btn-enviar">Comprar</button>
            </form>  
          )
      }
    </div>
  );
};

export default CheckoutContainer;