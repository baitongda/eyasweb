const constant = Constant('adminEdit');

const initState = {
  posts: {},
  data: {}
};
export default function edit(state = initState, action){
  switch(action.type){
    case constant.of('NewPost'):
    case constant.of('UpdatePost'):
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