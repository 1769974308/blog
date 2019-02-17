[TOC]
# shell变量
#### 一、什么是变量
变量就是用一个简单的“字眼”来代替另一个比较复杂或者是容易变动的数据

#### 二、变量的设置规则
1、变量与变量内容以一个等号“=”来连接（name=taotao）
2、等号二边不能直接接空格符（错误 name = taotao  或者 name=hello world）
3、变量名由字母和数字组成，数字不能开头
4、变量内容若有空格符可以使用双引号（""）或者单引号（''）将变量内容结合
5、双引号内若有特殊符号($)保有原本特性

````
[root@izwz9278r1bks1a5wiot7kz /]# var1="lang is $LANG"
[root@izwz9278r1bks1a5wiot7kz /]# echo $var1
lang is en_US.UTF-8
[root@izwz9278r1bks1a5wiot7kz /]#
````

6、单引号内的特殊符号则为一般字符输出

````
[root@izwz9278r1bks1a5wiot7kz /]# var2='lang is $LANG'
[root@izwz9278r1bks1a5wiot7kz /]# echo $var2
lang is $LANG
[root@izwz9278r1bks1a5wiot7kz /]#
````

7、可以使用转义字符（\）将特殊字符变成一般字符

8、一串命令中，需要通过其他命令提供信息时，可以使用反单引号（\`命令\`）或者$(命令)

````
[root@izwz9278r1bks1a5wiot7kz /]# cd /lib/modules/`uname -r`/kernel
[root@izwz9278r1bks1a5wiot7kz kernel]# pwd
/lib/modules/3.10.0-693.2.2.el7.x86_64/kernel
[root@izwz9278r1bks1a5wiot7kz kernel]# cd /lib/modules/$(uname -r)/kernel
[root@izwz9278r1bks1a5wiot7kz kernel]# pwd
/lib/modules/3.10.0-693.2.2.el7.x86_64/kernel
[root@izwz9278r1bks1a5wiot7kz kernel]#
````

9、为变量增加内容，则可用$变量或者\${变量}累加

````
PATH=$PATH:/home/bin
PATH="$PATH":/home/bin
PATH=${PATH}:/home/bin
````

####  三、环境变量的功能

1、查看默认环境变量

使用命令：env 、export、set(还包含自定义变量)

`````
[root@izwz9278r1bks1a5wiot7kz kernel]# env
XDG_SESSION_ID=724
HOSTNAME=izwz9278r1bks1a5wiot7kz
TERM=xterm
SHELL=/bin/bash
HISTSIZE=1000
SSH_CLIENT=58.250.253.230 49289 22
OLDPWD=/lib/modules/3.10.0-693.2.2.el7.x86_64/kernel
SSH_TTY=/dev/pts/0
USER=root
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:
MAIL=/var/spool/mail/root
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
PWD=/lib/modules/3.10.0-693.2.2.el7.x86_64/kernel
LANG=en_US.UTF-8
HISTCONTROL=ignoredups
SHLVL=1
HOME=/root
LOGNAME=root
SSH_CONNECTION=58.250.253.230 49289 172.18.88.57 22
LESSOPEN=||/usr/bin/lesspipe.sh %s
XDG_RUNTIME_DIR=/run/user/0
_=/usr/bin/env
[root@izwz9278r1bks1a5wiot7kz kernel]#

`````

2、$()关于本shell的PID

3、？（关于上个执行命令的回传码，如果执行成功回传值为0）

#### 四、变量键盘读取、数组与声明：read   array  declare

`````
语法：read [-pt] variable
-p:后面接提示符
-t:等待时间（单位秒）

[root@izwz9278r1bks1a5wiot7kz shell]# read hello
hello wro^H^H
[root@izwz9278r1bks1a5wiot7kz shell]# echo $hello
hello wro
[root@izwz9278r1bks1a5wiot7kz shell]# read -p "请输入：" -t 30 name
请输入：1234
[root@izwz9278r1bks1a5wiot7kz shell]# read -p "请输入：" -t 30 name
请输入：123456
`````

````
语法：declare [-aixr] variable
-a：将变量声明为数组（array）类型
-i:将变量声明为整数（integer)类型
-x:将变量变为环境变量
-r:将变量设置为readonly类型
````

````
数组变量类型
var[1]="var1"
var[2]="var2"
var[3]="var3"
````

#### 五、命令别名与历史命令

1、查询系统已有别名alias

````
[root@izwz9278r1bks1a5wiot7kz shell]# alias
alias cp='cp -i'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias vi='vim'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
[root@izwz9278r1bks1a5wiot7kz shell]#
````

2、设置别名永久生效

````
[root@izwz9278r1bks1a5wiot7kz shell]# cat /root/.bashrc
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias vi='vim'
# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi
[root@izwz9278r1bks1a5wiot7kz shell]# vim /root/.bashrc #编辑.bashrc添加自定义别名
[root@izwz9278r1bks1a5wiot7kz shell]# source /root/.bashrc #初始化文件生效
````

3、历史命令

````
history [n]
history [-c]
history [-raw]
n:数字 列出最后n条命令行
-c:清空历史命令
-r:将历史文件的内容读到当前shell的history中
-a:新添历史命令新加入历史文件中，默认写入~/.bash_history

!number：执行第几条命令
!command:搜索命令串开头为command并执行
!!：执行上一个命令
[root@izwz9278r1bks1a5wiot7kz local]# history
    1  history  10
    2  cd ~
    3  ll
    4  ll -a
    5  cat .bash_logout
    6  cd /usr/local/
    7  cd /home/study/
    8  cd -
    9  history
[root@izwz9278r1bks1a5wiot7kz local]# !4
ll -a
total 52
drwxr-xr-x. 13 root root 4096 Oct 15  2017 .
drwxr-xr-x. 13 root root 4096 Oct 15  2017 ..
drwxr-xr-x   6 root root 4096 Nov 17 15:23 aegis
drwxr-xr-x.  2 root root 4096 Nov  5  2016 bin
.........
````

#### 六、路径与命令查找顺序

`````
[root@izwz9278r1bks1a5wiot7kz local]# type -a ls
ls is aliased to `ls --color=auto'
ls is /usr/bin/ls
[root@izwz9278r1bks1a5wiot7kz local]#
`````

#### 七、bash的登录与欢迎  

修改/etc/issue    , /etc/motd

####  八、bash的环境配置文件

系统的整体环境设置 /etc/profile  注:最好不要修改此文件，你会后悔的

主文件下的~/.bash_profile文件是个人配置文件，

通常设置写入上面的文件后，得注销再登录后设置才会生效，下面可以解决文件生效

````
[root@izwz9278r1bks1a5wiot7kz ~]# ls -a
.  ..  .bash_history  .bash_logout  .bash_profile  .bashrc  .cache  .cshrc  .pip  .pydistutils.cfg  .ssh  .tcshrc  .viminfo
[root@izwz9278r1bks1a5wiot7kz ~]# source .bash_profile  #将配置文件的内容读进目前的shell环境
````

其他相关配置文件

/etc/man.config

~/.bash_history

~/.bash_logout   当注销bash后系统帮我做完什么操作后才离开，可以将备份或者重要的工作写这个文件中

#### 九、通配符与特殊符号

通配符

| 符号   | 意义                                   |
| ---- | ------------------------------------ |
| *    | 代表0个到无穷多个任意字符                        |
| ?    | 代表一定有一个任意字符                          |
| []   | 代表一定有一个在中括号内的字符                      |
| [-]  | 代表在编码顺序内的所有字符                        |
| [^]  | 表示原向选择\[^abc] 代表一定有一个字符，是非a,b,c的其他字符 |

特殊符号

| 符号   | 意义                         |
| ---- | -------------------------- |
| #    | 注释，视为说明，后面的数据不执行           |
| \    | 转义符号，将特殊字符或通配符还原一般字符       |
| \|   | 管道，分隔二个管道命令的界定             |
| ;    | 连续命令执行分隔符                  |
| ~    | 用户的主文件                     |
| $    | 变量前导符                      |
| &    | 作业控制                       |
| ！    | 逻辑运算 “非”                   |
| /    | 目录符号，路径分隔的符号               |
| >,>> | 数据流重定向，输出导向，分号是替换与累加       |
| <,<< | 数据流重定向，输入导向                |
| ’'   | 单引号，不具有变量置换的功能             |
| ""   | 双引号，具有变量置换的功能              |
| ``   | 反单引号，再个``中间的先执行的命令，也可以用$() |
|      |                            |
|      |                            |

标准输入（stdin）:代码0

标准输出（stdout）：代码1

标准错误输出：(stderr):代码2

#### 十、命令执行的判断依据  (； &&  |)

1、cmd;cmd     不考虑命令相关性的连续命令执行

2、$?(命令回传码)  与&& 或|

思考：

command1&&command2||command3     

command1||command2&&command3     执行的结果？

#### 十一、管道命令（pipe）

管道命令必须要能够接收来自前一个命令的数据 成为standard input继续处理才行

#### 十二、选取命令 cut    grep

就是将一段数据经过分析后，取出所想要的，或者是经由分析关键字，取得所要的一行，选取信息通常是针对行来分析。

#### 十三、排序命令 sort   wc   uniq

sort   进行排序

wc   统计字，行，字符

uniq  重复的数据仅列出一个显示

#### 十四、双向重定向 tee

tee [-a]  file  保存一个份到文件内并将同样的数据继续送到屏幕去

#### 十五、切割命令  split

split [-bl]   file PREFIX

-b  后面可接切割成的文件大小，单位 b,k,m

-l   以行数切割


<Valine></Valine>
