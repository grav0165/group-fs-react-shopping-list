import '../ItemList/ItemList.css'
import Button from 'react-bootstrap/Button';

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
    <li >
      <h5 className="card-title">{props.item.name}</h5>
      <div className="card-body">
      
        <p className="item-quantity">{props.item.quantity} <span className="item-unit">{props.item.unit}</span></p>
    
        <Button className='btn btn-success' onClick={handleUpdate}
        >
          Buy
        </Button>
        <Button className="btn btn-danger" onClick={handleDelete}
        >
          Remove
        </Button>

      </div>
    </li>
  );
}

export default FoodItem;

