const constant = Constant('adminList');

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

export function deletePost(id){
  return dispatch => {
    request.delete(config.server + '/post/' + id)
      .end((err, res) => {
        dispatch({
          type: constant.DeletePost,
          data: res.body
        });
      });
  };
}

export function checkLogin(){
  return dispatch => {
    request.post(config.server + '/auth/check')
    .end((err, res) => {
      console.log(res);
      dispatch({
        type: Constant('auth').CheckLogin,
        isLigon: res.statusCode == 200
      });
    });
  };
}

export function changePage(paged){
  return (dispatch, getState) => {
    var list = _.get(getState(), 'blog.list');
    dispatch({
      type: constant.ClearList
    });
    request.get(config.server + '/post')
      .query({
        paged: paged,
        pageSize: list.pageSize,
      })
      .end((err, res) => {
        dispatch({
          type: constant.GetList,
          data: res.body
        })
      })
  }
}