import Item from './item';
import style from './style';
export default class List extends Component{
  constructor(props){
    super();
    window.scrollTo(0, 64);
  }
  render(){
    return (
<div className={style.detail}>
  <Item {...this.props}></Item>
</div>
    );
  }
}