//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/auth");
const Anime = require("../../models/anime/index.js")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// SIGNUP PAGE
router.get("/signup", (req, res) => {
  res.render("auth/signup.jsx");
});

// CREATE NEW USER POST REQUEST
router.post("/signup", async (req, res) => {
  try{
    // ENCRYPT THE PASSWORD
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // SAVE NEW USER IN DB
    const newUser = await User.create(req.body);
    // Redirect to login page
    res.redirect("/auth/login");
  }
  catch(error){
    console.log(error)
  }
    //   // ENCRYPT THE PASSWORD
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    // // SAVE NEW USER IN DB
    // const newUser = await User.create(req.body);
    // // Redirect to login page
    // res.redirect("/auth/login");
});

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("auth/login.jsx");
});

// LOGIN POST REQUEST
router.post("/login", async (req, res) => {
  // FIND USER
  const user = await User.find({ username: req.body.username });

  //CHECK IF USER WAS FOUND
  if (user.length > 0) {
    // COMPARE PASSWORD
    const check = await bcrypt.compare(req.body.password, user[0].password);
    const id = user[0]._id
    console.log(id)
    req.session._id = user[0]._id
    console.log(req.session._id)
    if (check) {
      //SAVE INFO IN SESSION THAT USER IS LOGGEDIN AND USERNAME
      req.session.login = true;
      req.session.username = user[0].username;
      // req.sessions._id= user[0]._id
      // console.log(req.sessions._id)
      // console.log(user[0]._id)
      res.redirect(`/animeRec/`);
      // res.redirect('/')
    } else {
      // Redirect to login page if failed
      res.render("auth/fail.jsx");
    }
  } else {
    // Redirect to login page if failed
    res.render("auth/fail.jsx");
  }
});

//LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/animeRec");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////


// Show and AddToCast
// movie = user

// 'cast' = favorites

// Performer = Anime


// User.findById
// function addToCast(req, res) {
//   Movie.findById(req.params.id, function (err, movie) {
//     movie.cast.push(req.body.performerId);
//     movie.save(function (err) {
//       res.redirect(`/movies/${movie._id}`);
//     });
//   });
// }


// function show(req, res) {
//   Movie.findById(req.params.id)
//   .populate('cast').exec(function(err, movie) {
//     // Performer.find({}).where('_id').nin(movie.cast)
//     Performer.find({_id: {$nin: movie.cast}})
//     .exec(function(err, performers) {
//       console.log(performers);
//       res.render('movies/show', {
//         title: 'Movie Detail', movie, performers
//       });
//     });
//   });
// }


module.exports = router;
