
import ItemDetails from "../itemDetails/ItemDetails";
import ItemList from "../itemList/ItemList";
import "./style.css";

const Home = () => {
  return (
    <div className="container-fluid ctnHome">
      <h2>Este es el Futuro Home</h2>
      <ItemDetails/>
      <ItemList/>
    </div>
  );
};

export default Home;
