const Router = require('express')
const router = new Router()
const commentsRouter = require('../controllers/commentController')

router.get('/:id/comment', commentsRouter.get)
router.post('/:id/comment', commentsRouter.create)
router.delete('/:id/comment/:id', commentsRouter.delete)
router.patch('/', commentsRouter.edit)

module.exports = router