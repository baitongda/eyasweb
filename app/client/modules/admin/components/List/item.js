import style from './style';

export default class List extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <tr>
        <td>
          <Checkbox></Checkbox>
        </td>
        <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
        <td>2015-10-20</td>
        <td>
          <button className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-eye"></i>
          </button>
          <Link to="/admin/123" className="mdl-button mdl-js-button mdl-button--icon">
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