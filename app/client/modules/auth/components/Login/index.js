import style from './style';

export default class Login extends Component{
  constructor(props){
    super();
  }

  render(){
    console.log(Card);
    return (
      <Card className={style.form}>
        <Card.Content>
          <form >
            <TextField label="用户名" name="username" />
            <TextField label="密码" type="password" name="password" />
          </form>
        </Card.Content>
        <Card.Footer>
          <Button mdl={['raised', 'colored']}>登录</Button>
          <Button style={{float: 'right'}}>注册</Button>
        </Card.Footer>
      </Card>
    )
  }
}