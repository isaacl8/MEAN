const mongoose = require('mongoose');
let Car = mongoose.model('Car')
let User = mongoose.model("User");
module.exports = {
	// enter controller methods here
	getcars: ( req, res ) => {
		Car.find({}, ( err, listofcars) => {
			if(err){
				let errors = [];
				for(let x in err.errors){
					errors.push(err.errors[x].message);
				}
				res.status(400).send(errors);
			} else {
				return res.json(listofcars)
			}
		})
	
	},

	addcar: (req, res) => {
		let car = new Car(req.body)
		car.save( ( err, newcar) => {
			if(err){
				let errors = [];
				for(let x in car.errors){
					errors.push(car.errors[x].message);
				}
				return res.status(500).send(errors);
			} else{
				return res.json(newcar)
			}
		})
	},
	getusers: ( req, res ) => {
		User.find({}, ( err, listOfUsers) => {
			if(err){
				let errors = [];
				for(let x in err.errors){
					errors.push(err.errors[x].message);
				}
				res.status(400).send(errors);
			} else {
				return res.json(listOfUsers)
			}
		})
	
	},

	adduser: (req, res) => {
		let user = new User(req.body)
		user.save( ( err, newUser) => {
			if(err){
				let errors = [];
				for(let x in user.errors){
					errors.push(user.errors[x].message);
				}
				return res.status(400).send(errors);
			} else{
				return res.json(newUser)
			}
		})
	}
}