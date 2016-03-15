const constant = Constant('adminEdit');

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

export function newPost(data){
  return dispatch => {
    request.post(config.server + '/post')
    .send(data)
    .end((err, res) => {
      dispatch({
        type: constant.NewPost,
        data
      });
      History.push('/admin');
    });
  };
}

export function updatePost(data){
  return dispatch => {
    request.put(config.server + '/post/' + data.id)
    .send(data)
    .end((err, res) => {
      dispatch({
        type: constant.UpdatePost,
        data
      });
      History.push('/admin');
    });
  };
}

