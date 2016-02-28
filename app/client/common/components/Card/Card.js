import style from './style';

export class Card extends Component{
  render(){
    return (
<div {...this.props} className={cx("mdl-card", "mdl-shadow--2dp", this.props.className)}></div>
    );
  }
}

export class Title extends Component{
  render(){
    return (
<div className="mdl-card__title">
     <h2 {...this.props} className={cx("mdl-card__title-text", this.props.className)}></h2>
</div>
    );
  }
}

export class Content extends Component{
  render(){
    return (
      <div 
        {...this.props} 
        className={cx("mdl-card__supporting-text", this.props.className)}
      />
    );
  }
}

export class Footer extends Component{
  render(){
    return (
      <div 
        {...this.props} 
        className={cx("mdl-card__actions mdl-card--border", this.props.className)}
      />
    );
  }
}