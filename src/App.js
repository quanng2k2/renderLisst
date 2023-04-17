import "./App.css";
import FooterProduct from "./components/FooterProduct";
import Headerproduct from "./components/HeaderProduct";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <div>
        <Headerproduct/> 
        <ListProduct />   
        <FooterProduct/> 
      </div>
    </div>
  );
}

export default App;
