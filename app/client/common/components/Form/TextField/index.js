import style from './style.scss';

export default class TextFiled extends Component{
  constructor(props){
    super();
    this.state = {
      value: props.value
    };
  }
  static defaultProps = {
    value: ' ',
    label: '',
    checked: false,
    onChange: () => {},
    width: '100%'
  }

  changeHandler(e){
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e, e.target.value);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value
    });
  }

  componentDidMount(){
    componentHandler.upgradeElement(this.refs.mdl);
  }
  render(){
    const {width} = this.props;
    return (
<div 
  ref="mdl" 
  style={{width: width == 'auto' || ('' + width).indexOf('%') ? width : width + 'px'}} 
  className={cx("mdl-textfield mdl-js-textfield mdl-textfield--floating-label", style.text)}>
  <input className="mdl-textfield__input" name={this.props.name} onChange={::this.changeHandler} type="text" value={this.state.value} />
  <label className="mdl-textfield__label" htmlFor="sample3">{this.props.label}</label>
</div>
    );
  }
}