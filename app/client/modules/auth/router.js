import {Route, IndexRoute} from 'react-router';
import App from './';
import Login from './components/Login';

const appRoute = (
  <Route path='/auth' component={App}>
    <Route path="/auth/login" component={Login}></Route>
    <IndexRoute component={Login} value=""></IndexRoute>
  </Route>
);

export default appRoute;