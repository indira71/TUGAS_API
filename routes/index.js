var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const DatasControllers = require('../controller/datas/login')
const DatasShowControllers = require('../controller/datas/show')

router.post('/login', DatasControllers); 
router.post('/data/:id', verifyToken, DatasShowControllers); 

function verifyToken (req, res, next){
  const bearerHeader = req.headers['authorization'];
  console.log('bearerHeader');
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(403)
  }
}

module.exports = router;