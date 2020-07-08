const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.postSignup = async (req,res,next) => {
    try {
        
        const { username, email, phone, password } = req.body;
        
        const isMatch = await User.findOne({ username })
        if(isMatch){
            return res.send({
                msg: "Please enter unique username!",
                status: false
            })
        }

        const isMatch1 = await User.findOne({ email })
        if(isMatch1){
            return res.send({
                msg: "User already exists!",
                status: false
            })
        }

        const hashed = await bcrypt.hash(password, 12)
        const newUser = new User({
            username,
            email,
            phone,
            password: hashed
        })
        const user = await newUser.save()
        return res.send({
            user,
            msg: "user has registered successfully.",
            status: true
        })
    } catch (err) {
        console.log(err)
        return res.send({ msg: "Internal server error.", status: false })
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
            return res.send({ msg: "User does not exists!", status: false })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.send({ msg: "Incorrect password!", status: false })
        }

        const token1 = jwt.sign({ user: user.email }, 'mysecretkey', { expiresIn: '1d' })
        user.token = token1
        const user1 = await user.save()
        return res.send({ user: user1, msg: "user has sign in successfully", status: true })
    } catch (err) {
        console.log(err)
        return res.send({ msg: "Internal server error.", status: false })
    }
}
