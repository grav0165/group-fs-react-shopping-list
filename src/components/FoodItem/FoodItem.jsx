// import { useState } from "react";
import "./FoodItem.css";

function FoodItem(props) {
//   const [buy, setBuy] = useState(false);
//   const [remove, setRemove] = useState(true);

//   const handleButton = () => {
//     if (item.purchased) {
//       setBuy(!buy);
//     // } else {
//     //   setRemove(!remove);
//     }
//   };


  return (
    <li className="item">
      <h5>{props.item.name}</h5>
      <div className="item-amount">
        <p className="item-quantity">{props.item.quantity} <span className="item-unit">{props.item.unit}</span></p>
      </div>
      <button> Buy </button>
        <button>Remove</button>
    </li>
  );
}

export default FoodItem;
