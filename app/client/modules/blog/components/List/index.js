import Item from './item';
import style from './style';
import {getList} from '../../actions/list';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators({getList}, dispatch)
)
export default class List extends Component{
  constructor(props){
    super();
    props.getList();
  }
  render(){
    const {data} = this.props;
    return (
<div className={style.list}>
  {data.length ? data.map(item => <Item key={item.id} data={item}></Item>) : <Loading></Loading>}
</div>
    );
  }
}