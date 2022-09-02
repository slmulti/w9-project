import React from 'react';
import {useState, useEffect} from 'react';

function AddProduct(){

    const [newTitle, setNewTitle] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const handleSubmit = e=> {
        e.preventDefualt();
        setNewTitle('')
        setNewPrice('')
        setNewDescription('')
        setNewCategory('')
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h2>Add a Product</h2>
                <p>Please complete the form<br></br> below to add new Product</p>
                <label></label>
                <input type='text' placeholder='Product Name' value={newTitle} onChange={e=>setNewTitle(e.target.value)}/><br></br>
                <input type='text' placeholder='Price' value={newPrice} onChange={e=>setNewPrice(e.target.value)}/><br></br>
                <input type='text' placeholder='Product Description...' value={newDescription} onChange={e=>setNewDescription(e.target.value)}/><br></br>
                <input type='text' placeholder='category' value={newCategory} onChange={e=>setNewCategory(e.target.value)}/><br></br>
                <button onClick={() => {alert(`Product ${newTitle} Added`);}}>Submit</button>
            </form>
        </main>
    )
}

export default AddProduct;