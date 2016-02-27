var express = require('express');
var router = express.Router();


var foo = [
  {slug:"how to pass class", body: "come to class. do your homework"},
  {slug:"how to fail class", body: "play video games all day"}
];

/* GET entris listing. */
router.get('/', function(req, res, next) {
  res.render('entries/index', { title: 'Blog', foo: foo });
});

module.exports = router;
