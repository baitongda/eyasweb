import Brand from '../Brand';
import style from './style';
@connect(
  state => state.blog
)
export default class APPModule extends Component{
  constructor(props){
    super();
    console.log(props);
  }

  render(){
    const {location, info} = this.props;
    return (
      <div>
        {location.pathname != '/blog'?'':
          <Brand {...info}></Brand>
        }
        <div className={style.bloglist}>
          {this.props.children}
        </div>
      </div>
    );
  }
}