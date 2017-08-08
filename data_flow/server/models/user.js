const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	name: {type:String, required:[true, "You have to have a name"]},
	email: {type:String, required:[true, "You have to have a email"]},
	age: {type:Number, required:[true, "You have to have a age"]}
}, {timestamps:true})

mongoose.model('User', UserSchema);