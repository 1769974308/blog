# Centos 7 安装redis-5.0.3
## 一、安装redis
### 1、下载redis安装包
```
[root@izwz9278r1bks1a5wiot7kz local]# wget http://download.redis.io/releases/redis-5.0.3.tar.gz
```
### 2、解压压缩包
```
[root@izwz9278r1bks1a5wiot7kz local]# tar -zxvf redis-5.0.3.tar.gz
```
### 3、yum 安装gcc 依赖
```
[root@izwz9278r1bks1a5wiot7kz local]# yum install gcc
```
遇到选择，输入y回车

### 4、进入redis解压目录
```
[root@izwz9278r1bks1a5wiot7kz local]# cd redis-5.0.3/
```
### 5、编译安装
```
[root@izwz9278r1bks1a5wiot7kz redis-5.0.3]# make MALLOC=libc
```
```
[root@izwz9278r1bks1a5wiot7kz redis-5.0.3]# cd src && make install
```
## 二、启动redis
### 1、直接启动redis
切换项目到redis src目录
```
  [root@izwz9278r1bks1a5wiot7kz src]# ./redis-server
```
ctrl + c 关闭关闭窗口不再提供服务
### 2、后台进程方式启动redis
1\)、修改redis.conf配置文件
```
[root@izwz9278r1bks1a5wiot7kz redis-5.0.3]# vim redis.conf
```
修改 daemonize no --> daemonize yes

2\)、指定配置文件启动
```
[root@izwz9278r1bks1a5wiot7kz src]# ./redis-server  /usr/local/redis-5.0.3/redis.conf
18188:C 14 Feb 2019 15:30:10.961 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
18188:C 14 Feb 2019 15:30:10.962 # Redis version=5.0.3, bits=64, commit=00000000, modified=0, pid=18188, just started
18188:C 14 Feb 2019 15:30:10.962 # Configuration loaded

```
3\)、关闭redis进程
```
[root@izwz9278r1bks1a5wiot7kz src]# ps -aux | grep redis
root     18181  0.0  0.0  14072  1236 pts/0    S+   15:19   0:00 redis-cli
root     18189  0.0  0.1 144012  2036 ?        Ssl  15:30   0:00 ./redis-server 127.0.0.1:6379
root     18194  0.0  0.0 112708   980 pts/3    R+   15:33   0:00 grep --color=auto redis
[root@izwz9278r1bks1a5wiot7kz src]# kill -9 18189

```

### 3、开机自启动
1\)、在/etc目录下新建redis目录
```
[root@izwz9278r1bks1a5wiot7kz etc]# mkdir redis

```

2\)、将/usr/local/redis-5.0.3/redis.conf 文件复制一份到/etc/redis目录下，并命名为6379.conf　
```
[root@izwz9278r1bks1a5wiot7kz etc]# cp /usr/local/redis-5.0.3/redis.conf  /etc/redis/6379.conf

```
3\)、将redis的启动脚本复制一份放到/etc/init.d目录下
```
[root@izwz9278r1bks1a5wiot7kz etc]# cp  /usr/local/redis-5.0.3/utils/redis_init_script /etc/init.d/redisd
```
4\)、设置开机自动启动
切换到/etc/init.d目录下编辑redisd文件，在第一行加入如下两行注释，保存退出
```
#!/bin/sh
# chkconfig:   2345 90 10
# description:  Redis is a persistent key-value database

```
> redis服务必须在运行级2，3，4，5下被启动或关闭，启动的优先级是90，关闭的优先级是10

执行开机自启命令
```
[root@izwz9278r1bks1a5wiot7kz init.d]# chkconfig redisd on
```
服务的形式启动和关闭redis

启动：
```
[root@izwz9278r1bks1a5wiot7kz init.d]# service redisd start　
```
关闭：
```
[root@izwz9278r1bks1a5wiot7kz init.d]# service redisd stop
```
<Valine></Valine>
