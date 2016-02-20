const initState = {
  data: [{
    title: '首页',
    link: '/',
  },{
    title: '博客',
    link: '/blog'
  },{
    title: 'example',
    link: '/example'
  },{
    title: '关于我',
    link: '/about'
  }]
}

export default function navbar(state = initState, action){
  return state;
}