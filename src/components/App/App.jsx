import React from 'react';

import Header from '../Header/Header.jsx';
import ShoppingButton from '../ShoppingButton/ShoppingButton.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import './App.css';
// import needed libraries for React routes
// import {useState, useEffect} from 'react';
// import axios from 'axios';



function App() {
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
