const constant = Constant('auth');

export function login(formdata){
  return (dispatch, getState) => {
    request.post(config.server + '/login')
      .send(formdata)
      .end((err, res) => {
        const data = res.body;
        if(data.token){
          sessionStorage.setItem('auth', data.token);
          // 修改导航栏
          const navbar = getState().navbar;
          _.remove(navbar.data, item => item.link === '/auth');
          navbar.data.push({
            title: '管理面板',
            link: '/admin'
          });
          dispatch({
            type: Constant('navbar').ChangeNavbar,
            data: navbar.data
          });
          // 登录成功
          dispatch({
            type: constant.Login,
            data
          });
          History.push('/admin');
        } else {
          dispatch({
            type: constant.Message,
            data
          });
        }
      });
  };
}