const { Schema } = require('mongoose')


const Comment = new Schema ({
    body: {type:String}
});

module.exports = Comment