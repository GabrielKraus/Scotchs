import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Inicio from "./components/inicio/inicio";
import SobreNosotros from "./components/sobrenosotros/sobrenosotros";
import Contacto from "./components/contacto/contacto";
function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <ItemListContainer />
      <SobreNosotros />
      <Contacto />
    </div>
  );
}

export default App;
