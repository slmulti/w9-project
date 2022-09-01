const { seed } = require('./models')
const app = require("./app");
const PORT = 5000;

const init = async () => { 
    try {
        // seed function will rebuild the db and re-seed the tables!
        await seed()
        app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))
    } catch (error) {
        console.error('Error starting server:', error)
    }
}

init()
