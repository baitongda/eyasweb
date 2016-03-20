import {combineReducers, bindActionCreators, compose} from 'redux';
import marked from './marked';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import request from './request';
import {PropTypes, Component} from 'react';
import _ from 'lodash';
import formToObj from 'form-to-obj';
import Constant from 'react-constant';
import 'script!material-design-lite';
import uuid from 'node-uuid';

// 配置

if(process.env.NODE_ENV == 'production'){
  config.server = window.location.protocol + '//' + window.location.host + '/api';
}

// 全局工具
window.util = require('utils/utily')['default'];
window.config = require('client/config/config');
window.marked = marked;
window.combineReducers = combineReducers;
window.bindActionCreators = bindActionCreators;
window.compose = compose;
window.connect = connect;
window.request = request;
window.PropTypes = PropTypes;
window.Component = Component;
window._ = _;
window.formToObj = formToObj;
window.Constant = Constant;
window.Link = Link;
window.uuid = uuid;
window.History = browserHistory;
