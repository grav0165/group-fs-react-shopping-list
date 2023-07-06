import { useState } from "react";
import "./Item.css";

function FoodItem(props) {

  const handleUpdate = () => {
    console.log('Purchase Button clicked')
    props.purchaseItem({
      id: props.item.id
  })
  console.log(props.item.id)
  };

  const handleDelete = () => {
    console.log('Delete Button clicked');
  }



  return (
    <li className="item">
      <h5>{props.item.name}</h5>
      <div className="item-amount">
        <p className="item-quantity">{props.item.quantity}</p>
        <span className="item-unit">{props.item.unit}</span>
      </div>
      <div className="btn">
        <button onClick={handleUpdate}
        >
          Buy
        </button>
        <button onClick={handleDelete}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default FoodItem;
