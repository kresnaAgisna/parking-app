const express = require("express")
const cors = require("cors")
const errorHandler = require("./middlewares/errorHandler")
const router = require("./routes/index")
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})