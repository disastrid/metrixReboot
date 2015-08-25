var express = require('express');
// var global = require('/javascripts/global.js'); // require the global JS file to have access to its variables
var router = express.Router();
// var groupId = global.groupId;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'THIS IS THE STUDY' });
});

/* POST */

router.post('/', function(req, res) {
    var db = req.db; // the database we want to mess with
    var collection = db.get('userStudyData');  // the collection in the database
    var thingToPost = req.body.data;
    console.log(thingToPost);
    collection.insert({
        'group_id' : "this is a group ID",
        'errorButton' : [],
        'isGoodButton' : [],
        'createdAt' : Date(),
        'unique_user_number' : ''// HOW DO I INCREMENT THE USERS?
    }, function (error, doc) {
        if (error) {
          res.send("Could not create new user.");
        } else {
          console.log("done!");
          res.location('study');
          res.redirect('study');
        }
    });
});

module.exports = router;
