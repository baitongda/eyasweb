import superagent from 'superagent-defaults';

const request = superagent();
request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));

request.reloadJwt = function(){
  request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));
  window.request = request;
}

module.exports = request;