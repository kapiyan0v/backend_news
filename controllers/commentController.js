const ApiError = require("../error/ApiError")
const { Comments, User } = require("../models/models")

class CommentsController {
    async get(req, res, next) {
        try {
            const comments = await Comments.findAll({
                include: [
                    {
                        model: User,
                        as: 'user'
                    }
                ]
            })
            return res.json(comments)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const {body, articleId, userId} = req.body
            const comments = await Comments.create({body, articleId, userId})

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