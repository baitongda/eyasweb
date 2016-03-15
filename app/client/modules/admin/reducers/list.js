const constant = Constant('adminList');
const initState = {
  value: []
};

export default function list(state = initState, action){
  switch(action.type){
    case constant.of('ClearList'):
      return {
        ...state,
        value: []
      };
    case constant.of('GetList'):
      return {
        ...state,
        ...action.data
      };
    case constant.of('DeletePost'):
      _.remove(state.value, item => item.id == action.value.id);
      return {
        ...state,
        value: [
          ...state.value
        ]
      };
    default:
      return state;
  }
}