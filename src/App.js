import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Inicio from "./components/inicio/inicio";
import SobreNosotros from "./components/sobrenosotros/sobrenosotros";
import Contacto from "./components/contacto/contacto";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
