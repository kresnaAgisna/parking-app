const express = require('express')
const userRouter = require('./userRouter')
const placeRouter = require('./placeRouter')
const slotRouter = require('./slotRouter')
const router = express.Router()
const authentication = require("../middlewares/authentication")

router.use("/user", userRouter)
router.use(authentication)
router.use("/place", placeRouter)
router.use("/slot", slotRouter)


module.exports = router