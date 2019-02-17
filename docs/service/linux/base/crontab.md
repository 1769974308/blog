## centos 安装crontab及使用
[TOC]
### 一、安装
```
#yum install vixie-cron
#yum install crontabs
```
>说明
>vixie-cron软件包是cron的主程序
>crontabs软件包是用来安装、卸装、或列举用来驱动cron守护进程的表格的程序

### 二、corn的相关服务
1.查看crontab服务状态:service crond status
2.手动启动：service crond start
3.关闭服务：service crond stop
4.重启服务：service crond restart
5.重新载入配置：service crond reload
6.加入开机自动启动：chkconfig --level 35 crond on 

### 三、全局配置文件
crontab在/etc目录下面存在cron.hourly、corn.daily、cron.weekly、corn.monthly、cron.d五个目录及crontab、cron.deny二个文件
>说明
>cron.daily  每天执行一次的job
>cron.weekly  每个星期执行一次的job
>cron.monthly 每月执行一次的job 
>cron.hourly 每个小时执行一次的job
>cron.d 系统自动定期需要做的任务
>crontab 设置定时任务执行文件
>cron.deny 用于控制用户是否可以使用crontab的功能

### 四、用户配置文件
每个用户都有自己的配置文件 ，通过crontab -e 就可以编辑，保存后放置于/var/spool/cron目录中。文件名以用户名命令

### 五、crontab文件格式
```
#crontab -e
*/5 * * * * /home/test.sh
执行# more /etc/crontab 可以看到 * * * * * command
```

>第一个 * ：表示分（0-59）
>第二个* :表示时（0-24｝
>第三个*:表示时天（1-31）
>第四个*:表示月（1-12）
>第五个*：表示星期（0-7）
>command :表示命令
>crontab(选项)（参数）
>选项
>-e:编辑该用户的计时器设置
>-l:列出该用户的计时器设置
>-r:删除该用户的计时器设置
>-u<用户名称>:指定要设定计时器的用户名称

#### 特殊字符
1.星号（*）：代表所有可能的值
2.逗号（,）:可以隔开的值指定一个列表范围
3.中杠（-）：可以用整数之间的中杠表示一个整数范围
4.正斜线（/）:可以用正斜线指定时间的时隔频率










