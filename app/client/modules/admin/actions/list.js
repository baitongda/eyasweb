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
        })
      })
  }
}