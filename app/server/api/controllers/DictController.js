/**
 * 字典
 */
module.exports = {
  /**
   * 获取字典
   * @param  {[type]} res [description]
   * @param  {[type]} req [description]
   * @return {[type]}     [description]
   */
  get(req, res){
    /**
     * categorys
     */
    const dict = {};
    async.parallel({
      tags: cb => Tags.find().exec(cb),
      user: cb => User.find().exec(cb),
      post: cb => Post.find().exec(cb),
      categorys: cb => Category.find().exec(cb),
    }, (err, result) => {
      dict['Tags'] = result.tags;
      dict['TagsMap'] = generateTree(_.map(dict['Tags'], item => ({[item.name]: item.displayName})));

      dict['Categorys'] = result.categorys;
      dict['CategorysMap'] = generateTree(_.map(dict['Categorys'], item => ({[item.name]: item.displayName})));

      dict['User'] = result.user;
      dict['UserMap'] = generateTree(_.map(dict['User'], item => ({['' + item.id]: item.username})));

      res.jsonx(dict);
    });
  }
}

function generateTree(arr){
  return _.assign(...arr);
}