const { Item, seedItem } = require('./Item')
const { db } = require('../db')

async function seed () {
  await db.sync({ force: true })
  await seedItem()
}

module.exports = { Item, seed }
