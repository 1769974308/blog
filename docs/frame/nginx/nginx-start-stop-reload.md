# Nginx启动、停止、重启
## 一、启动

启动代码格式: nginx安装目录地址 -c nginx配置文件地址
```
[root@localhost sbin]# ./nginx -c /usr/local/nginx/conf/nginx.conf
```
## 二、停止

从容停止
1、查看进程号
```
# ps -ef|grep nginx
```
2、杀死进程
```
# kill -QUIT 2029（2029是进程号）
```
快速停止
1、查看进程号
```
# ps -ef|grep nginx
```
2、杀死进程
```
# kill -TERM 2133
```
或
```
# kill -INT 2133
```
强制停止
```
# pkill -9 nginx
```
## 三、重启

1、验证配置文件是否正确

进入nginx安装目录sbin下，输入命令
```
#./nginx -t
```
显示nginx.conf test is successful 说明配置文件正确

2、重启Nginx服务

进入nginx可执行目录sbin下，输入命令
```
#./nginx -s reload
或
# kill -HUP 进程号
```
