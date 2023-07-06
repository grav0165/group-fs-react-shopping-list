import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import ShoppingButton from "../ShoppingButton/ShoppingButton.jsx";
import ItemForm from "../ItemForm/ItemForm.jsx";
import ItemList from "../ItemList/ItemList";
import "./App.css";

function App() {
    // arrow function - POST route that collects data from ItemForm
    const addItem = (newShoppingItem) => {
        axios({
            method: 'POST',
            url: '/item',
            data: newShoppingItem
        })
        .then(response => {
            //call GET route function here!!
        })
        .catch(error => {
            alert('Error POSTing new item to database from addItem: ', error)
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
            
            {/* GET content */}

            {/* POST content */}
            <ItemForm 
            addItem={addItem}
            />

            {/* PUT content */}

            {/* DELETE content */}
            <main>
            <h1>Add an Item</h1>
                <p>
                    <span>Item: </span>
                    <input type= 'text' placeholder='Item' style={{width: '250px'}}/>
                </p>
                <p>
                    <span>Quantity: </span> 
                    <input type="number" placeholder='#' style={{width:'50px'}}/>
                    <span>Unit: </span>
                    <input type='text' placeholder='lbs' style={{width:'125px'}}/>
                </p>
                <ShoppingButton />
                <h2>Shopping List</h2>
            </main>
        </div>
    )cd 
    
}

export default App;
