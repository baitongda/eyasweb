import Item from './item';
import style from './style';
export default class List extends Component{
  render(){
    return (
<div className={style.list}>
  <Item></Item>
  <Item></Item>
  <Item></Item>
  <Item></Item>
  <Item></Item>
  <Item></Item>
</div>
    )
  }
}