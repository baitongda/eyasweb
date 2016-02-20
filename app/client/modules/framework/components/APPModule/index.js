import Navbar from '../Navbar';
import Footer from '../Footer';
import style from './style';

export default class APPModule extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Navbar title="Eyas Liu"></Navbar>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}