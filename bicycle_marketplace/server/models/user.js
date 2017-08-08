const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({ //this is the layout of for the model 
    name: {type: String, required: [true, "You need to put in a name"], minlength: 2} //adding validations for the backend
}, {timestamps: true});

mongoose.model('User', UserSchema);