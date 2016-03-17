/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    slug: {
      type: 'string'
    },
    displayName: {
      type: 'string'
    },
    post: {
      collection: 'post',
      via: 'categorys'
    }
  },
  beforeCreate(values, cb){
    if(!values.name) throw new Error('category name required!');
    values.slug = values.slug || values.name;
    values.displayName = values.displayName || values.name;
    cb();
  }
};

