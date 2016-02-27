import style from './style.scss';

export default class DetailCard extends Component{
  render(){
    const {data} = this.props;
    return (
<div className={cx("mdl-card", "mdl-shadow--2dp", style.card, style. list)}>
  <div className="mdl-card__title">
     <p className="mdl-card__title-text">{data.title}</p>
  </div>
  <div className="mdl-card__media">
    
  </div>
  <div className="mdl-card__supporting-text" dangerouslySetInnerHTML={{__html: data.content}}></div>
  <div className="mdl-card__actions">
     
  </div>
</div>
    );
  }
}