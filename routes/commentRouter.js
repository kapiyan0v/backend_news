const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/', commentController.get)
router.post('/', commentController.create)
router.delete('/:id', commentController.delete)
router.patch('/', commentController.edit)

module.exports = router