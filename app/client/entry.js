// 全局工具
import './utils/globals';
import './utils/golbalComponent';

// 全局样式
import 'common/style';

// 应用路由
import Router from './router';

// 字典，字典作为全局变量使用，应用依赖字典，所以优先加载
import dict from './utils/dict';

dict.get(() => {
  ReactDOM.render(Router, document.getElementById('eyas'));
});
