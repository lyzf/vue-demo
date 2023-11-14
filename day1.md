vue create app
创建一个项目
网络不好的同学 稍微等一下
code .
打开vscode
vue开发单页面应用

public
    index.html   静态页面


components文件夹：一般放置的是非路由组件

App.vue 唯一的根组件

main.js 程序的入口文件，也是程序最先执行的文件

前端路由 ：kv键值对
key: URL
value: 相应的路由组件

结构：
路由组件：
Home首页路由组件、Search路由组件、login登录路由，register注册路由
非路由组件：
Header
Footer[在首页、搜索页]， 但是登陆、注册页没有

在咱们项目中，不在以HTML+CSS为主，主要搞业务、逻辑
在开发项目的时候：
1： 书写静态页面（HTML + CSS）
2:  拆分组件
3： axios获取服务器的数据 动态显示
4： 完成相应的动态业务逻辑

注意1： 创建组件的时候，组件结构 + 组件的样式 + 图片资源
注意2： 咱们的项目采用的是less样式，需要通过less、less-loader【5版本】进行处理less,把less样式变为css样式，浏览器才能识别
注意3： 如果想让组件识别less样式，需要在style标签上加上lang=less


查看vue脚手架的默认配置
vue inspect > output.js

关闭语法检查  vue.config.js  可以修改vue脚手架 默认的相关配置
lintOnSave: false

前台用的word文档  后台用的swagger文档

使用组件的步骤：
    创建
    引入
    注册
    使用

路由组件的搭建
vue-router
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components文件夹：经常放置的非路由组件（共用全局组件）
-pages|views文件夹：经常放置路由组件

npm install --save vue-router@3

配置路由
