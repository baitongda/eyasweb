import {DetailCard} from '../PostCard';
import style from './style';
import {getPost} from '../../actions/detail';

@connect(
  state => state.blog.detail,
  dispatch => bindActionCreators({getPost}, dispatch)
)
export default class Item extends Component{
  constructor(props){
    super();
    const pid = props.params.pid;

    props.getPost(pid);

    let {posts, data} = props;
    if(data.id != pid){
      data = {};
    }

    this.state = {
      data
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.params.pid == nextProps.data.id){
      this.setState({
        data: nextProps.data
      });
    }
  }

  render(){
    const {data} = this.state;
    return (
<div className={style.list}>
  { 
    !data.id ? <Loading></Loading> :
    <DetailCard {...this.props} data={this.state.data}></DetailCard>
  }
</div>
    );
  }
}