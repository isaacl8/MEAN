let mongoose = require('mongoose');

let User = mongoose.model('User')
let Bicycle = mongoose.model('Bicycle')


module.exports = {
  loginReg: (req,res) => {
      User.findOne({name: req.body.name}, (err,user) =>{
        if (user == null){
            let newUser = new User(req.body);
            newUser.save((err, savedUser) => {
                if(err){
                    consoe.log('Did not create user');
                }else{
                    req.session.user = user;
                    return res.json(savedUser);
                }
            })
        } else {
            req.session.user = user;
            return res.json(user)
        }
      });
  },

  getUserInfo: (req,res) => {
      Bicycle.find({_id: req.params.id}).populate('user').exec((req,res) => {
          if(err){
              console.log(userIn)
          }else{
              return res.json(userIn)
          }
      });
  },

  getEveryonesBike: (req,res) => {
      Bicycle.find({}).populate('_user').exec( (err, allBikes) => {
          if(err){
              alert('didnt work')
          }else{
              return res.json(allBikes)
          }
      });
  },

  createBike: (req,res) => {
      if(!req.session.user){
          return res.sendSataus(401);
      }else{
          let bike = new Bicycle(req,body);
          bike._user = req.session.user._id;
          bike.save( (err, newBike) => {
            if(err){
                console.log('error with creating bike')
            }else{
                res.json(newBike);
            }
          })
      }
  },

  getUserBike: (req,res) => {
    if(!req.session.user){
        return res.sendStatus(401);
    }else{
        Bicycle.find({_user: req.session.user._id}, (err, userBike) => {
            if(err){
                console.log('cant find the bike')
            }else{
                console.log(userBike)
                return res.json(userBike)
            }
        })
    }
  },

  current: (req, res) => {
      if(!req.body._id){
          res.sendStatus(401)
      }else{
          return res.json(req.session.user)
      }
  },

  updateBike: (req,res) => {
      console.log(req.body._id);
      Bicycle.update({_id: req.body}, req.body, (err,result) => {
          if(err){
              console.log('update not working');
          }else{
              console.log(result);
              return res.json(result)
          }
      })
  },

  deleteBike: (req,res) => {
    if(!req.session.user){
            res.sendStatus(401)
         } else {
             Bicycle.remove({_id: req.params.id}, function(err, data){
                 if(err){
                     alert('Delete was unsuccessful')
                 } else {
                     console.log('data')
                     return res.json(data)
                 }
             })
         }

    },


}
