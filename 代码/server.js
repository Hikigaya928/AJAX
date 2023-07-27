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
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methoh', '*');
 /*    设置了这三个响应头 代表
    1.所有页面都可以访问
    2.头信息可以自定义
    3.请求方法不论了 GET POST 都可以 */
    
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

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Nliverd的AJAX学习笔记' };

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});

//axios 服务
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

//JSONP 服务(解決跨域问题)
app.all('/jsonp-server', (request, response) => {
    /*   response.send('hello jsonp-server'); ❌
         因为是通过script标签跨域，通过标签解析不了纯文本内容，需要换成js代码!!
         response.send('console.log("hello jsonp-server")'); ✔*/
    const data = {
        name: 'JSONP跨域'
    };
    //将数据转化成字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化成字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
});

//CORS 服务(解决跨域问题)
app.all('/cors-server', (request, response) => {
    //设置响应头 就代表使用了 CORS 机制，就可以成功跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // Access-Control-Allow-Origin 只是一组HTTP首部字段中的其中一个响应头
   
    /* 如果使用 * 通配符号则表示同意所有网站访问资源
    如果只希望个别网站访问，需要将 * 修改成具体访问网页端口*/
    // response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
   
    response.send('hello CORS');
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动,8000端口监听中....');
})