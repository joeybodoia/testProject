//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");

const Anime = require('../../models/anime/index.js')

const animeSeed = require('../../models/anime/indexSeed.js')

const { findById } = require('../../models/anime/index.js')

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();



//  ROUTES
// SEED
router.get('/seed', (req, res) => {
    // drop database - prevents from seeding the same data over and over. But remember, it will drop all new changes to your database!
    Anime.deleteMany({}, ()=> {});
    // this is the code to actually seed the database
    Anime.create(animeSeed, (error, data) => {
      // you can also change the second part to res.status(200).redirect('/products') or wherever you want to go.
      error ? res.status(400).json(error) : res.status(200).json(data);
    });
  })

// INDEX
router.get('/',(req,res)=>{
    Anime.find({},(err,allAnime)=>{
        res.render("anime/index.jsx",{
            anime:allAnime
        })
    })
    // res.render("anime/index.jsx")
})


// SHOW
router.get("/:id",(req,res)=>{
    Anime.findById(req.params.id, (err,foundAnime)=>{
        res.render("anime/Show.jsx",{
            data: foundAnime,
            index: req.params.id
        })
    })
})

module.exports = router;