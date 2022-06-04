const Router = require('express')
const router = new Router()
const usersController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', usersController.getAll)
router.get('/auth', authMiddleware, usersController.check)
router.post('/registration', usersController.registration)
router.post('/login', usersController.login)


module.exports = router