import Item from './item';
import style from './style';
import {getList, changePage} from '../../actions/list';

@connect(
  state => state.blog.list,
  dispatch => bindActionCreators({getList, changePage}, dispatch)
)
export default class List extends Component{
  constructor(props){
    super();
    props.getList();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.paged != nextProps.paged){
      window.scrollTo(0, 370)
    }
  }

  render(){
    const {value: data} = this.props;
    return (
<div className={style.list}>
  {data.length ? data.map(item => <Item key={item.id} data={item}></Item>) : <Loading></Loading>}
  {data.length ? <PageNav {...this.props} onChange={this.props.changePage}></PageNav> : ''}
</div>
    );
  }
}