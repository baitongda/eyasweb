import {Route, IndexRoute} from 'react-router';
import App from './';
import List from './components/List';
import Detail from './components/Detail';


const appRoute = (
  <Route path='/blog' component={App}>
    <IndexRoute component={List} />
    <Route path="/blog/:pid" component={Detail} />
  </Route>
)

export default appRoute;