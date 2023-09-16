const { Place, Slot } = require('../models/index')

class PlaceController {
    static async getAll(req, res, next) {
        try {
            const places = await Place.findAll({
                include: [Slot]
            })

            res.status(200).json(places)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PlaceController