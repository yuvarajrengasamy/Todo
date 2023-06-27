const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: "String",
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: "String",
        required: true
    }
})

UserSchema.pre('save', async function () {
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    catch (err) {
        console.log(err)
    }
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;