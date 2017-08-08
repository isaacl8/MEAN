const mongoose = require('mongoose');

let CarSchema = new mongoose.Schema({
	make: {type:String, required:[true, "You have to have a make"]},
	model: {type:String, required:[true, "You have to have a model"]},
	year: {type:Number, required:[true, "You have to have a year"]}
}, {timestamps:true})

mongoose.model('Car', CarSchema);