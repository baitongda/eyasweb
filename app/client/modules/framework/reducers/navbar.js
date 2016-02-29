const constant = Constant('navbar');
const initState = {
  data: [{
    title: '首页',
    link: '/',
  }, {
    title: '博客',
    link: '/blog'
  }, 
  // {
  //   title: 'example',
  //   link: '/example'
  // }, 
   {
     title: 'Admin',
     link: '/admin'
   }, 
  {
    title: 'Login',
    link: '/auth'
  }, 
  // {
  //   title: '关于我',
  //   link: '/about'
  // }
  ]
};
if(sessionStorage.getItem('auth')){
  _.remove(initState.data, item => item.link == '/auth');
} else {
  _.remove(initState.data, item => item.link == '/admin');
}

export default function navbar(state = initState, action){
  switch(action.type){
    case constant.of('ChangeNavbar'):
      return {
        ...state,
        data: [
          ...action.data
        ]
      };
  }
  return state;
}