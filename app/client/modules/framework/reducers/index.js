// global
import navbar from './navbar';
import info from './info';

// modules
import blog from 'blog/reducers';

export default combineReducers({
  navbar,
  info,

  // modules
  blog
});