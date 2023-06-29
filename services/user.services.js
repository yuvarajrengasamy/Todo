const UserModel = require('../models/user.model')

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
    static async checkuser(email, password) {
        try {
            return await UserModel.findOne({ email, password });
            
        }
        catch (err) {
            console.log(err);
        }
    }
    static async generatetoken(tokenData,secretkey) {
        try {
            return await jwt.sign(tokenData,secretkey,{expireIn:"50h"});
            
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserService;