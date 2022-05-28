const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsConroller')

router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)
router.post('/create', newsController.create)
router.delete('/:id', newsController.delete)
router.patch('/:id', newsController.edit)

module.exports = router