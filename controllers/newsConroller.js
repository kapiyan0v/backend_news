const { News } = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')


class NewsController {
    async getAll(req, res) {
        const news = await News.findAll()
        res.json(news)
    }


    async getOne(req, res) {
        const {id} = req.params
        const news = await News.findOne(
            {
                where: {id},
            }
        )
        res.json(news)
    }


    async create(req, res, next) {
        try {
            const {title, subtitle, body, date} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const news = await News.create({title, subtitle, body, date, img: fileName})

            return res.json(news)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async edit(req, res, next) {
        try {
            const {id} = req.params
            const {title, subtitle, body, date} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const news = await News.update({title, subtitle, body, date, img: fileName}, {where: {id}})

            return res.json(news)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async delete(req, res) {
        const {id} = req.params
        const news = await News.destroy({where: {id}})
        res.json(news)
    }
}

module.exports = new NewsController()