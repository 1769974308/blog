# SpringBoot整合thymeleaf模板
## 一、简介
>Thymeleaf 在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 html 标签里增加额外的属性来达到模板+数据的展示方式。浏览器解释 html 时会忽略未定义的标签属性，所以 thymeleaf 的模板可以静态地运行；当有数据返回到页面时，Thymeleaf 标签会动态地替换掉静态内容，使页面动态显示。

>Thymeleaf 开箱即用的特性。它提供标准和spring标准两种方言，可以直接套用模板实现JSTL、 OGNL表达式效果，避免每天套模板、该jstl、改标签的困扰。同时开发人员也可以扩展和创建自定义的方言。

>SpringBoot官方推荐模板，提供了可选集成模块(spring-boot-starter-thymeleaf)，可以快速的实现表单绑定、属性编辑器、国际化等功能。
## 二、整合
2.1、pom.xml 中添加对 thymeleaf 模板依赖
```java
        <!--thymeleaf 模板-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>
```
2.2、创建ThymeleafController.java 用来映射HTTP请求与页面的跳转
```java
package com.taotaojava.Controller;

import com.taotaojava.pojo.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Administrator on 2019\2\25 0025.
 */
@RestController
@RequestMapping("/thymeleaf")
public class ThymeleafController {

    @GetMapping("/index")
    public ModelAndView index(){
        ModelAndView view = new ModelAndView();
        // 设置跳转的视图 默认映射到 src/main/resources/templates/{viewName}.html
        view.setViewName("index");
        //设置属性
        view.addObject("title","thymeleaf模板");
        view.addObject("desc","hello world thymeleaf模板");
        User user = new User();
        user.setName("菜涛");
        user.setEmail("1769974308@qq.con");
        view.addObject("user",user);
        return  view;
    }

}
```
2.3、在 src/main/resources/templates 目录下创建一个名 index.html 的模板文件
```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title th:text="${title}">Title</title>
</head>
<body>
    <h1 th:text="${desc}">2019-02-25</h1>
    <h2>=====联系=====</h2>
    作者：<p th:text="${user?.name}"></p>
    邮箱：<p th:text="${user?.email}"></p>
</body>
</html>
```
## 三、测试
浏览器输入:
```java
http://localhost:8080/thymeleaf/index
```
