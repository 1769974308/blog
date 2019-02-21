# 搭建spring-boot项目
## 一、环境
jdk1.8、maven、intellij idea

## 二、创建项目
### 1、file->new->project


### 2、选择spring initializr
spring  initializr是官方的构建插件，也可以选择maven

### 3、填写项目基本信息
group:组织id,一般分为多个段 com.taotaojava
artifact：唯一标识符，项目名称

### 4、选择包
spring initializr提供很多选项，当前只选择web-web

## 三、目录结构
```
- src
    -main
        -java
            -package
                #主函数，启动类，运行它如果运行了 Tomcat、Jetty、Undertow 等容器
                -SpringbootApplication
        -resouces
            #存放静态资源 js/css/images 等
            - statics
            #存放 html 模板文件
            - templates
            #主要的配置文件，SpringBoot启动时候会自动加载application.yml/application.properties
            - application.yml
    #测试文件存放目录
    -test
 # pom.xml 文件是Maven构建的基础，里面包含了我们所依赖JAR和Plugin的信息
- pom
```
## 四、pom.xml 依赖
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.taotaojava</groupId>
	<artifactId>spring-boot-study</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-study</name>
	<description>spring-boot-study project for Spring Boot</description>


	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.3.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
		<skipTests>true</skipTests>
	</properties>

	<dependencies>
		<!-- 默认内嵌Tomcat 容器-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<!-- 编译插件 -->
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>

```
## 五、运行
主函数->run /debug
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.3.RELEASE)

2019-02-19 23:41:01.435  INFO 9884 --- [           main] c.taotaojava.SpringBootStudyApplication  : Starting SpringBootStudyApplication on 56085K6EEVYTC6Y with PID 9884 (D:\giteeWorkspace\springbootstudy\target\classes started by Administrator in D:\giteeWorkspace\springbootstudy)
2019-02-19 23:41:01.444  INFO 9884 --- [           main] c.taotaojava.SpringBootStudyApplication  : No active profile set, falling back to default profiles: default
2019-02-19 23:41:04.550  INFO 9884 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2019-02-19 23:41:04.607  INFO 9884 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2019-02-19 23:41:04.608  INFO 9884 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.16]
2019-02-19 23:41:04.626  INFO 9884 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [C:\Program Files\Java\jdk1.8.0_201\bin;C:\Windows\Sun\Java\bin;C:\Windows\system32;C:\Windows;C:\Program Files (x86)\Common Files\Oracle\Java\javapath;d:\oracle\product\10.2.0\client_1\bin;D:\oracle\product\10.2.0\db_1\bin;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Program Files\Java\jdk1.7.0_17\bin;C:\Program Files\Java\jdk1.7.0_17\jre\bin;D:\java\mysql-5.6.24-winx64\bin;D:\java\TortoiseGit\install\bin;D:\java\apache-maven-3.3.9\bin;D:\java\SVNSerivec\Server\bin;D:\java\Git\Git\cmd;.]
2019-02-19 23:41:04.817  INFO 9884 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2019-02-19 23:41:04.817  INFO 9884 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 2925 ms
2019-02-19 23:41:05.303  INFO 9884 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2019-02-19 23:41:05.754  INFO 9884 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2019-02-19 23:41:05.759  INFO 9884 --- [           main] c.taotaojava.SpringBootStudyApplication  : Started SpringBootStudyApplication in 5.712 seconds (JVM running for 6.71)


```
