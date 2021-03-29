const express = require('express')
const StoryService = require('./story.service.js')
const logger = require('../../services/logger.service')


const router = express.Router()

// List Of Storys
async function getStorys(req, res) {
 try {
    const filterBy = {
        txt: req.query.txt || '',
        pageIdx: +req.query.pageIdx || 0
    }
    const Storys = await StoryService.query(filterBy)
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
    const story = req.body  // not working with req.body
    const savedStory = await StoryService.update(story)
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
        } catch(err) {
            logger.error('Failed to get story', err)
            res.status(500).send({ err: 'Failed to get story' })
        }
}

module.exports = {
    getStory,
    getStorys,
    deleteStory,
    updateStory,
    addStory
}