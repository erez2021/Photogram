
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    // getBystoryname,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('story')
        var storys = await collection.find(criteria).toArray()
        return storys
        } catch (err) {
            loggerService.error('cannot find storys', err)
            throw err
        }
}

async function getById(storyId) {
    try {
        const collection = await dbService.getCollection('story')
        const story = await collection.findOne({ '_id': ObjectId(storyId) })
        return story
    } catch (err) {
        logger.error(`while finding story ${storyId}`, err)
        throw err
    }
}

async function remove(storyId) {
    try {
        const collection = await dbService.getCollection('story')
        await collection.deleteOne({ '_id': ObjectId(storyId) })
    } catch (err) {
        logger.error(`cannot remove story ${storyId}`, err)
        throw err
    }
}

async function update(story) {
    try {
        // peek only updatable fields!
        // const storyToSave = {
        //     _id: ObjectId(story._id),
        //     price : story.price,
        //     type: story.type,
        //     inStock: story.inStock
        // }
        story._id = ObjectId(story._id)
        const collection = await dbService.getCollection('story')
        await collection.updateOne({ '_id': story._id }, { $set: story })
        return story;
    } catch (err) {
        logger.error(`cannot update story ${story._id}`, err)
        throw err
    }
}

async function add(story) {
    try {
        // peek only updatable fields!
        // const storyToAdd = {
        //     name : story.name,
        //     price : story.price,
        //     type: story.type,
        //     inStock: story.inStock
        // }
        const collection = await dbService.getCollection('story')
        // await collection.insertOne(storyToAdd)
        await collection.insertOne(story)
        return story
        // return storyToAdd
    } catch (err) {
        logger.error('cannot insert story', err)
        throw err
    }
}


function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function _savestorysToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/story.json', JSON.stringify(gstorys, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                username: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    return criteria
}




// function _createTeststorys() {]
//     const storys = []
//     for (var i = 0; i < 21; i++) {
//         storys.push(_createstory(titles[parseInt(Math.random() * titles.length)] + i, parseInt(Math.random() * 1000)));
//     }
//     storys.forEach(story => save(story))
// }


