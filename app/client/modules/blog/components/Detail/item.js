import {DetailCard} from '../PostCard';
import style from './style';

export default class Item extends Component{
  render(){
    return (
<div className={style.list}>
  <DetailCard></DetailCard>
</div>
    )
  }
}