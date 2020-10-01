//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");

const Anime = require('../../models/anime/index.js')

const animeSeed = require('../../models/anime/indexSeed.js')

const { findById } = require('../../models/anime/index.js')

// const bcrypt = require("bcryptjs");

const auth = require("../authmiddleware.js")


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
router.get('/', auth, (req,res)=>{
    Anime.find({},(err,allAnime)=>{
        res.render("anime/index.jsx",{
            anime:allAnime,
            // user: req.session
            // userID: req.params.id     
        })
    })
})

// NEW
router.get('/new', auth, (req,res)=>{
    res.render("anime/New.jsx")
})

// DELETE
router.delete("/:id",(req,res)=>{
    Anime.findByIdAndRemove(req.params.id, (err,data)=>{
        res.redirect("/animeRec/myRec")
    })

})

// UPDATE 
router.put('/:id', (req,res)=>{
    Anime.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedModel)=>{
    res.redirect('/animeRec/myRec')
    })  
})




// CREATE
router.post("/",auth, async (req,res)=>{
    req.body.username = req.session.username
    console.log(req.body)
    const newAnime = await Anime.create(req.body)
    res.redirect("/animeRec/myRec")
    // Anime.create(req.body, (err,createdAnime)=>{
    //     res.redirect("/animeRec")
    // })
})

// EDIT
router.get("/:id/edit",(req,res)=>{
    Anime.findById(req.params.id, (err,foundAnime)=>{
        res.render('anime/Edit.jsx',{
            data:foundAnime,
            index: req.params.id
        })
    })
})


// USERList
router.get("/myRec",auth, async (req,res)=>{
    // res.send("hello")
    // req.body.userID = req.session._id
    // console.log(req.body)
    req.body.username = req.session.username
    const animes = await Anime.find({username:req.session.username})
    res.render("anime/myRec.jsx",{animes})
    
})

// SHOW
router.get("/:id",auth,(req,res)=>{
    Anime.findById(req.params.id, (err,foundAnime)=>{
        res.render("anime/Show.jsx",{
            data: foundAnime,
            index: req.params.id
        })
    })
})




module.exports = router;