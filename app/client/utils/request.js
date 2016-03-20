import superagent from 'superagent-defaults';

const request = superagent();
request.reloadJwt = () => {
  request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));
  window.request = request;
};
request.reloadJwt();

module.exports = request;