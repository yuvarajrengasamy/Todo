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
}

module.exports = UserService;