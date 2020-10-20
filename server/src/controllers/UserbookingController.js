const { Userbooking } = require('../models')
module.exports = {
    // get all userbookings
    async index(req, res) {
        try {
            const userbookings = await Userbooking.findAll()
            res.send(userbookings)
        } catch (err) {
            res.status(500).send({
                error: 'The userbookings information was incorrect'
            })
        }
    },
    // create userbooking
    async create(req, res) {
        try {
            const userbooking = await Userbooking.create(req.body)
            res.send(userbooking.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create userbooking incorrect'
            })
        }
    },
    // edit userbooking, suspend, active
    async put(req, res) {
        try {
            await Userbooking.update(req.body, {
                where: {
                    id: req.params.userbookingId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update userbooking incorrect'
            })
        }
    },
    // delete userbooking
    async remove(req, res) {
        try {
            const userbooking = await Userbooking.findOne({
                where: {
                    id: req.params.userbookingId
                }
            })
            if (!userbooking) {
                return res.status(403).send({
                    error: 'The userbooking information was incorrect'
                })
            }
            await userbooking.destroy()
            res.send(userbooking)
        } catch (err) {
            res.status(500).send({
                error: 'The userbooking information was incorrect'
            })
        }
    },
    // get userbooking by id
    async show(req, res) {
        try {
            const userbooking = await Userbooking.findById(req.params.userbookingId)
            res.send(userbooking)
        } catch (err) {
            req.status(500).send({
                error: 'The userbooking information was incorrect'
            })
        }
    },
} 