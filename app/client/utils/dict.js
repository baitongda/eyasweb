module.exports = {
  get(cb){
    return request.get(config.server + '/dict')
      .end((err, res) => {
        if(!err){
          window.dict = res.body
          return cb(res.body);
        }else{
          return cb({});
        }
      });
  }
}