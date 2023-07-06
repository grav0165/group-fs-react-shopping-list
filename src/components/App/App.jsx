import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
// import needed libraries for React routes
import {useState, useEffect} from 'react';
import axios from 'axios';


let [newItem, setNewItem] = useState('');

function App() {
    return (
        <div className="App">
            <Header />
            <form>
                <label>
                    Item
                </label>
                    <input type="text" 
                    onChange={(event) => setNewItem(event.target.value)}
                    value={newItem}
                    />
            </form>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
