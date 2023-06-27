const UserService = require('../services/user.services');

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.registeruser(email, password);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    register
}