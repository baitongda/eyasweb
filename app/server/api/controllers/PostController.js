/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find(req, res){
    console.log(sails.models.post === Post);
    Post.find().populate('author').exec((err, posts) => {
      if(err){
        return res.badRequest(err);
      }
      return res.json(posts);
    });
  },
  findOne(req, res){
    const id = req.param('id');
    id ? Post.findOne({id}).populate('author').exec((err, post) => {
      if(err){
        return res.badRequest(err);
      }
      return res.json(post);
    }) : res.badRequest({message: 'must have id param'});
  },
  create(req, res){
    Post.create({...req.body}).exec((err, post) => {
      if(err)return res.badRequest(err);
      return res.json(post);
    })
  },
  update(req, res){
    const id = req.param('id');
    id ? Post.findOne({id}).populate('author').exec((err, post) => {
      if(err) return res.badRequest(err);
      let afterUser = {
        ...post,
        ...req.body
      };
      console.log(req.body, afterUser);
      Post.update({id}, afterUser).exec((err, post) => {
        if(err) return res.badRequest(err);
        return res.json(_.first(post));
      })
    }) : res.badRequest({message: 'must have id param'})
  },
  destroy(req, res){
    const id = req.param('id');
    id ? Post.destroy({id}).exec((err, post) => {
      if(err) return res.badRequest(err);
      return res.json(_.first(post));
    }) : res.badRequest({message: 'must have id param'})
  }
};

