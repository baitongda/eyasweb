import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';


function strategy(username, password, done){
  // console.log('local auth:',username, password);
  User
  .findOne({username})
  .exec((err, user) => {
    if(err) {
      return done(err, false, {
        message: 'has an error'
      });
    }
    if(!user) {
      return done(null, false, {
        message: 'no this user'
      });
    }
    if(Encrypt.validate(password, user.password)){
      return done(null, user, {
        message: 'login success'
      });
    }else{
      return done(null, false, {
        message: 'password error'
      })
    }
  })
}

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},strategy));

module.exports = function(req, res, next){
  // console.log('next: ', next)
  next();
  // console.log('next: ', next)

}