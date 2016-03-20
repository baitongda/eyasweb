import style from './style.scss';

export default class TextFiled extends Component{
  constructor(props){
    super();
    this.state = {
      value: props.value
    };
  }
  static defaultProps = {
    value: '',
    label: '',
    checked: false,
    onChange: () => {},
    width: '100%',
    type: "text"
  }

  changeHandler(e){
    const e = e || {};
    const target = e.target || this.refs.input;
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

  componentDidUpdate(){
    componentHandler.upgradeElement(this.refs.mdl);
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
  className={cx({
    ["mdl-textfield mdl-js-textfield mdl-textfield--floating-label"]: true,
    [style.text]: true, 
    ['is-dirty']: !!this.state.value
  })}>
  <input 
    ref="input"
    className="mdl-textfield__input" 
    name={this.props.name} 
    onChange={::this.changeHandler} 
    type={this.props.type} 
    value={this.state.value} 
  />
  <label className="mdl-textfield__label" htmlFor="sample3">{this.props.label}</label>
</div>
    );
  }
}