
/**
 * 控制器的restful方法
 * @param {model} Model 对应的model
 *
 * example：
 * const mixin = new Restful(User)
 * 
 */
module.exports = function Restful(modelID){
  const Model = sails.models[modelID.toLocaleLowerCase()];
  if(!Model) throw new Error('No the modelID');

  return {
    find(req, res){
      console.log('find method');
      Model.find().exec((err, users) => {
        if(err){
          return res.badRequest(err);
        }
        return res.json(users);
      });
    },
    findOne(req, res){
      const id = req.param('id');
      id ? Model.findOne({id}).exec((err, user) => {
        if(err){
          return res.badRequest(err);
        }
        return res.json(user);
      }) : res.badRequest({message: 'must have id param'});
    },
    create(req, res){
      Model.create({...req.body}).exec((err, user) => {
        if(err)return res.badRequest(err);
        return res.json(user);
      })
    },
    update(req, res){
      const id = req.param('id');
      id ? Model.findOne({id}).exec((err, user) => {
        if(err) return res.badRequest(err);
        let afterUser = {
          ...user,
          ...req.body
        };
        console.log(req.body, afterUser);
        Model.update({id}, afterUser).exec((err, user) => {
          if(err) return res.badRequest(err);
          return res.json(_.first(user));
        })
      }) : res.badRequest({message: 'must have id param'})
    },
    destroy(req, res){
      const id = req.param('id');
      id ? Model.destroy({id}).exec((err, user) => {
        if(err) return res.badRequest(err);
        return res.json(_.first(user));
      }) : res.badRequest({message: 'must have id param'})
    }
  }
}
