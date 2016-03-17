/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
import toMarkdown from 'to-markdown';

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    author: {
      model: 'user',
      defaultsTo: 1
    },
    expect: {
      type: 'text',
      defaultsTo: '',
    },
    content: {
      type: 'text',
      defaultsTo: ''
    },
    status: {
      type: 'string',
      defaultsTo: 'active'
    },
    slug: {
      type: 'string',
      defaultsTo: ''
    },
    categorys: {
      collection: 'category',
      via: 'post',
      dominant: true
    },
    tags: {
      collection: 'tags',
      via: 'post',
      dominant: true
    },
    categorys: {
      collection: 'category',
      via: 'post',
      dominant: true
    },
  },
  beforeCreate(val, cb){
    val.content = toMarkdown(val.content);
    cb();
  }
};

