const express = require ('express')
const dbService = require ('./dbService')

const router = express.Router()


router. get('/', async (req, res) => {

    try {
    const vacations = await dbService.executeQuery ('SELECT * FROM vacation')
    res.json(vacations)
    } catch (err) {
        alert (err)
    }
})

module.exports = router