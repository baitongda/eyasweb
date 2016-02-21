export default class Checkbox extends Component{
  constructor(props){
    super();
  }
  static defaultProps = {
    label: '',
    checked: false,
    onChange: () => {}
  }
  componentDidMount(){
    componentHandler.upgradeElement(this.refs.mdl);
  }
  render(){
    return (
<label ref="mdl" className={cx("mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect")} htmlFor="checkbox-1">
  <input type="checkbox" id="checkbox-1" checked={this.props.checked} onChange={::this.props.onChange} className="mdl-checkbox__input" />
  <span className="mdl-checkbox__label">{this.props.label}</span>
</label>
    )
  }
}