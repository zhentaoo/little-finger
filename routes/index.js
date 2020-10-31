var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Little Finger Running' });
});

router.post('/js-tower', function(req, res, next) {
  console.log('js-tower');
  var option = {
    'cwd': '/data/source/js-tower',
  };

  result = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + result.stdout);

  console.log('update js-tower blog success');
  res.send('<p>update success</p>');
});

router.post('/final-statement-private', function(req, res, next) {
  console.log('final-statement');
  var option = {
    'cwd': '/data/final-statement-private',
  };

  result = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + result.stdout);

  console.log('update final-statement-private blog success');
  res.send('<p>update success</p>');
});

router.post('/my-site', function(req, res, next) {
  console.log('my-site');
  var option = {
    'cwd': '/data/my-site',
  };

  result = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + result.stdout);

  result = child_process.spawnSync('npm', ['run', 'build'], option);
  console.log('update my-site blog success');
  res.send('<p>update success</p>');
});

module.exports = router;
