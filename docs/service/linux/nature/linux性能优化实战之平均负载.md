# linux性能优化实战之平均负载
###  基础篇----平均负载

当发现系统变慢时，通常做的第一件事，就是执行top或者uptime命令，了解系统的负载情况。

````
[root@newbie ~]# uptime
 06:02:05 up 18 min,  1 user,  load average: 0.00, 0.00, 0.00
 # 当前时间 系统运行时间 正在登录用户数          1分钟  5分钟  15分钟平均负载
[root@newbie ~]#
````

#### 1、什么是平均负载

平均负载就是单位时间内，系统处于可运行状态和不可中断状态的平均进程数，也就是平均活跃进程数，它和CPU使用率并没有直接关系。

####  2、什么又是可运行状态进程和不可中断状态进程

可运行状态的进程，就是指正在使用CPU或者正在等待CPU的进程，也就是ps命令看到的，处于R状态（runnig或者runnable）的进程

不可中断状态的进程，就是处于内核态关键流程中的进程，并不可打断的，常见的是等待硬件设备的I/O响应，也就是ps命令看到的D状态（uninterruptible sleep）的进程

比如，当一个进程向磁盘读写数据时，为了保证数据的一致性，在得到磁盘回复前，它是不能被其他的进程或者中断打断的。这时的进程就是处于不可中断状态。不可中断状态实际上是系统对进程和硬件设备的一种保护机制。

如果当平均负载为2时：

* 在2个CPU的系统上，则所有的CPU刚好被完全占用
* 在4个CPU的系统上，则有50%的CPU处于空闲的
* 在1个CPU的系统上，则有一半的进程竞争不到CPU


> 怎么知道系统有几个CPU？通过top命令或者从文件/proc/cpuinfo中读取
>
> top命令
>
> ````
> [root@newbie ~]# top
> top - 06:39:43 up 55 min,  1 user,  load average: 0.00, 0.00, 0.00
> Tasks: 122 total,   1 running, 121 sleeping,   0 stopped,   0 zombie
> Cpu(s):  0.0%us,  0.0%sy,  0.0%ni,100.0%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
> Mem:   1012548k total,   535376k used,   477172k free,    85688k buffers
> Swap:  2031608k total,        0k used,  2031608k free,   242168k cached
>
> PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                                                   
> 2584 root      20   0 98168 3972 3004 S  0.3  0.4   0:00.18 sshd                                              
> ````
>
> 第一行：前面已经介绍了
>
> 第二行：Tasks-任务（进程）
>
> 第三行：cup状态
>
> 第四行：内存状态
>
> 第五行：swap交换分区
>
> 第七行：各进程（任务）的状态监控
>
> 文件/proc/cpuinfo中读取
>
> ````
> # 查看物理CPU个数
> [root@izwz9hpp9gmzo5x5e06iqjz ~]# cat /proc/cpuinfo |grep "physical id"|sort|uniq|wc -l
> 1
> ````
>
> ````
> # 查看逻辑CPU的个数
> [root@izwz9hpp9gmzo5x5e06iqjz ~]# cat /proc/cpuinfo |grep "processor"|wc -l
> 1
> ````
>

#### 3、平均负载与CPU使用率区别

平均负载是指单位时间内，处于可运行状态和不可中断状态的进程数，所以不仅包括了正在使用CPU的进程，还包括等待CPU和等待I/O的进程。

CPUW使用率，是单位时间内CPU繁忙情况的统计，和平均负载并不一定完全对应。

* CPU密集型进程，使用大量CPU会导致平均负载升高，此时二者一致
* I/O密集型进程，等待I/O也会导致平均负载升高，但CPU使用率不一定很高
* 大量等待cpu的进程调度也会导致平均负载升高，cup使用率也会比较高


#### 4、平均负载案例实战

环境准备：linux系统

安装：stress和sysstat包  

stress: linux系统压力测试工具，用作异常进程模拟平均负载升高的场景

sysstat: linux性能工具，用来监控和分析系统的性能，会用这包的二个命令mpstat、pidstat

* mpstat是一个常用的多核CPU性能分析工具，用来实时查看每个CPU的性能指标，以及所有CPU的平均指标
* pidstat是一个常用的进程性能分析工具，用来实时查看进程的cpu,内存，IO以及上下文切换等性能指标


````
# 阿里云centos7网络安装stress
[root@izwz9hpp9gmzo5x5e06iqjz ~]# yum install -y epel-release
[root@izwz9hpp9gmzo5x5e06iqjz ~]# yum install -y stress
````

````
# 阿里云centos7安装sysstat 系统自带的版本旧，建议源码安装
[root@izwz9hpp9gmzo5x5e06iqjz ~]# yum install sysstat
````

环境准备好，默认以root用户来实战，如是普通用户 （执行su  -） 切换到root用户

每个场景需要开三个终端，登录到同一台linux机器中

####  场景一：CPU密集性进程

第一个终端运行stree命令，模拟一个CPU使用率100%的场景：

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# stress --cpu 1 --timeout 600
stress: info: [29577] dispatching hogs: 1 cpu, 0 io, 0 vm, 0 hdd
````

第二个终端运行uptime查看平均负载的变化情况

````
# -d 参数表示高亮显示变化的区域
$ watch -d uptime
.... load average：1.00  1.16 0.65
````

第三个终端运行mpstat查看CPU使用率的变化情况

````
# -P ALL 表示监控所有CPU,后面数字5表示间隔5秒后输出一组数据
[root@izwz9hpp9gmzo5x5e06iqjz ~]# mpstat  -P ALL 5
Linux 3.10.0-693.2.2.el7.x86_64 (izwz9hpp9gmzo5x5e06iqjz) 	11/25/2018 	_x86_64_	(1 CPU)

08:19:09 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
08:19:14 AM  all    0.60    0.00    0.20    0.00    0.00    0.00    0.00    0.00    0.00   99.20
08:19:14 AM    0    0.60    0.00    0.20    0.00    0.00    0.00    0.00    0.00    0.00   99.20

08:19:14 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
08:19:19 AM  all    0.40    0.00    0.20    0.00    0.00    0.00    0.00    0.00    0.00   99.40
08:19:19 AM    0    0.40    0.00    0.20    0.00    0.00    0.00    0.00    0.00    0.00   99.40
````

从终端二中可以看到，1分钟的平均负载会慢慢增加到1.00，从终端三可以看到，有一个CPU的使用率为100%

但是它的iowait是0，说明平均负载的升高正是由于CPU使用率为100%。

到底是哪个进程导致了CP使用率为100%？使用pidstat查询

````
#间隔5秒后输出一组数据
[root@izwz9hpp9gmzo5x5e06iqjz ~]# pidstat -u 5 1
Linux 3.10.0-693.2.2.el7.x86_64 (izwz9hpp9gmzo5x5e06iqjz) 	11/25/2018 	_x86_64_	(1 CPU)

08:31:06 AM   UID       PID    %usr %system  %guest    %CPU   CPU  Command
08:31:11 AM     0      1136    0.23    0.00    0.00    0.23     0  AliYunDun
08:31:11 AM     0      1187    0.91    0.00    0.00    0.91     0  java
08:31:11 AM     0     30058  100.00    0.00    0.00  100.00     0  stress
````

可以明显看到，stress进程的CPU使用率为100%

场景二:IO密集型进程

第一个终端这次模拟I/O压力，不停地执行sync

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# stress -i 1 --timeout 600
stress: info: [30079] dispatching hogs: 0 cpu, 1 io, 0 vm, 0 hdd
````

第二个终端运行uptime查看平均负载的变化情况

````
$watch -d uptime
......,load average：1.06，0.58，0.37
````

第三个终端运行mpstat查看cpu使用率的变化情况

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# mpstat  -P ALL 5 1
Linux 3.10.0-693.2.2.el7.x86_64 (izwz9hpp9gmzo5x5e06iqjz) 	11/25/2018 	_x86_64_	(1 CPU)

08:43:04 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
08:43:09 AM  all    0.61    0.00   66.67   32.73    0.00    0.00    0.00    0.00    0.00    0.00
08:43:09 AM    0    0.61    0.00   66.67   32.73    0.00    0.00    0.00    0.00    0.00    0.00
````

1分钟的平均负载会慢慢增加到1.06，其中一个CPU的系统CPU使用率升高到66.67，而iowait为32.73，说明平均负载的升高是由于iowait的升高

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# pidstat -u 5 1
Linux 3.10.0-693.2.2.el7.x86_64 (izwz9hpp9gmzo5x5e06iqjz) 	11/25/2018 	_x86_64_	(1 CPU)

08:45:10 AM   UID       PID    %usr %system  %guest    %CPU   CPU  Command
08:45:15 AM     0         6    0.00    0.20    0.00    0.20     0  kworker/u2:0
08:45:15 AM     0       250    0.00    1.01    0.00    1.01     0  kworker/0:1H
08:45:15 AM     0       326    0.00    0.20    0.00    0.20     0  java
08:45:15 AM     0      1106    0.20    0.00    0.00    0.20     0  wrapper
08:45:15 AM     0      1136    0.20    0.00    0.00    0.20     0  AliYunDun
08:45:15 AM     0      1187    0.40    0.00    0.00    0.40     0  java
08:45:15 AM     0     30261    0.00   68.95    0.00   68.95     0  stress
08:45:15 AM     0     31137    0.00    0.20    0.00    0.20     0  java
````

还是stress进程导致的

场景三、大量进程的场景

当系统中运行进程超出CPU运行能力时，就会出现等待CPU的进程

还是使用stress模拟8个进程

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# stress -c 8 --timeout 1200
stress: info: [15267] dispatching hogs: 8 cpu, 0 io, 0 vm, 0 hdd
````

由于系统只有一个CPU,8个进程系统的CPU处于严重过载状态

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# uptime
 13:06:46 up 15 days, 16:21,  4 users,  load average: 7.75, 3.24, 1.25
[root@izwz9hpp9gmzo5x5e06iqjz ~]#
````

接着运行pidstat查看进程情况

````
[root@izwz9hpp9gmzo5x5e06iqjz ~]# pidstat -u 5 1
Linux 3.10.0-693.2.2.el7.x86_64 (izwz9hpp9gmzo5x5e06iqjz) 	11/25/18 	_x86_64_	(1 CPU)

14:58:05      UID       PID    %usr %system  %guest   %wait    %CPU   CPU  Command
14:58:10        0      1106    0.20    0.00    0.00    7.19    0.20     0  wrapper
14:58:10        0      1136    0.20    0.20    0.00    7.19    0.40     0  AliYunDun
14:58:10        0      1187    0.20    0.00    0.00    0.00    0.20     0  java
14:58:10        0     19927   12.18    0.00    0.00   88.62   12.18     0  stress
14:58:10        0     19928   11.98    0.00    0.00   87.23   11.98     0  stress
14:58:10        0     19929   12.38    0.00    0.00   88.62   12.38     0  stress
14:58:10        0     19930   14.77    0.00    0.00   76.25   14.77     0  stress
14:58:10        0     19931   12.18    0.00    0.00   88.02   12.18     0  stress
14:58:10        0     19932   11.98    0.00    0.00   87.82   11.98     0  stress
14:58:10        0     19933   12.18    0.00    0.00   87.23   12.18     0  stress
14:58:10        0     19934   11.98    0.00    0.00   87.82   11.98     0  stress
````

8 个进程在争抢1个CPU，每个进程等待CPU的时间（%wait列）高达75%，超出CPU计算能力的进程，最终导致CPU过载。
