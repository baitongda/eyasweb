const constant = Constant('auth');
const initState = {
  isLogin: false,
  token: 'none',
  message: ''
};

export default function auth(state = initState, action){
  switch(action.type){
    case constant.of('Login'):
      return {
        ...state,
        isLogin: true,
        token: action.data.token,
        message: '登录成功!'
      };
    case constant.of('Message'):
      return {
        ...state,
        message: action.data.message
      };
    default :
      return state;
  }
}