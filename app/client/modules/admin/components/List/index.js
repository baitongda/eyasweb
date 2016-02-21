import style from './style';
import Item from './item';

export default class List extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
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
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </tbody>
        </table>
      </div>
    );
  }
}