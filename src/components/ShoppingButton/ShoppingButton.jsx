import { useState } from 'react';
 
function ShoppingButton () {

    const handleReset = () => {
        console.log('Reset button clicked')
    }

    const handleClear = () => {
        console.log('Clear button clicked')
    }

    return (
        <>
        <h2>Shopping List</h2>
        <button className='reset-btn' onClick={handleReset}>Reset</button><button className='clear-btn' onClick={handleClear}>Clear</button>
        </>
    )
}

export default ShoppingButton