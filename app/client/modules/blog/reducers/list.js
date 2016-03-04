
const constant = Constant('bloglist');
const init = {
  data: []
};

export default function list(state = init, action){
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