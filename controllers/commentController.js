const ApiError = require("../error/ApiError")
const { Comments } = require("../models/models")

class CommentsController {
    async get(req, res) {
        const comments = await Comments.findAll()
        res.json(comments)
    }

    async create(req, res, next) {
        try {
            const {body} = req.body
            const comments = await Comments.create({body})

            return res.json(comments)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async edit(req, res, next) {
        try {
            const {id} = req.params
            const {body} = req.body
            const comments = await Comments.update({body}, {where: {id}})

            return res.json(comments)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async delete(req, res) {
        const {id} = req.params
        const comments = await Comments.destroy({where: {id}})
        res.json(comments)
    }
}

module.exports = new CommentsController()