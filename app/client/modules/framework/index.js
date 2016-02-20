import {Provider} from 'react-redux';
import APPModule from 'fw/components/APPModule';
import createStore from 'utils/store';
import reducers from './reducers';

const store = createStore()(reducers);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}

export default class FrameWork extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Provider store={store}>
        <APPModule />
      </Provider>
    );
  }
}