const express = require('express')
const router = express.Router()
const SlotController = require('../controllers/slotController')


router.get(SlotController.getAll)
router.post(SlotController.bookSlot)
router.patch(SlotController.updateSlot)


module.exports = router