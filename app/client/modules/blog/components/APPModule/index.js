import Brand from '../Brand';

@connect(
  state => state.blog
)
export default class APPModule extends Component{
  constructor(props){
    super();
    console.log(props);
  }

  render(){
    const {route, info} = this.props;
    return (
      <div>
        {route.path != '/blog'?'':
          <Brand {...info}></Brand>
        }
      </div>
    );
  }
}