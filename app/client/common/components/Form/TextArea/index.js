import style from './style.scss';

export default class TextArea extends Component{
  constructor(props){
    super();
  }
  static defaultProps = {
    label: '',
    checked: false,
    onChange: () => {},
    width: '100%'
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
  <textarea className="mdl-textfield__input" type="text" rows= "3" >{this.props.value}</textarea>
  <label className="mdl-textfield__label" htmlFor={this.props.label}>{this.props.label}</label>
</div>
    );
  }
}