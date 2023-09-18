const { Place, Slot } = require('../models/index')

class PlaceController {
    static async getAll(req, res, next) {
        const { place } = req.query
        try {
            const places = await Place.findAll({
                where : {
                    name: place
                },
                include: [Slot],
                order: ['section']
            })

            res.status(200).json(places)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PlaceController