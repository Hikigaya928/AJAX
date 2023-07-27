// 1. 引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的一个封装
// response是对请求报文的一个封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO AJAX');
});

app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    // response.send('HELLO AJAX JSON');
    const data = {
        name: 'hjy'
    };
    let str = JSON.stringify(data);
    response.send(str);
});

//针对IE缓存问题的规则
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO IE-3');
});

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});
//针对 jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Nliverd的AJAX学习笔记' };

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});
//针对 axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: '这是我的学习笔记' };
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
});
//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: '这是我的学习笔记' };
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
});
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动,8000端口监听中....');
})