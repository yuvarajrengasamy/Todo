const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

class UserService {
    static async registeruser(email, password) {
        try {
            const createuser = await UserModel.create({ email, password });
            return createuser;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email });
            
        }
        catch (err) {
            console.log(err);
        }
    }
    static async generatetoken(tokenData,secretkey) {
        try {
            return jwt.sign(tokenData,secretkey,{expiresIn:"1h"});
            
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserService;