const Router = require('express')
const router = new Router()
const tagsRouter = require('../controllers/tagsController')

router.get('/',tagsRouter.get)
router.post('/', tagsRouter.create)
router.delete('/:id', tagsRouter.delete)

module.exports = router