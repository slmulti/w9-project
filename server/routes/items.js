const express = require("express");
const itemsRouter = express.Router();
const { Item } = require("../models/Item")

//GET all items

itemsRouter.get('/', async (req, res, next) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch (error) {
        next(error);
    }
});

//Get one item

itemsRouter.get('/:title', async (req, res) => {
    try {
        const itemChosen = await Item.findOne({where: {title: req.params.title}})
        res.send(itemChosen)
    } catch (error) {
        next(error);
    }
})

// add item

itemsRouter.post('/', async (req,res) => {
    await Item.create(req.body)
    res.sendStatus(200)
})

module.exports =  itemsRouter 