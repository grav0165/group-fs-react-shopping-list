import { useState } from "react";
import "./Item.css";

function Item({ item }) {
  const [buy, setBuy] = useState(false);
//   const [remove, setRemove] = useState(true);

  const handleButton = () => {
    if (item.purchased) {
      setBuy(!buy);
    // } else {
    //   setRemove(!remove);
    }
  };

  console.log(item.purchased, setBuy, setRemove);

  return (
    <li className="item">
      <h5>{item.name}</h5>
      <div className="item-amount">
        <p className="item-quantity">{item.quantity}</p>
        <span className="item-unit">{item.unit}</span>
      </div>
      <div className="btn">
        <button
          className={item.purchased === true ? "buyBtn" : "transparent"}
          onClick={handleButton}
        >
          Buy
        </button>
        <button
          className={item.purchased === false ? "removeBtn" : "transparent"}
          onClick={handleButton}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default Item;
