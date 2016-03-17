
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

  const findHasAttr = findAttrs(sails.models[modelName].attributes);

  const models = findHasAttr('model');
  const collects = findHasAttr('collection');

  return {
    /**
     * 列表查询，应用路由 GET /foo
     */
    find(req, res){
      const Model = sails.models[modelName];

      /**
       * 分页配置
       * @type {number} pageSize 每页的数量
       * @type {number} paged 第几页
       * 
       */
      // console.log(req.query);
      req.query = req.query || {};
      req.query.paged = req.query.paged || 1;
      const pagOption = {
        pageSize: 10,
        paged: 1,
        ...req.query,
      }
      // console.log(models, Model);
      // 
      async.parallel({
        count: cb => Model.count().exec(cb),
        list: cb => Model.find({
            // sort: 'updatedAt DESC',
            skip: pagOption.pageSize * (pagOption.paged - 1),
            limit: pagOption.pageSize
          }).populateAll().exec(cb)
      }, (err, result) => {
        let {count, list} = result;
        list = _.sortBy(list, item => -(new Date(item.updatedAt)).getTime())
        return res.jsonx({
          ...pagOption,
          itemCount: count,
          pageCount: Math.ceil(count / pagOption.pageSize),
          value: list || []
        });
      });


    },
    /**
     * 详情查询，应用路由 GET /foo/:id
     */
    findOne(req, res){
      const Model = sails.models[modelName];
      const id = req.param('id');
      id ? Model.findOne({id}).populateAll().exec((err, user) => {
        if(err){
          return res.badRequest(err);
        }
        user.tags.add([1,2,3]);
        // Tags.findOne(1).exec((err, tag) => {
        //   tag.post.add(user.id);
        //   tag.save(err => {})
        // })
        // user.save(err => {});
        return res.json(user);
      }) : res.badRequest({message: 'must have id param'});
    },
    /**
     * 新建资源，应用路由 POST /foo
     */
    create(req, res){
      const Model = sails.models[modelName];
      Model.create({...req.body}).exec((err, user) => {
        if(err) return res.badRequest(err);

        _.each(collects, col => {
          if(!user[col] && !req.body[col]){
            return;
          }
          user[col].add(req.body[col]);
          user.save(err => {});
        })
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
 * 查找在attribute的字段配置中包含该字段配置项的集合
 * @param {obj} attrs attribute的配置
 * @param  {string} field 要查找的配置名
 * @return {array}       应用了联表查询的字段集合
 */
function findAttrs(attrs){
  return field => {
    var models = [];
    _.each(attrs, (column, key) => {
      column[field] && models.push(key);
    });
    return models;
  }
}

