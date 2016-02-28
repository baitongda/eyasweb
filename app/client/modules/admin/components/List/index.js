import style from './style';
import Item from './item';
import {getList} from '../../actions/list';

@connect(
  state => state.admin.list,
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
      <div>
        <Link className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" to="/admin/new">新建文章</Link>
        {
          !data.length? <Loading></Loading> :
          <table className={cx("mdl-data-table mdl-js-data-table mdl-shadow--2dp", style.table)}>
            <thead>
              <tr>
                <th style={{width: '40px'}}></th>
                <th className="mdl-data-table__cell--non-numeric">标题</th>
                <th>日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => <Item key={item.id} data={item}></Item>)}
            </tbody>
          </table>
        }
      </div>
    );
  }
}