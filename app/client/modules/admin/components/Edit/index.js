import Markdown from 'cc/Markdown';

export default class Edit extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <form action="">
          <TextField label="标题" />
          <Select label="分类" multi options={[{label: 'eyas', value:'eyas'}]} />
          <Markdown />
        </form>
      </div>
    );
  }
}