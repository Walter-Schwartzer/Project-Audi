import { Link } from "react-router-dom";
import Cart from "../../common/cart/Cart";
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <>
        <header className="ctn-header">
          <Link to="/"><img src="https://res.cloudinary.com/dnm34qgtv/image/upload/v1687361355/Audi-logo_oknkxz.png" alt="logo"/></Link>
          <ul className="ctn-categories">
            <Link to="/">Inicio</Link>
            <Link to="/category/deportivo">Deportivos</Link>
            <Link to="/category/camionetas">Camionetas</Link>
          </ul>
        <Cart/>
        </header>
      </>
    </>
  );
};

export default Navbar;