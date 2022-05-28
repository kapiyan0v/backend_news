const ApiError = require("../error/ApiError")
const { Tags } = require("../models/models")

class TagsController {
    async get(req, res) {
        const tags = await Tags.findAll()
        res.json(tags)
    }

    async create(req, res, next) {
        try {
            const {name} = req.body
            const tags = await Tags.create({name})
            return res.json(tags)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async delete(req, res) {
        const {id} = req.params
        const tags = await Tags.destroy({where: {id}})
        res.json(tags)
    }
}

module.exports = new TagsController()