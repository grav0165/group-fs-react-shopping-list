import FoodItem from "../FoodItem/FoodItem";
import "./ItemList.css";

function ItemList({ itemList, purchaseItem, deleteItem}) {
  return (
    <ul>
            {itemList.map((item) => (
              <FoodItem key={item.id} item={item} purchaseItem={purchaseItem} deleteItem={deleteItem}/>
            ))}
  </ul>
  );
}

export default ItemList;

