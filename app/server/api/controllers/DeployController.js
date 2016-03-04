/**
 * DeployController
 *
 * @description :: Server-side logic for managing deploys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	deploy(req, res){
    const hook = req.body;
    console.log(hook);
    Deploy.create({
      commit: 'test',
      title: 'test',
      hook: JSON.stringify(hook),
      ref: 'test'
    }).exec((err, result) => {
      res.json(result);
    })
  }
};

