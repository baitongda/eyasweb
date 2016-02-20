// 应用总路由
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import history  from 'utils/history';
import Framework from 'fw';
import HomeRouter from 'home/router';
// import AdminRouter from 'admin/router';
// import AuthRouter from 'auth/router';
import Index from 'home';

const APPRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Framework}>
      <IndexRoute component={Index} />
      {HomeRouter}
    </Route>
  </Router>
);

export default APPRouter;
