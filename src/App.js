import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [clothes, setClothes] = useState(data);
  
  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }

  return (
    <div>
      <div className="cont">
        <h2 className="back">Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemsForSale={clothes} />
    </div>
  );
}

export default App;
