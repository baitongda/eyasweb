import passport from 'passport';

module.exports = {
  login(req, res) {
    passport.authenticate('local', {session: false}, (err, user, info)=>{
      console.log('login:',err, user, info);
      if(err){
        return res.unauth({
          message: 'have an error'
        });
      }
      if(!user){
        return res.unauth({
          message: info.message
        });
      }
      return res.json({
        message: info.message,
        token: Jwt.encode(user.username),
        user
      })
    })(req, res);
    // console.log('login')
    // res.json({
    //   message: 'waiting'
    // })
  },
  /**
   * 检查是否已经登录
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  check(req, res){
    res.json({
      isLogin: true
    })
  },
  logout(req, res){
    console.log('logout');
    res.json({
      message: 'logout'
    })
  },
  /**
   * 刚初始化的时候没有用户导致无法登陆，特地加个后门
   */
  firstUser(req, res){
    User.find().exec((err, users) => {
      if(users.length){
        res.status(403);
        res.json({
          message: "禁止访问!"
        });
      } else {
        User.create(req.body).exec((err, user) => {
          if(err) return console.log(err);
          res.json(user);

        })
      }

    })
  }
}