const express = require('express')
const router = express.Router()
const SlotController = require('../controllers/slotController')


router.get("/", SlotController.getAll)


module.exports = router