import style from './style';

export default class APPModule extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className={style.admin}>
        {this.props.children}
      </div>
    );
  }
}