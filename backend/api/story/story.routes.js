const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getStory, getStorys, deleteStory, updateStory, addStory, deleteComment, toggleLike} = require('./story.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getStorys)
router.get('/:id', getStory)
router.post('/', addStory)
router.delete('/:id',  deleteStory)
router.put('/',  updateStory)
router.put('/like',  toggleLike)

// router.post('/comment/',  addComment)

router.put('/comment/:id',  deleteComment)





module.exports = router