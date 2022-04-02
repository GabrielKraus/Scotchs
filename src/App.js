import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Inicio from "./components/inicio/inicio";
import SobreNosotros from "./components/sobrenosotros/sobrenosotros";
import Contacto from "./components/contacto/contacto";
import ItemDetailContainer from "./components/itemDeitailContainer/itemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/contacto/:name" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
