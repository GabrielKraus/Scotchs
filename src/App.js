import "./App.css"
import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Inicio from "./components/inicio/inicio";
import Cart from "./components/cart/cart";
import SobreNosotros from "./components/sobrenosotros/sobrenosotros";
import Contacto from "./components/contacto/contacto";
import ItemDetailContainer from "./components/itemDeitailContainer/itemDetailContainer";
import ItemListContainerCategory from "./components/itemListContainerCategory/itemListContainerCategory"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext";


function App() {
  return (
    <div className="App">


      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/categoria/:category" element={<ItemListContainerCategory />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>


    </div>
  );
}

export default App;
