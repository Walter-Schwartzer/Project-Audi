import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ({ items }) => {
  
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        margin: "30px",
        fontSize: "2.6rem",
        padding: "10px",
        fontWeight: "400",
        letterSpacing: "7px"
      }}>Catalogo</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        }) }
      </div>
    </div>
  );
};

export default ItemList;