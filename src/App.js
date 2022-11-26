import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import "./App.css";

function App() {
  const [clothes, setClothes] = useState(data);

  return (
    <div>
      <Clothes itemsForSale={clothes} />
    </div>
  );
}

export default App;
