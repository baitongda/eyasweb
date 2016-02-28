export default class Button extends Component{
  constructor(props){
    super();
  }

  static defaultProps = {
    mdl: []
  }

  render(){
    const styles = ['mdl-button', 'mdl-js-button'];
    _.each(this.props.mdl, (val, key) => {
      if(key !== 'children'){
        styles.push('mdl-button--' + key);
      }
    });
    return (
      <button {...this.props} className={cx(styles, this.props.className)}></button>
    );
  }
}