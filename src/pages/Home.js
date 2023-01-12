import { useState } from "react";
import Buttons from "../components/Buttons";
import Clothes from "../components/Clothes";
import { data } from "../data";

function Home() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(
      (element) => element.searchTerm === searchTerm
    );
    setClothes(newClothes);
  };

  return (
    <div>
      <div className="cont">
        <h1 className="back">Free Standart Shipping</h1>
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Clothes itemsForSale={clothes} />
    </div>
  );
}

export default Home;
