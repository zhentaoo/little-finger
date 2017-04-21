var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auto Deploy Running' });
});

router.get('/js-tower', function(req, res, next) {
  console.log('js-tower');
  var option = {
    'cwd': '/data/blog/js-tower',
  };

  res = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + res.stdout);

  res = child_process.spawnSync('rm', ['-rf', './public'], option)
  console.log('stdout here: \n' + res.stdout);

  res = child_process.spawnSync('hexo', ['generate'], option)
  console.log('stdout here: \n' + res.stdout);

  console.log('update js-tower blog success');
  res.send('update js-tower blog success');
});

module.exports = router;
