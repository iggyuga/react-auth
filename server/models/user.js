// local definition of a user

import mongoose from 'mongoose';
//const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
}, {collection: "auth"});

// On save hook, encrypt password
// before saving a model 'pre-save'
userSchema.pre('save', function(next) {
    // get access to user model
    const user = this;

    // generate salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        
        // hash (encrypt) the passwor using the salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            next();

        }); 
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    })
}

// Create model class
var ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;