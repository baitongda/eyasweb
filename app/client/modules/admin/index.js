import APPModule from './components/APPModule';

export default class Home extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <APPModule {...this.props} />
    );
  }
}