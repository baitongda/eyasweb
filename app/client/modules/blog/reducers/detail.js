const constant = Constant('blogDetail');

const initState = {
  posts: {},
  data: {}
};

export default function detail(state = initState, action){
  switch(action.type){
    case constant.of('GetPost'):
      return {
        posts: {
          ...state.posts,
          ['' + action.data.id]: action.data
        },
        data: action.data
      };
    default :
      return state;
  }
}
