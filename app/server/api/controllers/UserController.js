/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// import User from '../models/User';
const mixin = Restful('user');

module.exports = {
	...mixin
};

