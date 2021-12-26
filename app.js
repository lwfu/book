// 引入express框架
const express = require('express');
// 创建web服务器
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 启动静态资源服务
app.use(express.static('public'));

// 配置路由
app.use(router);


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');