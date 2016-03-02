import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import style from './style.scss';
export default class Select extends Component{
  constructor(props){
    super();
    this.state = {
      value: props.value
    };
  }

  onChange(val){
    this.setState({
      value: val
    });
    this.props.onChange && this.props.onChange(val);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value
    });
  }

  render(){
    return (
      <ReactSelect 
        placeholder={this.props.label}
        {...this.props}
        value={this.state.value}
        onChange={::this.onChange}
      />
    );
  }
}