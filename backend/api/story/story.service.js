
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
    add,
    removeComment,
    toggleLike

}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('story')
        var storys = await collection.find().toArray()
        console.log('storys query',storys.length);
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

async function toggleLike(storyId, like) {
    try {
        const storyToUpdate = await getById(storyId)
        console.log('like', like);
        const idx = storyToUpdate.likedBy.findIndex(item => item._id === like.minUser._id)
        if (idx === -1) {
            storyToUpdate.likedBy.push(like.minUser)
        } else {
            storyToUpdate.likedBy.splice(idx, 1)
        }
        const collection = await dbService.getCollection('story')
        await collection.updateOne({ '_id': storyToUpdate._id }, { $set: storyToUpdate })
    } catch (err) {
        logger.error(`cannot toggle like from back service`, err)
        throw err
    }
}

async function removeComment(commentId, storyId) {
    try {
        const storyToUpdate = await getById(storyId)
        const idx = storyToUpdate.comments.findIndex(comment => comment.id === commentId)
        storyToUpdate.comments.splice(idx, 1)
        const collection = await dbService.getCollection('story')
        await collection.updateOne({ '_id': storyToUpdate._id }, { $set: storyToUpdate })
        return storyToUpdate
    } catch (err) {
        logger.error(`cannot remove comment ${commentId}`, err)
        throw err
    }
}

// async function addComment(story, newComment) {
//     try {
//         const collection = await dbService.getCollection('story')
//         const story = await collection.findOne({ story})
//         story.comments.push(newComment)
//         await collection.insertOne(story)
//     } catch (err) {
//         logger.error(`cannot remove comment ${commentId}`, err)
//         throw err
//     }
// }

async function update(storyId, newComment) {
    try {
        // newComment = {id : ObjectId()}
        newComment.id = _makeId()
        const storyToSave = await getById(storyId)
        console.log('storyToSave storyToSave', storyToSave);
        storyToSave.comments.push(newComment)
        const collection = await dbService.getCollection('story')
        await collection.updateOne({ '_id': storyToSave._id }, { $set: storyToSave })
        return storyToSave;
    } catch (err) {
        logger.error(`cannot update story ${storyId}`, err)
        throw err
    }
}

async function add(story) {
    try {
        const collection = await dbService.getCollection('story')
        delete story._id
        await collection.insertOne(story)
        return story
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


