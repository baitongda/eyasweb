// 应用总路由
import {Router, Route, browserHistory} from 'react-router';
import history  from 'utils/history';
import Framework from 'fw';
// import BlogRouter from 'blog/router';
// import AdminRouter from 'admin/router';
// import AuthRouter from 'auth/router';
// import Index from 'blog';

const APPRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Framework}>
    </Route>
  </Router>
);

export default APPRouter;
