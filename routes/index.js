const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const likesRouter = require('./likesRouter')
const tagsRouter = require('./tagsRouter')
const commentRouter = require('./commentRouter')

router.use('/user', userRouter)
router.use('/news', newsRouter)
router.use('/likes', likesRouter)
router.use('/tags', tagsRouter)
router.use('/comments', commentRouter)

module.exports = router