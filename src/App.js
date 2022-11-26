import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [clothes, setClothes] = useState(data);

  return (
    <div>
      <Buttons/>
      <Clothes itemsForSale={clothes} />
    </div>
  );
}

export default App;
