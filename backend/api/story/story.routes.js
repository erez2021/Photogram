const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getStory, getStorys, deleteStory, updateStory, addStory} = require('./story.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getStorys)
router.get('/:id', getStory)
router.post('/', addStory)
router.put('/:id',  updateStory)
router.delete('/:id',  deleteStory)
// requireAuth, requireAdmin,
// router.put('/:id',  requireAuth, updateStory)

module.exports = router