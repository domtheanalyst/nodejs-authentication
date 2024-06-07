const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    username: {type: String, required},

    email: {type: String, required},

    password: {type: String, required}

})


userSchema.pre('save', async (next) => {

    if(!this.isModified('password')) {

        next();

    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

    next();

})


module.exports = mongoose.model('User', userSchema);