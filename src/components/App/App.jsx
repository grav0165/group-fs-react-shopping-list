import React from 'react';
// import axios from 'axios';

import Header from '../Header/Header.jsx';
import ShoppingButton from '../ShoppingButton/ShoppingButton.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import './App.css';
// import needed libraries for React routes
// import {useState, useEffect} from 'react';
// import axios from 'axios';



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
            method: 'DELETE',
            url: `/item/`
        })
        .then( response => {
            console.log('Deleted an item');
            // getItems()
        })
        .catch( error => {
            console.log('Error in DELETE request: ', error);
            alert('Error in deleting an item');
        })
    }

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
                <p>Under Construction...</p>
                <ShoppingButton />
            </main>
        </div>
    );
}

export default App;
