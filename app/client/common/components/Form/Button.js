export default class Button extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    mdl: [],
    tag: 'button'
  }

  render(){
    const styles = ['mdl-button', 'mdl-js-button'];
    _.each(this.props.mdl, item => {
      styles.push('mdl-button--' + item);
    });
    return React.createElement(this.props.tag, 
      {
        ...this.props,
        className: cx(styles, this.props.className)
      }
    )
  }
}