const UserService = require('../services/user.services');
const bcrypt =  require ('bcrypt')

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.registeruser(email, password);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.checkuser(email);
        if(!user){
            throw new Error('user not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error('invailed password');
        }

        let tokenData ={
            id : user._id,
            email : user.email
        }

        const token = await UserService.generatetoken(tokenData,'secretkey');
          res.status(200).json({
            status:true,
            token:token
          })

    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    register,
    login
}