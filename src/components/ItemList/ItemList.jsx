import Item from "../Item/Item";
import './ItemList.css'

function ItemList({ itemList }) {
  return (
    <div className="cards">
      <ul className="cards-items">
        {itemList.map((item) => {
          <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ItemList;
