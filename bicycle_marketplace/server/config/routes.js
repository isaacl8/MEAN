let controller = require('../controllers/controller.js');

module.exports = (app) => {
     app.post('/api/login', controller.loginReg);
     app.get('/api/bike', controller.getEveryonesBike);
     app.post('/api/bike', controller.createBike);
     app.get('/api/current', controller.current);
     app.get('/api/bikes', controller.getUserBike);
     app.put('/api/bike', controller.updateBike);
     app.get('/api/bike/:id', controller.getUserInfo);
     app.delete('/api/bike/:id', controller.deleteBike);   
}