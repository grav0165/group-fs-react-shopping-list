import FoodItem from "../FoodItem/FoodItem";
import "./ItemList.css";

function ItemList({ itemList }) {
  return (
    <div className="cards">
      <ul className="cards-items">
        {itemList.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
