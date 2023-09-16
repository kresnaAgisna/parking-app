const { Slot } = require('../models')

class SlotController {
    static async getAll(req, res, next) {
        try {
            const slots = await Slot.findAll()

            res.status(200).json(slots)
        } catch (error) {
            next(error)
        }
    }

    static async bookSlot(req, res, next) {
        const {} = req.body
        try {
            const bookSlot = await Slot.create({})

            res.status(201).json({ message: 'Booked' })
        } catch (error) {
            next(error)
        }
    }

    static async updateSlot(req, res, next) {
        const { status } = req.body
        const { id } = req.params
        try {
            const slot = await Slot.findByPk(id)

            if(!slot) throw({name: "SlotNotFound", message: "Slot not found"})

            await slot.update({status})

            res.status(200).json({message: `Your booking status has been updated to ${status}`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SlotController