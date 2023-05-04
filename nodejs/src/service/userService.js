const bcrypt = require('bcrypt');
const User = require('../models/user');
const hashpassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
const createUser = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const newUser = new User({
                name: data.name,
                email: data.email,
                password: data.password
            });
          console.log(newUser)
          await User.create(newUser)
          return { newUser, message: 'Success!' };
        } catch (e) {
          console.log(e);
        }
    })    
};


module.exports =  {
    createUser
} ;
