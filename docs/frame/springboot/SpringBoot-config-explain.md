# SpringBoot 配置详解
>SpringBoot 体现出了一种 约定优于配置，也称作按约定编程，是一种软件设计范式，旨在减少开发人员工作量。 默认的配置已经足够满足开发所需，但在特殊的情况下，需要用到自定义属性配置、自定义文件配置、多环境配置、外部命令引导等一系列功能

目录

- 自定义属性配置
- 自定义文件配置
- 多环境配置配置
- 外部命令引导

准备

为了让 Spring Boot 更好的生成配置元数据文件，添加如下依赖提示的配置，该依赖只会在编译时调用
```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```
## 一、自定义属性配置
1.1、application.properties 写入如下配置内容
```java
my.project=spring-boot-study
my.version=v.1.0.0
my.describe=spring-boot-study
```
1.2、新建ApplicationProperties.java，映射在 application.properties 中的内容，通过操作对象的方式来获得配置文件的内容
```java
package com.taotaojava.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2019\2\24 0024.
 */

@Component
@ConfigurationProperties(prefix = "my")
public class ApplicationProperties {

    private  String project;

    private  String version;

    private  String describe;
    //省略 get/set
}

```
1.3、新建ApplicationPropertiesController，Spring4.x 以后，推荐使用构造函数的形式注入属性

```java
package com.taotaojava.Controller;

import com.taotaojava.properties.ApplicationProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Administrator on 2019\2\24 0024.
 */
@RestController
@RequestMapping("/properties")
public class ApplicationPropertiesController {

    private static  final Logger log = LoggerFactory.getLogger(ApplicationPropertiesController.class);

    private  final ApplicationProperties applicationProperties;

    @Autowired
    public  ApplicationPropertiesController(ApplicationProperties applicationProperties){
        this.applicationProperties = applicationProperties;
    }

    @GetMapping("/getProperties")
    public  ApplicationProperties getProperties(){

        log.info("===============");
        log.info(applicationProperties.toString());
        log.info("================");


        return  applicationProperties;
    }

}
```

1.4、打开浏览器，输入如下地址： http://localhost:8080/properties/getProperties，观察控制台
```java
2019-02-24 21:32:08.722  INFO 7468 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : ===============
2019-02-24 21:32:08.723  INFO 7468 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : ApplicationProperties{project='spring-boot-study', version='v.1.0.0', describe='spring-boot-study'}
2019-02-24 21:32:08.723  INFO 7468 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : ================
```
## 二、自定义文件配置
2.1、新建customconfig.properties资源文件
```java
my.test=true
my.environment=test
```
2.2、新建CustomConfigProperties文件映射customconfig.properties内容
```java
package com.taotaojava.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2019\2\24 0024.
 */

@Component
@PropertySource("classpath:customconfig.properties")
@ConfigurationProperties(prefix = "my")
public class CustomConfigProperties {

    private boolean test;

    private String environment;
    //省略 get/set
}
```
2.3、在ApplicationPropertiesController 添加如下
```java
@GetMapping("/getCustomConfigProperties")
   public CustomConfigProperties getCustomConfigProperties(){

       log.info("===============");
       log.info(customConfigProperties.toString());
       log.info("================");
       return  customConfigProperties;
   }
```
2.4、打开浏览器，输入如下地址： http://localhost:8080/properties/getCustomConfigProperties，观察控制台
```java
2019-02-24 22:16:09.462  INFO 4672 --- [nio-8080-exec-2] c.t.C.ApplicationPropertiesController    : ===============
2019-02-24 22:16:09.463  INFO 4672 --- [nio-8080-exec-2] c.t.C.ApplicationPropertiesController    : CustomConfigProperties{test=true, environment='test'}
2019-02-24 22:16:09.463  INFO 4672 --- [nio-8080-exec-2] c.t.C.ApplicationPropertiesController    : ================
```
## 三、多环境化配置

开发中会有多个环境（如：开发，测试，生产等），不同的环境数据库配置等信息都不一样，spring.profile.active 能实现多环境配置切换，它的格式为 application-{profile}.properties，application 为前缀不能改，{profile} 可自定义。

3.1、创建 application-dev.properties、application-test.properties、application-prod.properties，内容分别如下
```java
# application-dev.properties
server.servlet.context-path=/dev
```

```java
# application-test.properties
server.servlet.context-path=/test
```

```java
# application-prod.properties
server.servlet.context-path=/prod
```

3.2、在 application.properties 配置文件中写入 spring.profiles.active=dev，在次访问http://localhost:8080/properties/getCustomConfigProperties报404错误，因为设置了它的context-path=/dev ；所以新访问路径：http://localhost:8080/dev/properties/getCustomConfigProperties，仔细请看控制台中 Tomcat started on port(s): 8080 (http) with context path '/dev'
```java
2019-02-24 22:32:10.228  INFO 6476 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path '/dev'
2019-02-24 22:32:10.233  INFO 6476 --- [           main] c.taotaojava.SpringBootStudyApplication  : Started SpringBootStudyApplication in 4.328 seconds (JVM running for 4.949)
2019-02-24 22:32:46.179  INFO 6476 --- [nio-8080-exec-4] o.a.c.c.C.[Tomcat].[localhost].[/dev]    : Initializing Spring DispatcherServlet 'dispatcherServlet'
2019-02-24 22:32:46.180  INFO 6476 --- [nio-8080-exec-4] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2019-02-24 22:32:46.190  INFO 6476 --- [nio-8080-exec-4] o.s.web.servlet.DispatcherServlet        : Completed initialization in 10 ms
2019-02-24 22:32:46.223  INFO 6476 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : ===============
2019-02-24 22:32:46.223  INFO 6476 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : CustomConfigProperties{test=true, environment='test'}
2019-02-24 22:32:46.224  INFO 6476 --- [nio-8080-exec-4] c.t.C.ApplicationPropertiesController    : ================
```

## 四、外部命令引导
4.1、场景：对已经开发完成的代码打包发布，在测试环境测试通过了，即可发布上生产，方案一：修改application.properties的配置重新打包，方案二：直接命令参数配置，方案二操作更方便。默认情况下，SpringApplication 会将命令行选项参数（即：–property，如–server.port=9000）添加到Environment，命令行属性始终优先于其他属性源。

4.2、如何测试？
- 项目右键->run maven ->package,target 目录生成spring-boot-study-0.0.1-SNAPSHOT.jar

```java
[INFO] --- maven-jar-plugin:3.1.1:jar (default-jar) @ spring-boot-study ---
[INFO] Building jar: D:\giteeWorkspace\springbootstudy\target\spring-boot-study-0.0.1-SNAPSHOT.jar
[INFO]
[INFO] --- spring-boot-maven-plugin:2.1.3.RELEASE:repackage (repackage) @ spring-boot-study ---
```
- 打开 cmd 进入D:\giteeWorkspace\springbootstudy\target\，执行：

```java
D:\giteeWorkspace\springbootstudy\target>java -jar spring-boot-study-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

```
- 输入测试地址：http://localhost:8080/prod/properties/getCustomConfigProperties

```java
PoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2019-02-24 23:12:31.617  INFO 5276 --- [           main] o.s.b.w.embedded.tomcat
.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path '/p
rod'
2019-02-24 23:12:31.628  INFO 5276 --- [           main] c.taotaojava.SpringBoot
StudyApplication  : Started SpringBootStudyApplication in 4.713 seconds (JVM run
ning for 5.52)
2019-02-24 23:13:23.122  INFO 5276 --- [nio-8080-exec-3] o.a.c.c.C.[Tomcat].[loc
alhost].[/prod]   : Initializing Spring DispatcherServlet 'dispatcherServlet'
2019-02-24 23:13:23.122  INFO 5276 --- [nio-8080-exec-3] o.s.web.servlet.Dispatc
herServlet        : Initializing Servlet 'dispatcherServlet'
2019-02-24 23:13:23.132  INFO 5276 --- [nio-8080-exec-3] o.s.web.servlet.Dispatc
herServlet        : Completed initialization in 9 ms
2019-02-24 23:13:23.180  INFO 5276 --- [nio-8080-exec-3] c.t.C.ApplicationProper
tiesController    : ===============
2019-02-24 23:13:23.180  INFO 5276 --- [nio-8080-exec-3] c.t.C.ApplicationProper
tiesController    : CustomConfigProperties{test=true, environment='test'}
2019-02-24 23:13:23.181  INFO 5276 --- [nio-8080-exec-3] c.t.C.ApplicationProper
tiesController    : ================
```
