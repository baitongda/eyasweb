import style from './style.scss';

export default class ListCard extends Component{
  render(){
    return (
<div className={cx("mdl-card", "mdl-shadow--2dp", style.card, style. list)}>
  <div className="mdl-card__title">
     <h2 className="mdl-card__title-text"><Link to="/blog/123">Auckland Sky Tower Auckland, New Zealand</Link></h2>
  </div>

  <div className="mdl-card__supporting-text">
  The Sky Tower is an observation and telecommunications tower located in Auckland,
  New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
  in the Southern Hemisphere.
  </div>
  <div className="mdl-card__actions mdl-card--border">
     <a className="mdl-button mdl-js-button mdl-button--primary" href="">Read More</a>
  </div>
</div>
    )
  }
}