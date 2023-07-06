import {useState, useEffect} from 'react';
import Header from "../Header/Header.jsx";
import "./App.css";
import ItemList from '../ItemList/ItemList';


function App() {
const [itemList, setItemList] = useState([]);

// GET 
const getItems = () => {
    axios({
        method: 'GET',
        url: '/item'
    }).then(response => {
        console.log('Response: ', response);
        console.log('Response.data: ', response.data);

        setItemList(response.data);
    }).catch(error => {
        console.log('Error on GET: ', error)
    })
}

// useEffect
useEffect(() => {
getItems()
}, []);

// POST

// PUT 

// DELETE 

  return (
    <div className="App">
      <Header />
      {/* title */}
      {/* Form */}
      {/* title */}
      {/* button */}
      {/* card list */}
      <ItemList ItemList={itemList}/>
    </div>
  );
}

export default App;
