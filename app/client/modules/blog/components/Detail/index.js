import Item from './item';
import style from './style';
export default class List extends Component{
  render(){
    return (
<div className={style.detail}>
  <Item {...this.props}></Item>
</div>
    );
  }
}