import FoodItem from "../FoodItem/FoodItem";
import './ItemList.css'

function ItemList({ itemList, purchaseItem }) {

  return (
    <div className="cards">
      <ul className="cards-items">
        {itemList.map((item) => 
          <FoodItem key={item.id} item={item} purchaseItem={purchaseItem} />
        )}
        
      </ul>
    </div>
  );
}

export default ItemList;
