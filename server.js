const express = require("express");
const router = express();
const { db } = require("./server/db");
const app = require("./server/app");
const routerItem = require("./server/routes");
const PORT = process.env.PORT || 3000;

const init = async () => { 
     try {    await db.sync();
    app.listen(PORT, () => {      console.log(`Server listening at http://localhost:${PORT}`);    });  } catch (error) {    console.error('Error starting server:', error)  }};

    init()

    //different model routers
router.use('/items', routerItem);
// router.use('/users', require('./users'))
