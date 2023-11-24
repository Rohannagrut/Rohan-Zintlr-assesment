import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Consumers from "./pages/Consumers";
import LayOut from "./Components/LayOut";
import CustomizeConsumers from "./pages/CustomizeConsumers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
          <Route element={<Consumers />} path="/" />
          <Route element={<CustomizeConsumers />} path="/customize" />
          
          <Route element={<Home />} path="/home" />
          {/* beacuse we only have one page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
