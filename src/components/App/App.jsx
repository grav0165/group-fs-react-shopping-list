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
      })
      .catch((error) => {
        alert("Error POSTing new item to database from addItem: ", error);
        console.log(error);
      });
  };

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
      {/* title */}
      {/* Form */}
      <ItemForm addItem={addItem} />
      {/* title */}
      {/* button */}
      <main>
        <p>Under Construction...</p>
        <ShoppingButton />
      </main>
      {/* card list */}
      <ItemList itemList={itemList} />
    </div>
  );
}

export default App;
