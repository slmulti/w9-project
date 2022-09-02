import React from 'react';
import {useState, useEffect} from 'react';

function AddProduct(){

    const [newTitle, setNewTitle] = useState('')
    const [newPrice, setNewPrice] = useState(0)
    const [newDescription, setNewDescription] = useState('')
    const [newImage, SetNewImage] = useState('')
    const [newCategory, setNewCategory] = useState('')

    async function handleSubmit (e) {

        e.preventDefault();
        const imageURL = newImage ? newImage : "http://cdn.shopify.com/s/files/1/1078/6936/products/15162899151459308998mystery-box-clipart.hi_c1845e11-d168-486d-af2c-b9234904816b.png?v=1647464056"

        const body = {
            title: newTitle,
            price: newPrice,
            description: newDescription,
            image: imageURL,
            category: newCategory
        }

        try{
            const response = await fetch('http://localhost:5000/items',{
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify(body)
            })

            if (response.status === 200){
                window.alert((`Product ${newTitle} Added`))
            }
        } catch (err) {
            console.log('failed to fetch items', err)
        }

        setNewTitle('')
        setNewPrice(null)
        setNewDescription('')
        SetNewImage('')
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
                <input type='text' placeholder='image URL' value={newImage} onChange={e=>SetNewImage(e.target.value)}/><br></br>
                <input type='text' placeholder='Product Description...' value={newDescription} onChange={e=>setNewDescription(e.target.value)}/><br></br>
                <input type='text' placeholder='category' value={newCategory} onChange={e=>setNewCategory(e.target.value)}/><br></br>
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default AddProduct;