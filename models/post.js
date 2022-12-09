const { Schema } = require('mongoose')

const Post = new Schema ({
    body: {type:String},
    title: {type:String},
    user_id: {type:String},
    likes: {type:Number},
    comments: [{type:Schema.Types.ObjectId, ref:'Comment'}]
})

module.exports = Post

