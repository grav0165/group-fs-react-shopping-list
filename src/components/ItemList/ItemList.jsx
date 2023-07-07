import FoodItem from "../FoodItem/FoodItem";
import "./ItemList.css";

function ItemList({ itemList, purchaseItem }) {
  return (
    <ul>
            {itemList.map((item) => (
              <FoodItem key={item.id} item={item} purchaseItem={purchaseItem} />
            ))}
   </ul>
  );
}

export default ItemList;

