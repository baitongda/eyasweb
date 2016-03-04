const constant = Constant('blogDetail');

export function getPost(id){
  return dispatch => {
    request.get(`${config.server}/post/${id}`)
      .end((err, res) => {
        dispatch({
          type: constant.GetPost,
          data: res.body
        });
      });
  };
}