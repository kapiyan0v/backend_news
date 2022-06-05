const Router = require('express')
const router = new Router()
const commentsRouter = require('../controllers/commentController')

router.get('/', commentsRouter.get)
router.post('/', commentsRouter.create)
router.delete('/:id', commentsRouter.delete)
router.patch('/', commentsRouter.edit)

module.exports = router