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

  // update item
  const purchaseItem = (itemToUpdate) => {
    console.log(itemToUpdate);
    axios({
      method: "PUT",
      url: `/item/${itemToUpdate.id}`,
    })
      .then((response) => {
        console.log("Purchased an item");
        getItems();
      })
      .catch((error) => {
        alert("Error in UPDATEing item in database: ", error);
        console.log(error);
      });
  };

  // reset all items
  const resetItems = () => {
    console.log("Inside of reset items");
    axios({
      method: "PUT",
      url: `/itemReset/`,
    })
      .then((response) => {
        console.log("Resetting all purchases");
        getItems();
      })
      .catch((error) => {
        alert("Error in UPDATEing items in database: ", error);
        console.log(error);
      });
  };

  // clear all items
  const clearItems = () => {
    console.log("Inside of clear items");
    axios({
      method: "DELETE",
      url: `/itemClear/`,
    })
      .then((response) => {
        console.log("Clearing all items");
        getItems();
      })
      .catch((error) => {
        alert("Error in clearing all items in database: ", error);
        console.log(error);
      });
  };

  // delete item
  const deleteItem = (idToDelete) => {
    console.log("in deleteItem function!", idToDelete.id);
    axios({
      method: "DELETE",
      url: `/item/${idToDelete.id}`,
    })
      .then((response) => {
        console.log("Deleted an item");
        getItems();
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
        <ShoppingButton resetItems={resetItems} clearItems={clearItems} />
      </main>
      <ItemList
        itemList={itemList}
        purchaseItem={purchaseItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
