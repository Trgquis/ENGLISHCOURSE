const UserDB = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';


const hashpassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }


exports.login = async (req, res) => {
        try{
            const { email, password } = req.body;
            // Check if user exists
            console.log(req.body)
            const user = await UserDB.findOne({ email });
            if (!user) {
                console.log('user not found')
              return res.status(401).json({ message: 'User not found!' });
            }
          
            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log('wrong password')
              return res.status(401).json({ message: 'Wrong Password' });
            }
            
            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
            console.log('Login Success!')

            res.status(200).json({message: 'Login Successfully!', token, userId: user._id, userName: user.name, userEmail: user.email });
        } catch(e) {
            console.log(e.message)
            res.status(500).json({message:'Error when logging'})
        }
    }

    exports.regrist = async (req, res) => {
        let user = req.body
        const hashPassword = await hashpassword(user.password)
        if(!user) {
            return res.status(400).send({message: 'Missing parameters'})
        }
        const newUser = new UserDB({
            name: user.name,
            email: user.email,
            password: hashPassword,
            
        })
        newUser.save(newUser)
            .then(data=>{res.send(data)})
            .catch(e => {
                res.status(500).send({message: e.message || 'Error while creating user'})
            })
    }
exports.create = async (req, res) => {
    let user = req.body
    const hashPassword = await hashpassword(user.password)
    if(!user) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const newUser = new UserDB({
        name: user.name,
        email: user.email,
        password: hashPassword,
        gender: user.gender,
        avatar: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        },
    })
    newUser.save(newUser)
        .then(data=>{res.send(data)})
        .catch(e => {
            res.status(500).send({message: e.message || 'Error while creating user'})
        })
}
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id
        UserDB.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: "User not found with id" + id})
                }else {
                    res.send(data)
                }
            })
    }else {
        UserDB.find()
        .then(user=> {
            res.send(user)
        }).catch(err => {
            res.status(500).send({message: err.message || 'Error while getting user'})
        })
    }
}
exports.update = (req, res) => {
    let user = req.body
    console.log(user)
    if(!user) {
        return res.status(400).send({message: 'Missing parameters'})
    }
    const id = req.body.id
    UserDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot Update User With id ${id}. User not found!`})
            }else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: 'Error while updating User'})
        })
}
exports.delete = (req, res) => {
    const id = req.params.id

    UserDB.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot delete with id ${id}`})
            } else {
                res.send({
                    message: 'User was deleted Successfully!'
                })
            }
        }). catch(e => {
            res.status(500).send({message: 'Error while deleting User', e})
        })
}
