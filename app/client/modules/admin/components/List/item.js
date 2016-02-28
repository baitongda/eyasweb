import style from './style';

export default class List extends Component{
  constructor(){
    super();
  }

  render(){
    const {data} = this.props;
    return (
      <tr>
        <td>
          <Checkbox></Checkbox>
        </td>
        <td className="mdl-data-table__cell--non-numeric">{data.title}</td>
        <td>{data.createdAt}</td>
        <td>
          <Link to={'/blog/' + data.id} className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-eye"></i>
          </Link>
          <Link to={"/admin/" + data.id} className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-edit"></i>
          </Link>
          <button className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}