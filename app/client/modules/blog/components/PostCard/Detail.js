import style from './style.scss';

export default class DetailCard extends Component{
  render(){
    return (
<div className={cx("mdl-card", "mdl-shadow--2dp", style.card, style. list)}>
  <div className="mdl-card__title">
     <p className="mdl-card__title-text">Auckland Sky Tower Auckland, New Zealand</p>
  </div>
  <div className="mdl-card__media">
    <img src="skytower.jpg" width="173" height="157" border="0" alt=""
     />
  </div>
  <div className="mdl-card__supporting-text">
  The Sky Tower is an observation and telecommunications tower located in Auckland,
  New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
  in the Southern Hemisphere.
  </div>
  <div className="mdl-card__actions">
     <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
  </div>
</div>
    )
  }
}