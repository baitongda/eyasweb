import style from './style';

export default class Footer extends Component{
  static defaultProps = {
    title: 'Eyas',
    copyright: '© ' + (new Date).getFullYear() +' Eyas Liu.',
    list: [{
      title: '首页',
      link: '/',
    },{
      title: '关于我',
      link: '/about'
    }]
  }
  render(){
    const {title, copyright, list} = this.props;
    return (
<footer className="mdl-mini-footer">
  <div className="mdl-mini-footer__left-section">
    <div className="mdl-logo">
      {title}
    </div>
    <ul className="mdl-mini-footer__link-list">
      {list.map(item => (
        <li><a href={item.link}>{item.title}</a></li>
      ))}
    </ul>
  </div>
  <div className="mdl-mini-footer__right-section">
    <p>{copyright}</p>
  </div>
</footer>
    );
  }
}