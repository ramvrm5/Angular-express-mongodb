const jsonWebToken = require('jsonwebtoken');
const User = require('../model/user');

module.exports = (req,res,next) => {
    if (req.query.auth) {
        var decodedData = jsonWebToken.verify(req.query.auth, 'mysecretkey');
        let userEmail = (decodedData.user);
        if( userEmail) {
            User.findOne({email: userEmail})
            .then((user) => {
                req.user = user;
                next()

            })
            .catch((err) => {
                res.status(500).send({error: 'TOKEN_ERROR', message: 'Internal Server Error', status: false});
            })
        
        } else {
            res.status(500).send({error: 'TOKEN_ERROR', message: 'Internal Server Error', status: false});        
        } 
    }
    res.status(401).send({error: 'TOKEN_ERROR', message: 'Please Login again to Continue', status: false});
}