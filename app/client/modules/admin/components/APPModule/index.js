import style from './style';

@connect(
  state => {
    return {
      isLogin: state.auth.isLogin
    };
  }
)
export default class APPModule extends Component{
  constructor(props){
    super();
    if(!props.isLogin){
      History.push('/');
    }
  }

  render(){
    return (
      <div className={style.admin}>
        {this.props.children}
      </div>
    );
  }
}