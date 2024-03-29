import ItemListContainer from "./componentes/ItemContainer/ItemListContainer";
import Nabvar from "./componentes/nabvar/Nabvar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import { NotFound } from "./componentes/404/NotFound";
import { CartProvider } from "./componentes/Context/CartContext";
import { CarritoCtn } from "./componentes/Carrito/CarritoCtn";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/comic/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CarritoCtn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
