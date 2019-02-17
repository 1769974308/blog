# redis设置密码登录
## 一、因设置redis开机自启动需修改/etc/redis/6379.conf配置文件

```
[root@izwz9278r1bks1a5wiot7kz redis]# pwd
/etc/redis
[root@izwz9278r1bks1a5wiot7kz redis]# vim 6379.conf

```
\#requirepass foobared去掉注释，foobared修改登录密码，保存配置文件，

## 二、重启服务
```
[root@izwz9278r1bks1a5wiot7kz redis]# service redisd stop
[root@izwz9278r1bks1a5wiot7kz redis]# service redisd start

```
## 三、测试

```
[root@izwz9278r1bks1a5wiot7kz redis]# redis-cli
127.0.0.1:6379> set key 1234
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth 123456
OK
127.0.0.1:6379> set key 123456
OK
127.0.0.1:6379> get key
"123456"
```

## 四、redis可视化客户端连接阿里云部署redis
1\)、阿里云服务器添加安全规则，开放6379端口

2\)、配置/etc/redis/6379.conf(redis服务启动使用开机自启动使用该配置文件)
```
# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES
# JUST COMMENT THE FOLLOWING LINE.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# bind 127.0.0.1

```
默认只允许本地访问,注释后可以允许其他访问
```
# are explicitly listed using the "bind" directive.
protected-mode no
```
将保护模式 yes 改成 no

<Valine></Valine>
