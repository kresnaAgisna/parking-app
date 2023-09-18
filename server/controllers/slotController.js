const { Op } = require('sequelize')
const { Slot, Place } = require('../models')

class SlotController {
    static async getAll(req, res, next) {
        // not perfect, should add where: { day: date(today/selected date) }
        const { PlaceId } = req.query
        const option = {}
        if(PlaceId) {
            option.where = {
                PlaceId,
                status: {
                    [Op.not]: ['canceled']
                }
            }
        } else {
            option.where = {
                UserId: req.user.id,
                status: {
                    [Op.not]: ['canceled']
                }
            },
            option.include = ['Place']
        }
        try {
            const slots = await Slot.findAll(option)

            res.status(200).json(slots)
        } catch (error) {
            next(error)
        }
    }

    static async bookSlot(req, res, next) {
        const { duration, day, totalPrice, status, PlaceId, start, end } = req.body
        const UserId = req.user.id
        try {
            const bookSlot = await Slot.create({ duration, day, totalPrice, status, PlaceId, UserId, start, end })

            res.status(201).json({ message: 'Booked' })
        } catch (error) {
            console.log(error)
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