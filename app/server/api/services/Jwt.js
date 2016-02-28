import jwt from 'jsonwebtoken';
module.exports = {
  /**
   * 编码生成 JWT token
   * @param  {string} username 需要编码的用户名
   * @return {string}          生成的token
   */
  encode(username){
    return jwt.sign({username},'secret');
  }
}