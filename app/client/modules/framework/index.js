import {Provider} from 'react-redux';
import APPModule from 'fw/components/APPModule';
import createStore from 'utils/store';
import reducers from './reducers';

const store = createStore()(reducers);

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