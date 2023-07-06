import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import ShoppingButton from '../ShoppingButton/ShoppingButton.jsx'
import './App.css';


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
