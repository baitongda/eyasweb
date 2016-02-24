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
      return res.json(users);
    });
  },
  findOne(req, res){
    const id = req.param('id');
    id ? User.findOne({id}).exec((err, user) => {
      if(err){
        return res.badRequest(err);
      }
      return res.json(user);
    }) : res.badRequest({message: 'must have id param'});
  },
  create(req, res){
    User.create({...req.body}).exec((err, user) => {
      if(err)return res.badRequest(err);
      return res.json(user);
    })
  },
  update(req, res){
    const id = req.param('id');
    id ? User.findOne({id}).exec((err, user) => {
      if(err) return res.badRequest(err);
      let afterUser = {
        ...user,
        ...req.body
      };
      console.log(req.body, afterUser);
      User.update({id}, afterUser).exec((err, user) => {
        if(err) return res.badRequest(err);
        return res.json(_.first(user));
      })
    }) : res.badRequest({message: 'must have id param'})
  },
  destroy(req, res){
    const id = req.param('id');
    id ? User.destroy({id}).exec((err, user) => {
      if(err) return res.badRequest(err);
      return res.json(_.first(user));
    }) : res.badRequest({message: 'must have id param'})
  }
};

