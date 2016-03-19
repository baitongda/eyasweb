import style from './style.scss';

export default class PageNav extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    pageSize: 0,
    paged: 1,
    pageCount: 1,
    itemCount: 0,
    onChange: (paged) => {}
  }

  changePage(paged){
    this.props.onChange(paged);
  }

  render(){
    const pages = [];
    for(let i = 0; i < this.props.pageCount; i++){
      pages.push(<li key={i}><button 
        className={cx({
          "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab": true,
          "mdl-button--colored": this.props.paged == (i + 1)
        })}
        onClick={e => this.changePage(i + 1)}
      >{i + 1}</button></li>);
    }
    return (
      <div className={style.pagenav}>
        <ul>{pages}</ul>
      </div>
    );
  }
}