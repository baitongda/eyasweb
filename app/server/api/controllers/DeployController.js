/**
 * DeployController
 *
 * @description :: Server-side logic for managing deploys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	deploy(req, res){
    const {hook} = req.body;
    try{
      const hookdata = JSON.parse(hook);
    } catch(e) {
      console.log(e);
      return res.json({
        message: 'parse json error'
      });
    }
    const {
      password,
      push_data: data
    } = hookdata;
    if(password !== 'yuesong893521870'){
      return res.json({
        message: 'password error'
      });
    }

    const {
      user,repository,commits
    } = data;

    const commit = commits.find(item => item.id == data.after)

    const info = {
      commit: data.after,
      title: commit.message,
      hook: hook,
      ref: data.ref
    }
    Deploy.create(info).exec((err, result) => {
      res.json(result);
      if(result.ref == 'refs/heads/master'){
        reDeploy(result);
      }
    })
  }
};

/**
 * 重新部署
 * @param  {object} data 部署信息
 */
function reDeploy(data){

}