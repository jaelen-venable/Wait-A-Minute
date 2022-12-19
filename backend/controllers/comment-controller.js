
import Comment from "../models/comment";


const db = require('../db')
const Chance = require('chance')
const { Comment } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
    const comments = [...Array(400)].map((comment) => {
        return new Comment({
            body: chance.paragraph()
        })
    })
    await Comment.insertMany(comments)
    console.log('Created Comments!')
    return comments
}



const run = async () => {
    await createComments()
    db.close()
}

run()