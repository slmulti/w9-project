const { db } = require('../db')
const { DataTypes } = require('sequelize')
const { itemData } = require('../seedData')


//creating the model
const Item = db.define('Item', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {timestamps: false})

//mapping through the array

async function seedItem () {
    await db.sync({ force: true })
    for (let item of itemData){
        await Item.create(item)
    }
}

seedItem()

module.exports = { Item, seedItem } 