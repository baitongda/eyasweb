import passport from 'passport';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';

/**
 * passport 验证策略
 */
function strategy(payload, done){
  User
  .findOne({username: payload.username})
  .exec((err, user) => {
    if(err) {
      return done(err, false);
    }
    if(!user) {
      return done(null, false, {
        message: 'no this user'
      });
    }

    return done(null, user, {
      message: 'password error'
    })

  })
}
passport.use(new JwtStrategy({
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeader()
}, strategy));


module.exports = function(req,res,next){
  /**
   * 根据token验证该用户是否已经登录
   * 如果登录则正常返回
   * 如果未登录则返回401并阻止请求
   */
  passport.authenticate('jwt', { session: false}, (err, user, info) => {
    if(err || !user){
      return res.unauth({
        message: info.toString()
      });
    }
    return next();
  })(req,res,next)
}