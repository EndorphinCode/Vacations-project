const express = require ('express')
const app = express()
const usersRouter = require ('./usersRouter')
const vacationsRouter = require ('./vacationsRouter')

app.use('/api/vacations', vacationsRouter)
app.use('/api/users', usersRouter)
app.use('/api/reg', usersRouter)


app.listen(8080, () => console.log('server up'))