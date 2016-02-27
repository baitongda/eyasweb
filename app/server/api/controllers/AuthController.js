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
        token: Jwt.encode(user.username)
      })
    })(req, res);
    // console.log('login')
    // res.json({
    //   message: 'waiting'
    // })
  },
  logout(req, res){
    console.log('logout');
    res.json({
      message: 'logout'
    })
  }
}