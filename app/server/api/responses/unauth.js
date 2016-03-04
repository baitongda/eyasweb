/**
 * 验证不通过时返回401状态码
 * @param  {Object} data 要返回的信息
 */
module.exports = function unanth(data){
  const {res} = this;
  res.status(401);
  res.jsonx(data);
}