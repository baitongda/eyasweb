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
    default:
      return state;
  }
}