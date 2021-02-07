const express = require ('express')
const dbService = require ('./dbService')
const bodyParser= require ('body-parser')

const router = express.Router()
router.use(bodyParser.json())


let user = []

router.get('/', async (req, res) => {

    try {
    const users = await dbService.executeQuery ('select * from users where ID = 1')
    res.json(users)
    } catch (err) {
        alert (err)
    }
})

router.post ('/', async (req,res)=> {
    const {USER_NAME, NAME, LAST_NAME} = req.body
    const results = await dbService.executeQuery(`INSERT INTO users SET ?`, req.body)
    users.push({...req.body, id: results.insertId})
    res.json(results)
    console.log(users);
})

// router.get('/:id', async (req,res) => {
//     try{
//         const results = await dbService.executeQuery(`SELECT * FROM suppliers where id = ?`, [req.params.id])
//         res.json(results)
//     } catch (error){
//         res.status(500).json({message:error})
//     }
// })

module.exports = router