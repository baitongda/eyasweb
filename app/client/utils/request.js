import superagent from 'superagent-defaults';

const request = superagent();
request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));

request.reloadJwt = () => {
  request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));
  window.request = request;
};

module.exports = request;