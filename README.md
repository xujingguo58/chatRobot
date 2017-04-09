# chatrobot

> a chat robot written by vue based on tuling api

> 用vue调用图灵机器人API实现聊天机器人

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
## 在线demo
[demo](http://52.221.230.190:8080/#/)

## 关于跨域问题
  在开发环境修改`/config/index.js`下的proxyTable如下:
  
  ```
   proxyTable: {
         '/openapi': {
            target: 'http://www.tuling123.com',
            changeOrigin: true,
            headers: {
                Referer: 'http://www.tuling123.com/'
            }
        }
    },
```
在服务端配置的时候，server.js配置如下（需要安装`express`模块和`http-proxy-middleware`模块）：
```
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use('/static', express.static('static'));
app.use('/openapi', proxy({
  target: 'http://www.tuling123.com', 
  changeOrigin: true, 
  headers: {
    Referer: 'http://www.tuling123.com'
  }
}
));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000);
```
参考：(vue-163-music(网易云音乐web版))[https://github.com/ShanaMaid/vue-163-music]
## API
  本次使用的是(图灵机器人)[http://www.tuling123.com]的API，每天提供免费5000次调用。
  提供了聊天对话，天气查询，成语接龙等功能，并且还能够微信公众号接入以及其它第三方接入。
  
## 运行截图

## 存在的问题
1.首先是页面布局，对height的设置为auto，这样在程序起始的时候页面会很短。
2.输入框没有监听键盘事件，并且在发送数据后不能自动清空，这些都是在开发的时候忽略但却会影响体验的地方。

## 页面布局
  参考了[http://codepen.io/clintioo/pen/HAkjq]的聊天框设计，对用户和机器人用CSS类做了区分。
## 文件目录

```
├── build
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── dist      //部署目录
│   ├── index.html   //入口文件
│   ├── server.js    //node服务器运行文件
│   └── static
│       ├── css
│       │   
│       └── js
│
├── index.html
├── node_modules
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets      //头像文件
│   │   ├── agent_50.png
│   │   ├── human_50.png
│   │   └── logo.png
│   ├── components   //组件
│   │   ├── chatRobot.vue  //机器人组件
│   │   └── style
│   │       └── style.css   //css文件
│   ├── main.js
│   └── router
│── index.js
```





For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
