var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home' });
});
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { page: 'contacto', ligas:['https://www.facebook.com', 'https://www.twitter.com','https://www.instagram.com','https://www.blabla.com'] });
});

module.exports = router;
