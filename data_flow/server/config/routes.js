let controller = require('../controllers/controllers.js');

module.exports = app => {
	// enter routes here. [Format is app.<app/get/post/delete>('url', callback)]
	app.get('/api/cars', controller.getcars)
	app.post('/api/cars', controller.addcar)
	app.get('/api/users', controller.getusers)
	app.post('/api/users', controller.adduser)
}