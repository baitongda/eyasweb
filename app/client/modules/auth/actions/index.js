const constant = Constant('auth');

export function login(formdata){
  return dispatch => {
    request.post(config.server + '/login')
      .send(formdata)
      .end((err, res) => {
        const data = res.body;
        if(data.token){
          sessionStorage.setItem('auth', data.token);
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