const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsConroller')

router.get('/', newsController.getAll)
router.get('/politics', newsController.getPolitics)
router.get('/world', newsController.getWorld)
router.get('/business', newsController.getBusiness)
router.get('/sport', newsController.getSports)
router.get('/podcasts', newsController.getPodcasts)
router.get('/:id', newsController.getOne)
router.post('/search', newsController.Search)
router.post('/create', newsController.create)
router.delete('/:id', newsController.delete)
router.patch('/:id', newsController.edit)

module.exports = router