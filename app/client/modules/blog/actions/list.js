const constant = Constant('bloglist');

export function getList(){
  return dispatch => {
    request.get(`${config.server}/post`)
      .end((err, res) => {
        dispatch({
          type: constant.GetList,
          data: res.body
        });
      });
  };
}