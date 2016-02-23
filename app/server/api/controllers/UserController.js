/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find(req, res){
    User.find().exec((err, users) => {
      if(err){
        return res.badRequest(err);
      }
      res.json(users);
    })
  },
  create(req, res){
    User.create({
      username: 'yuesong',
      password: 'eeeeeee',
      email: 'liuyuesongd@163.com'
    }).exec((err, user) => {
      console.log(user)
      if(err){
        return res.badRequest(err);
      }
      res.json(user);
    })
  }
};

