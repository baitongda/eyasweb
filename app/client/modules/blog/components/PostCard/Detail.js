import style from './style.scss';

export default class DetailCard extends Component{
  render(){
    const {data} = this.props;
    return (
<Card className={cx("content", "mdl-shadow--2dp", style.card, style. list)}>
  <Card.Title className="header">
    <h1 className="mdl-card__title-text">{data.title}</h1>
  </Card.Title>
  <Card.Content className="markdown-body">
    <div dangerouslySetInnerHTML={{__html: marked(data.content)}}></div>
  </Card.Content>
</Card>
    );
  }
}