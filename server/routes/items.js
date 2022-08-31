const express = require("express");
const routerItem = express.Router();
const { Item } = require("../models/inventory")

//GET all items

routerItem.get('/', async (req, res, next) => {
    try {
        const items = await Item.findAll();
        
        res.send(items);
    } catch (error) {
        next(error);
    }
});

//Get one item

routerItem.get('/:title', async (req, res) => {
    try {
        const itemChosen = await Item.findOne({where: {title: req.params.title}})
        res.send(itemChosen)
    } catch (error) {
        next(error);
    }
})

module.exports =  routerItem 