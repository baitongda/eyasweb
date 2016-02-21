export default class TextFiled extends Component{
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
<div ref="mdl" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
  <input className="mdl-textfield__input" type="text" id="sample3" />
  <label className="mdl-textfield__label" htmlFor="sample3">Text...</label>
</div>
    )
  }
}