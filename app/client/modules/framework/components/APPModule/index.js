import Navbar from '../Navbar';
import Footer from '../Footer';
import style from './style';

export default class APPModule extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="app-container">
        <Navbar title="Eyas Liu"></Navbar>
        <div className="module-container">
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}