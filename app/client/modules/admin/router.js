import {Route, IndexRoute} from 'react-router';
import App from './';
import List from './components/List';
import Edit from './components/Edit';


const appRoute = (
  <Route path='/admin' component={App}>
    <IndexRoute component={List} />
    <Route path="/admin/new" component={Edit} />
    <Route path="/admin/:pid" component={Edit} />
  </Route>
);

export default appRoute;