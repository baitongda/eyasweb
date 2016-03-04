import style from './style';
import {checkLogin} from 'admin/actions/list';

@connect(
  state => {
    return {
      isLogin: state.auth.isLogin
    };
  },
  dispatch => bindActionCreators({checkLogin}, dispatch)
)
export default class APPModule extends Component{
  constructor(props){
    super();
    if(!props.isLogin){
      History.push('/auth/login');
    }
    props.checkLogin();
  }

  render(){
    return (
      <div className={style.admin}>
        {this.props.children}
      </div>
    );
  }
}