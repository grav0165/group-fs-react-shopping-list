import{useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../ItemList/ItemList.css'

function ItemForm(props){

// set up hook for newItem
let [newItem, setNewItem] = useState('');
let [newQuantity, setNewQuantity] = useState('')
let [newUnit, setNewUnit] = useState('')

// function, handler to submit the form and POST the new item
function handleSubmit(event) {
    event.preventDefault();
    console.log('submit button clicked!');
    //add new item
    props.addItem({
        name: newItem,
        quantity: newQuantity,
        unit: newUnit
    })
    // clear input fields
    setNewItem('')
    setNewQuantity('')
    setNewUnit('')
}


return(
    <form onSubmit={handleSubmit}>
        <label>
            Item
        </label>
            <input type="text" placeholder='Name'
                onChange={(event) => setNewItem(event.target.value)}
                value={newItem}
                />
        <label>
            Quantity
        </label>
            <input type="text" placeholder='Number'
                onChange={(event) => setNewQuantity(event.target.value)}
                value={newQuantity}
                />
        <label>
            Unit
        </label>
            <input type="text" placeholder='Unit'
                onChange={(event) => setNewUnit(event.target.value)}
                value={newUnit}
                />
        <Button type='submit' className="btn btn-primary">Save</Button>
    </form>
)

}

export default ItemForm