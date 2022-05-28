const ApiError = require("../error/ApiError");
const { Likes } = require("../models/models");

class LikesController {
    async getAll(req, res) {
        const {article_id} = req.params
        const likes = await Likes.findAll({where: {article_id}})
        res.json(likes)
    }
    async get(req, res) {
        const likes = await Likes.findAll()
        res.json(likes)
    }

    async create(req, res, next) {
        try {
            const {article_id, user_id} = req.body
            const likes = Likes.create({article_id, user_id})

            return res.json(likes)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        const {id} = req.params
        const likes = await Likes.drop({where: {id}})
        res.json(likes)
    }
}

module.exports = new LikesController()