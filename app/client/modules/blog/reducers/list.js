
const constant = Constant('bloglist');
const init = {
  
  value: []
};

export default function list(state = init, action){
  switch(action.type){
    case constant.of('GetList'):
      return {
        ...state,
        ...action.data,
        value: [
          // ...state.value,
          ...action.data.value
        ]
      };
    default:
      return state;
  }
}