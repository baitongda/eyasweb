import Brand from '../Brand';
import List from '../List';
import style from './style';
@connect(
  state => state.blog
)
export default class APPModule extends Component{
  constructor(props){
    super();
  }

  render(){
    const {location, info} = this.props;
    return (
      <div>
        {!(location.pathname == '/blog' || location.pathname == '/') ? '' :
          <Brand {...info}></Brand>
        }
        <div className={style.bloglist}>
          {this.props.children || <List></List>}
        </div>
      </div>
    );
  }
}