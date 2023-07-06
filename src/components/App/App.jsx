import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import ShoppingButton from '../ShoppingButton/ShoppingButton.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import './App.css';
// import needed libraries for React routes
// import {useState, useEffect} from 'react';
// import axios from 'axios';



function App() {

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
            <ItemForm />

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
