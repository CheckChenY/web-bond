const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 注册路由
const router = express.Router();
// 路由中间件
router.use((req, res, next) => {
  // 任何路由信息都会执行这里面的语句
  console.log('this is a api request!');
  // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
  next();
})
// 获取用户列表信息的路由
router.get('/user/list', (req, res) => {
  const userList = [
    {
      name: 'luffy',
      age: 24,
      gender: '男',
      id:"1"
    },{
      name: 'lfy',
      age: 23,
      gender: '女',
      id:"1"
    }
  ];
  res.json(userList);
});
// 所有的路由会加上“／api”前缀
app.use('/api', router); //添加router中间件

// express 自动帮我们创建一个server，封装的node底层http
app.listen(3003, () => {
  console.log('node server is listening 3003');
});
