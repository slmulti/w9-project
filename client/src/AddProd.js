import React from 'react';
import {useState, useEffect} from 'react';

function AddProduct(){


    return (
        <main>
            <form>
                <h2>Add an Article</h2>
                <p>Please enter your details</p>
                <label></label>
                <input type='text' placeholder='Product Name' value={title} onChange={e=>setNewTitle(e.target.value)}/><br></br>
                <input type='text' placeholder='Price' value={price} onChange={e=>setNewPrice(e.target.value)}/><br></br>
                <p>Please a Product Description below</p>
                <input type='text' placeholder='Product Description...' value={newDescription} onChange={e=>setNewDescription(e.target.value)}/><br></br>
                <p>Please Give The Product a Category</p>
                <input type='text' placeholder='category' value={newCategory} onChange={e=>setNewCategory(e.target.value)}/><br></br>
                
                <p>Thanks for Adding {title}</p>
                
                <button>Submit</button>
            </form>
        </main>
    )
}

export default AddProduct;