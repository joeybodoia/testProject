const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: String,
    img:String,
    genre:String,
    episodes:{type:Number,min:[0]}
})

const Anime = mongoose.model('Anime',animeSchema)

module.exports = Anime