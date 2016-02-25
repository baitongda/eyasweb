module.exports = function unanth(data){
  const {res} = this;
  res.status(401);
  res.jsonx(data);
}