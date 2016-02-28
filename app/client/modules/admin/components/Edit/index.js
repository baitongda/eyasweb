import Markdown from 'cc/Markdown';
import * as actions from '../../actions/edit';

@connect(
  state => state.admin.edit,
  dispatch => bindActionCreators(actions, dispatch)
)
export default class Edit extends Component{
  constructor(props){
    super();
    const isNew = props.route.path == '/admin/new';
    let data = {};
    if(!isNew){
      const pid = props.params.pid;
      let {posts} = props;
      data = props.data;
      if(data.id != pid){
        data = {};
      }
      props.getPost(pid);
    }
    
    this.state = {
      data,
      isNew
    };
  }

  componentWillReceiveProps(nextProps){
    if((nextProps.params.pid == nextProps.data.id) && !this.state.isNew){
      this.setState({
        data: nextProps.data
      });
    }
  }

  submitHandler(e){
    const formdata = formToObj(e.target);
    if(this.props.data.id){
      formdata['id'] = this.props.data.id;
      this.props.updatePost(formdata);
    }else{
      this.props.newPost(formdata);
    }
    e.preventDefault();
  }

  render(){
    const {data} = this.state;
    return (
      <div>
        <form onSubmit={::this.submitHandler}>
          <TextField label="标题" name="title" value={data.title} />
          <Select 
            name="category"
            label="分类" 
            multi 
            options={[{label: 'eyas', value: 'eyas'}]}
            value={data.category}
          />
          <Markdown text={data.content} name="content" />
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" type="submit">提交</button>
          <Link to="/admin" className="mdl-button mdl-js-button mdl-button--raised">返回</Link>
        </form>
      </div>
    );
  }
}