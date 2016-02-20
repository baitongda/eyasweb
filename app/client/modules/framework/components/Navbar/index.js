import style from './style';

@connect(
  state => state.navbar
)
export default class Navbar extends Component{
  static defaultProps = {
    data: [],
    title: 'Eyas'
  }
  render(){
    const {data} = this.props;
    return (
      <header className="mdl-layout__header mdl-layout__header--transparent">
        <div className={cx("mdl-layout__header-row", style.navbar)}>
          <span className="mdl-layout-title">{this.props.title}</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            {data.map(item => <Link key={uuid()} className="mdl-navigation__link" to={item.link}>{item.title}</Link>)}
          </nav>
        </div>
      </header>
    );
  }
}