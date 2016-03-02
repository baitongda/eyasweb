module.exports = {
  get(cb){
    request.get(config.server + '/dict')
    .end((err, res) => {
      if(!err){
        window.dict = res.body
        return cb(res.body);
      }
      return cb({});
    });
  }
}