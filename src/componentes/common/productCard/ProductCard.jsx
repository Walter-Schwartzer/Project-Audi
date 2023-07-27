
import { Link } from "react-router-dom"
import "./productCard.css"

const ProductCard = ({elemento, isInItemList = true}) => {
  return (
    <>
        <div className="ctn-productCard">
            <img src={elemento.img} alt="" />
            <div className="ctn-info">
                <h2>{elemento.title}</h2>
                <Link to={`../../itemDetail/${elemento.id}`}>    
                  <button className="btn-more">Conoce más</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ProductCard