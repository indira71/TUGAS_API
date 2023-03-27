const datas = require('../../db/data.json')
const jwt = require('jsonwebtoken');
module.exports = function(req, res) {
    jwt.verify(req.token, 'password', (err, authData) =>{
        if(err){
            res.sendStatus(403);
        }else{
            const data = datas.find(data => data.id == req.params.id)
            res.send(data);
            authData
        }
    });
}