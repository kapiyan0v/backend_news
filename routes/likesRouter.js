const Router = require('express')
const router = new Router()
const likesController = require('../controllers/likeController')

router.get('/:id', likesController.getAll)
router.get('/', likesController.get)
router.post('/', likesController.create)
router.delete('/:id', likesController.create)

module.exports = router