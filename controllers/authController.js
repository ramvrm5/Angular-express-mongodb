const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.postSignup = async (req,res,next) => {
    try {
        
        const { username, email, phone, password, kind } = req.body;
        
        const isMatch = await User.findOne({ username })
        if(isMatch){
            return res.send({
                error: 'EMAIL_EXISTS',
                message: "Please enter unique username!",
                status: false
            })
        }

        const isMatch1 = await User.findOne({ email })
        if(isMatch1){
            return res.send({
                error: 'EMAIL_EXISTS',
                message: "User already exists!",
                status: false
            })
        }

        const hashed = await bcrypt.hash(password, 12)
        const newUser = new User({
            username,
            email,
            phone,
            password: hashed,
            kind
        })
        const user = await newUser.save()
        return res.send({
            user,
            message: "user has registered successfully.",
            status: true
        })
    } catch (err) {
        console.log(err)
        return res.send({ error: 'INTERNAL_SERVER', message: "Internal server error.", status: false })
    }
}

exports.postSignin = async (req,res,next) => {
    try {
        let user;
        
        const { username, password } = req.body;
        const re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")

        if(re.test(username)){
            user = await User.findOne({ email: username })
        } else {
            user = await User.findOne({ username })
        }
        
        if(!user){
            return res.status(400).send({error: 'EMAIL_NOT_FOUND', message: "User does not exists!", status: false })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send({ error: 'INVALID_PASSWORD', message: "Incorrect password!", status: false })
        }

        const token1 = jwt.sign({ user: user.email }, 'mysecretkey', { expiresIn: '20d' })
        user.token = token1
        user.expiresIn =  1728900000;
        const user1 = await user.save()
        return res.status(200).send( {user: {
            id: user1._id,
            username: user1.username,
            email: user1.email,
            kind: user1.kind,
            token: user1.token,
            expiresIn: user1.expiresIn
        } , message: 'User LoggesIn' , status: true} )
    } catch (err) {
        console.log(err)
        return res.status(500).send({   error: 'INTERNAL_SERVER', message: "Internal server error.", status: false })
    }
}
