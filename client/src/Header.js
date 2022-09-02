import { formHelperTextClasses } from '@mui/material';
import { useState, useEffect } from 'react'

const headStyle = {
    textAlign: "center",
    color: "black",
    fontFamily: "Serif",
    fontSize: 40,   
    backgroundColor: "white",
    padding: 10
}


function Header() {
    return(
        <div>
            <h1 className='header' style={headStyle} >SDJ Inventory</h1>
            <button>Add Item</button>
            <button>Remove Item</button>
        </div>
    )
}


export default Header;