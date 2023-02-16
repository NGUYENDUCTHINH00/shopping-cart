import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Listproduct from "./components/list-product/Listproduct";

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='row'>
          <Listproduct />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
