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

export function changePage(paged){
  return (dispatch, getState) => {
    var list = _.get(getState(), 'blog.list');
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