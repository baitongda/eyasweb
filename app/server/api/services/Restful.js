
/**
 * 控制器的restful方法
 * @param {model} Model 对应的model
 *
 * example：
 * module.exports = Restful(User)
 * 
 */
module.exports = function Restful(modelID){
  const modelName = modelID.toLocaleLowerCase();
  if(!sails.models[modelName]) throw new Error('No the modelID');
  const models = getModel(sails.models[modelName].attributes);
  return {
    /**
     * 列表查询，应用路由 GET /foo
     */
    find(req, res){
      const Model = sails.models[modelName];
      // console.log(models, Model);
      Model.find({sort: 'updatedAt DESC'}).populate(models).exec((err, users) => {
        if(err){
          return res.badRequest(err);
        }
        return res.json(users);
      });
    },
    /**
     * 详情查询，应用路由 GET /foo/:id
     */
    findOne(req, res){
      const Model = sails.models[modelName];
      const id = req.param('id');
      id ? Model.findOne({id}).populate(models).exec((err, user) => {
        if(err){
          return res.badRequest(err);
        }
        return res.json(user);
      }) : res.badRequest({message: 'must have id param'});
    },
    /**
     * 新建资源，应用路由 POST /foo
     */
    create(req, res){
      const Model = sails.models[modelName];
      Model.create({...req.body}).exec((err, user) => {
        if(err)return res.badRequest(err);
        return res.json(user);
      })
    },
    /**
     * 更新资源，应用路由 PUT /foo/:id
     */
    update(req, res){
      const Model = sails.models[modelName];
      const id = req.param('id');
      id ? Model.findOne({id}).populate(models).exec((err, user) => {
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
    /**
     * 删除资源，应用路由 DELETE /foo/:id
     */
    destroy(req, res){
      const Model = sails.models[modelName];
      const id = req.param('id');
      id ? Model.destroy({id}).exec((err, user) => {
        if(err) return res.badRequest(err);
        return res.json(_.first(user));
      }) : res.badRequest({message: 'must have id param'})
    }
  }
}


/**
 * 根据model的attributes获取有哪些字段是应用到了联表查询
 * @param  {object} attrs model的attributes
 * @return {array}       应用了联表查询的字段集合
 */
function getModel(attrs){
  var models = [];
  _.each(attrs, (field, key) => {
    field['model'] && models.push(key);
  });
  return models;
}

