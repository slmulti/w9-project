import { useState, useEffect } from 'react'

function Header() {
    return(
        <div>
            <h1 className='header' >SDJ Inventory</h1>
            <button>Add Item</button>
            <button>Remove Item</button>
        </div>
    )
}


export default Header;