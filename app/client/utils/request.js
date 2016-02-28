import superagent from 'superagent-defaults';

const request = superagent();
request.set('authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'));

module.exports = request;