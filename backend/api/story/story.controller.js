const express = require('express')
const StoryService = require('./story.service.js')
const logger = require('../../services/logger.service')


const router = express.Router()

// List Of Storys
async function getStorys(req, res) {
    try {
        
        const Storys = await StoryService.query()
        res.send(Storys)
    } catch (err) {
        logger.error('Failed to get Storys', err)
        res.status(500).send({ err: 'Failed to get Storys' })
    }
}

// Get a single story by id
async function getStory(req, res) {
    try {
        const story = await StoryService.getById(req.params.id)
        res.send(story)
    } catch (err) {
        logger.error('Failed to get story', err)
        res.status(500).send({ err: 'Failed to get story' })
    }

}
// Add Story
async function addStory(req, res) {
    try {
        const story = req.body// not working with req.body
        const savedStory = await StoryService.add(story)
        res.send(savedStory)
    } catch (err) {
        logger.error('Failed to add story', err)
        res.status(500).send({ err: 'Failed to add story' })
    }
}


// Update a Story
async function updateStory(req, res) {
    try {
        const newComment = req.body
       const storyId = newComment.storyId
       // console.log('comment new commwent blablaaaaa',storyId)
        const savedStory = await StoryService.update(storyId,newComment)
        res.send(savedStory)
    } catch (err) {
        logger.error('Failed to update story', err)
        res.status(500).send({ err: 'Failed to update story' })
    }
}

// remove story by id
async function deleteStory(req, res) {
    try {
        await StoryService.remove(req.params.id)
        res.send('Deleted...')
    } catch (err) {
        logger.error('Failed to delete story', err)
        res.status(500).send({ err: 'Failed to delete story' })
    }
}

async function deleteComment(req, res) {
    try {
        const story = req.body
        const commentId = req.params.id
        console.log('controller',  commentId ,story);
        await StoryService.removeComment(commentId, story._id)
        res.send('Comment Deleted...')
    } catch (err) {
        logger.error('Failed to delete Comment', err)
        res.status(500).send({ err: 'Failed to delete Comment' })
    }
}



async function toggleLike(req, res) {
    try {
        const like = req.body
        const storyId = like.storyId
         const likedStory = await StoryService.toggleLike(storyId, like)
        res.send(likedStory)
    } catch (err) {
        logger.error('Failed to like', err)
        res.status(500).send({ err: 'Failed to like' })
    }
}

// async function addComment(req, res) {
//     try {
//         await StoryService.addComment(req.params.id)
//         console.log('req.params.id', req.params.id);
//         res.send('Comment Added...')
//     } catch (err) {
//         logger.error('Failed to add Comment', err)
//         res.status(500).send({ err: 'Failed to add Comment' })
//     }
// }

module.exports = {
    getStory,
    getStorys,
    deleteStory,
    updateStory,
    addStory,
    deleteComment,

    toggleLike
}