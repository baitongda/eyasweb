import style from './style.scss';

export default class ListCard extends Component{
  render(){
    const {data} = this.props;
    const {author} = data;
    return (
<div className={cx("mdl-card", "mdl-shadow--2dp", style.card, style. list)}>
  <div className="mdl-card__title">
     <h2 className="mdl-card__title-text"><Link to={`/blog/${data.id}`}>{data.title}</Link></h2>
  </div>

  <div className="mdl-card__supporting-text">
  {util.subNoHtml(data.content)}
  </div>
  <div className="mdl-card__actions mdl-card--border">
    <Link className="mdl-button mdl-js-button mdl-button--primary" to={`/blog/${data.id}`}>Read More</Link>
  </div>
</div>
    );
  }
}