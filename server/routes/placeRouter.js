const express = require('express')
const PlaceController = require('../controllers/placeController')
const router = express.Router()


router.get("/", PlaceController.getAll)


module.exports = router