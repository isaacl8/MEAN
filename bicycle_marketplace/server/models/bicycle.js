const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BicycleSchema = new mongoose.Schema({ //this is the layout of for the model 
    _user: {type: Schema.Types.ObjectId, ref: 'User'}, // _user is there to show that bicycle belongs to the user model
    title: {type: String, required: [true, "You need to put in a title"]},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Bicycle', BicycleSchema);