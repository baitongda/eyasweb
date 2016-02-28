const constant = Constant('adminList');
const initState = {
  data: []
};

export default function list(state = initState, action){
  switch(action.type){
    case constant.of('GetList'):
      return {
        ...state,
        data: action.data
      };
    case constant.of('DeletePost'):
      _.remove(state.data, item => item.id == action.data.id);
      return {
        ...state,
        data: [
          ...state.data
        ]
      };
    default:
      return state;
  }
}