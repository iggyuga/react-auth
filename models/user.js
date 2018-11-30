// local definition of a user

const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

// Create model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
modules.exports = ModelClass
//export default ModelClass;