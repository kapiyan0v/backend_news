const { News, Comments } = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')


class NewsController {
    async getAll(req, res) {
        const news = await News.findAll({
            include: [
                {
                    model: Comments,
                    as: 'comments'
                }
            ]
        })
        res.json(news)
    }

    async Search(req, res) {
        const {tag, title, author} = req.body
        if(tag == undefined) {
            const news = await News.findAll({
                where: {author}
            })
            res.json(news)
        }
        if(author == undefined) {
            const news = await News.findAll({
                where: {tag}
            })
            res.json(news)
        }
        if (author == undefined && tag == undefined) {
            ApiError.badRequest(e.message)
        }
    }


    async getOne(req, res) {
        const {id} = req.params
        const news = await News.findOne(
            {
                where: {id},
                include: {
                    model: Comments,
                    as: 'comments'
                }
            }
        )
        res.json(news)
    }

    async getPolitics(req, res) {
        const politics = await News.findAll({
            where: {
                tag: "Политика"
            }
        })
        res.json(politics)
    }

    async getWorld(req, res) {
        const world = await News.findAll({
            where: {
                tag: "Мир"
            }
        })
        res.json(world)
    }

    async getBusiness(req, res) {
        const business = await News.findAll({
            where: {
                tag: "Бизнес"
            }
        })
        res.json(business)
    }

    async getWorld(req, res) {
        const world = await News.findAll({
            where: {
                tag: "Мир"
            }
        })
        res.json(world)
    }

    async getSports(req, res) {
        const sports = await News.findAll({
            where: {
                tag: "Спорт"
            }
        })
        res.json(sports)
    }
    async getPodcasts(req, res) {
        const podcasts = await News.findAll({
            where: {
                tag: "Подкасты"
            }
        })
        res.json(podcasts)
    }


    async create(req, res, next) {
        try {
            const {title, subtitle, body, date, author, tag, likes} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const news = await News.create({title, subtitle, body, date, img: fileName,author,tag,likes})

            return res.json(news)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async edit(req, res, next) {
        try {
            const {id} = req.params
            const {title, subtitle, body, date, author, tag, likes} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const news = await News.update({title, subtitle, body, date, img: fileName, author, tag, likes}, {where: {id}})

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