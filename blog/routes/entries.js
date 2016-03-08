var express = require('express');
var router = express.Router();

var entries = [
  {slug:"Please work...", body: "here is a cookie", created_at: "some date"},
  {slug:"CLICK HERE", body: "who is the bigger fool? The fool? or the fool that follows him?", created_at: "some date"},
  {slug:"Chinese Cowboy", body: "Howdee Patna!", created_at: "some date"}
];

/* READ all: GET entries listing. */
router.get('/', function(req, res, next) {
  res.render('til/index', { title: 'Blog', entries: entries });
});

/* CREATE entry form: GET /entries/new */
router.get('/new', function(req, res, next) {
  res.render('til/new', {title: "Create new entry"});
});

/*CREATE entry: POST /entries/ */
router.post('/', function(req, res, next) {
  entries.push(req.body);
  res.render('til/index', { title: 'Blog', entries: entries });
});

/* UPDATE entry form: GET /entries/1/edit */
router.get('/:id/edit', function(req, res, next) {
  res.render('til/update',
  {
    title: 'Update an entry',
    id: req.params.id,
    entry: entries[req.params.id]
  });
});

/* UPDATE entry: POST /entries/1 */
router.post('/:id', function(req, res, next) {
  entries[req.params.id] = req.body;
  res.render('til/index',
  {
    title: 'Update an entry',
    entries: entries
  });
});

/* DELETE entry: GET /entries/1/delete  */
router.get('/:id/delete', function(req, res, next) {
  var id = req.params.id
  entries = entries.slice(0,id).concat(entries.slice(id+1, entries.length));
  res.render('til/index', { title: 'Blog', entries: entries });
});

/* THIS NEEDS TO BE LAST or /new goes here rather than where it should */
/* READ one entry: GET /entries/0 */
router.get('/:id', function(req, res, next) {
  res.render('til/entry', {title: "a entry", entry: entries[req.params.id]});
});

module.exports = router;
