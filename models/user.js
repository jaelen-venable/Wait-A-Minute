const { Schema } = require('mongoose')

const User = new Schema({
    email: {type:String},
    first_name: {type:String},
    last_name: {type:String},
    height: {type:Number},
    weight: {type:Number},
    password: {type:String},
    location: {type:String},
    avatar: {type:String}
})

module.exports = User
