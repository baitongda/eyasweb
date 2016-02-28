import style from './style';
import {login} from '../../actions';

@connect(
  state => state.auth,
  dispatch => bindActionCreators({login}, dispatch)
)
export default class Login extends Component{
  constructor(props){
    super();
  }

  loginHandler(e){
    let formdata = formToObj(e.target);
    this.props.login(formdata);
    const messageContainer = this.refs.message;
    messageContainer.style.display = 'none';
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.message){
      const messageContainer = this.refs.message;
      messageContainer.style.display = 'block';
    }
  }

  render(){
    return (
      <form method="POST" onSubmit={::this.loginHandler} ref="login">
        <Card className={style.form}>
          <Card.Content>
            <TextField label="用户名" name="username" />
            <TextField label="密码" type="password" name="password" />
          </Card.Content>
          <Card.Footer>
            <Button mdl={['raised', 'colored']}>登录</Button>
            <Link className="mdl-button mdl-js-button" to="/auth/signup" style={{float: 'right'}}>注册</Link>
          </Card.Footer>
        </Card>
        <div className={style.message} ref="message">
          { !this.props.message ? '' :
              <div className={style.messageInner}>
                {this.props.message}
              </div>
          }
        </div>
      </form>
    );
  }
}