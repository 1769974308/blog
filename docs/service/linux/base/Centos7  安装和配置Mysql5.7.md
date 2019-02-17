# Centos7  安装和配置Mysql5.7
[TOC]

### 第一步：获取mysql yum源

进入mysql官网获取rpm包下载地址：[https://dev.mysql.com/downloads/repo/yum/](https://dev.mysql.com/downloads/repo/yum/)

复制链接地址 [https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm](https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm)

这个就是yum仓库的rpm包，其实也是一个下载地址

###  第二步：下载和安装mysql源

下载mysql源安装包

[root@localhost ~]# wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm

-bash: wget: 未找到命令

我们先安装下wget 

yum -y install wget



安装mysql源

yum -y localinstall mysql57-community-release-el7-11.noarch.rpm

### 第三步：在线安装mysql

yum -y install mysql-community-server

### 第四步：启动mysql服务

systemctl start mysqld

### 第五步：设置开机启动

[root@localhost ~]# systemctl enable mysqld

[root@localhost ~]# systemctl daemon-reload

### 第六步：修改root本地登录密码

在/var/log/mysqld.log文件中给root生成了一个临时的默认密码

[root@localhost ~]# vi /var/log/mysqld.log

A temporary  password is generated for root@localhost:这里就是临时的默认密码

[root@localhost ~]#  mysql -u root -p

Enter password: 

输入临时密码，进入mysql

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '修改为自己的密码';

（注：mysql5.7默认密码策略要求密码必须是大小写字母、数字、特殊字符的组合）

### 第七步：设置允许远程登录

Mysql默认不允许远程登录，我们需要设置下，并且防火墙开放3306端口；

mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '刚修改数据库密码' WITH GRANT OPTION;

开放3306商品

[root@localhost ~]# firewall-cmd --zone=public --add-port=3306/tcp --permanent

success

[root@localhost ~]# firewall-cmd --reload

success

### 第八步:配置默认编码为utf8

修改/etc/my.cnf配置文件，在[mysqld]下添加编码配置，如下所示：

[mysqld]

character_set_server=utf8

init_connect='SET NAMES utf8'



编辑保存完 重启mysql服务；

[root@localhost ~]# systemctl restart mysqld



查看下编码：

mysql> show variables like '%character%';





