const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    username: {type:String, required: true},
    name: {type:String, required:true},
    description: String,
    img:String,
    genre:String,
    episodes:{type:Number,min:[0]},
    likes:{type:Number,min:[0]}
    // userID: String
})

const Anime = mongoose.model('Anime',animeSchema)

module.exports = Anime