import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import ShoppingButton from "../ShoppingButton/ShoppingButton.jsx";
import ItemForm from "../ItemForm/ItemForm.jsx";
import ItemList from "../ItemList/ItemList";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);

  // GET
  const getItems = () => {
    axios({
      method: "GET",
      url: "/item",
    })
      .then((response) => {
        console.log("Response: ", response);
        console.log("Response.data: ", response.data);

        setItemList(response.data);
      })
      .catch((error) => {
        console.log("Error on GET: ", error);
      });
  };

  // useEffect
  useEffect(() => {
    getItems();
  }, []);

  // arrow function - POST route that collects data from ItemForm
  const addItem = (newShoppingItem) => {
    axios({
      method: "POST",
      url: "/item",
      data: newShoppingItem,
    })
      .then((response) => {
        //call GET route function here!!
        getItems();
      })
      .catch((error) => {
        alert("Error POSTing new item to database from addItem: ", error);
        console.log(error);
      });
  };

  const purchaseItem = (itemToUpdate) => {
    console.log(itemToUpdate)
    axios({
        method: 'PUT',
        url: `/item/${itemToUpdate.id}`
    })
    .then((response) => {
        console.log('Purchased an item');
        getItems();
    })
    .catch((error) => {
        alert('Error in UPDATEing item in database: ', error);
        console.log(error);
    })
  }

const deleteItem = (idToDelete) => {
    axios({
    method: "DELETE",
    url: `/item/`,
    })
    .then((response) => {
        console.log("Deleted an item");
        // getItems()
    })
    .catch((error) => {
        console.log("Error in DELETE request: ", error);
        alert("Error in deleting an item");
    });
};

  return (
    <div className="App">
      <Header />
      <main>
      <h2 className="title"> Add An Item</h2>
      <ItemForm addItem={addItem} />
      
      <h2 className="title">Shopping List</h2>
        <ShoppingButton />
        </main>
      <ItemList itemList={itemList} purchaseItem={purchaseItem} />
      
    </div>
  );
}

export default App;
