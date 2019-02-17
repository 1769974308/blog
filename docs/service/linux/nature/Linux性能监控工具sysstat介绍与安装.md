# Linux性能监控工具sysstat介绍与安装

### 一、简介

sysstat提供了linux性能监控的工具集，包括sar,sadf,mpstat,iostat,pidstat等。

* iostat--提供CPU统计，存储IO统计（磁盘设备，分区及网络文件系统）

* mpstat--提供单个或组合CPU相关统计

* pidstat--提供linux进程级别统计：I/O   CPU，内存等

* sar--收集、报告。保存系统活动信息：CPU,内存，磁盘，中断，网络接口等

* sadc--系统活动数据收集器，作为sar后端使用

* sa1--收集系统活动日常数据，并二进制格式存储，它作为sadc的工具的前端，可以通过cron来调用

* sa2--生成系统每日活动报告，也作为sadc的工具的前端，可以通过cron来调用

* sadf--可以以csv,xml格式等显示sar收集的性能数据，方便将系统数据导入到数据库中，或导入到excel中生成图表

* nfsiostat-sysstat--提供NFS I/O统计

* cifsiostat--提供CIFS统计

  官网地址：[http://sebastien.godard.pagesperso-orange.fr/](http://sebastien.godard.pagesperso-orange.fr/)

### 二、安装

1、网络安装

linux系统中大多数据都 有sysstat安装包(版本比较旧)，以centost系统为例

````
[root@centos ~]# yum install sysstat
````

2、源码安装

在上面提供的官网地址下载源码包

1、检查版本：

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# sar -V
sysstat version 10.1.5
(C) Sebastien Godard (sysstat <at> orange.fr
````

2、安装前需确认系统是否已安装gcc

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# gcc -v
...........
Thread model: posix
gcc version 4.8.5 20150623 (Red Hat 4.8.5-28) (GCC)
````

3、删除原有老版本sysstat

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]#  rpm -e --nodeps sysstat
````

4、解压sysstat源码

````
[root@izwz9hpp9gmzo5x5e06iqjz local]# cd sysstat/
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]# xz -d sysstat-12.0.2.tar.xz
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]# ll
total 3332
-rw-r--r-- 1 root root 3409920 Nov 25 13:54 sysstat-12.0.2.tar
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]# tar -xvf sysstat-12.0.2.tar
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]# ll
total 3336
drwxr-xr-x 11 1000 1000    4096 Oct 13 15:32 sysstat-12.0.2
-rw-r--r--  1 root root 3409920 Nov 25 13:54 sysstat-12.0.2.tar
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]#
````

5、安装前环境监测

````
[root@izwz9hpp9gmzo5x5e06iqjz sysstat]# cd sysstat-12.0.2
[root@izwz9hpp9gmzo5x5e06iqjz sysstat-12.0.2]# ./configure
.
Check programs:
.
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
.......
````

6、编译安装sysstat源码

````
[root@izwz9hpp9gmzo5x5e06iqjz sysstat-12.0.2]# ./configure --prefix=/usr
[root@izwz9hpp9gmzo5x5e06iqjz sysstat-12.0.2]# make
[root@izwz9hpp9gmzo5x5e06iqjz sysstat-12.0.2]# make install
````

7、查看版本信息

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# sar -V
sysstat version 12.0.2
(C) Sebastien Godard (sysstat <at> orange.fr)
````
