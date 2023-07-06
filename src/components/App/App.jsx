import React from 'react';
import Title from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header Header= 'Shopping List'/>
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
                <h2>Shopping List</h2>
            </main>
        </div>
    );
}

export default App;
