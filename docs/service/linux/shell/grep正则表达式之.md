# 正则表达式之grep
### grep高级参数
[TOC]

````
grep [-A] [-B] [--color=auto] '搜索字符串' filename
参数
-A 后面可加数字，为after的意思，除了列出该行外，后续的n行也列出
-B 后面可加数据，为befer的意思，除了列出该行外，前面的n行也列出
````
#### 一、查找特定字符串
````
1、查找字符串
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n -A4 -B5 --color=auto 'log' yum.conf
1-[main]
2-cachedir=/var/cache/yum/$basearch/$releasever
3-keepcache=0
4-debuglevel=2
5:logfile=/var/log/yum.log
6-exactarch=1
7-obsoletes=1
8-gpgcheck=1
9-plugins=1
[root@izwz9hpp9gmzo5x5e06iqjz home]#
2、反向选择（除了特殊字符以外的列）
grep -vn '搜索字符串' filename
3、忽略大小写
grep -in '搜索字符串' filename
````

####  二、利用中括号[]查找集合字符

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n 't[ae]st' regular_express.txt
8:I can't finish the test.
9:Oh! The soup taste good.
[]中无论有多少个字符，只代表某“一个”字符
````

#### 三、行首与行尾字符^$

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n '^the' regular_express.txt
12:the symbol '*' is represented as start.

[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n '^[^a-zA-Z]' regular_express.txt
1:"Open Source" is a good mechanism to develop programs.
21:# I am VBird
注：^在[]内表示反向选择，在[]外表示行首

[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n '\.$' regular_express.txt
1:"Open Source" is a good mechanism to develop programs.
2:apple is my favorite food.
3:Football game is not use feet only.
4:this dress doesn't fit me.
注：选择行尾为小数点（.）,但是进行了转义了，（.）小数点具有特殊意义
````

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -v '^$' yum.conf  | grep -v '^#'
注：-v '^$' 代表不要空白行，-v '^#'代表不要开头是#r的行
````

####  四、任意一个字符（.）与重复字符（*）

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n 'g..d' regular_express.txt
1:"Open Source" is a good mechanism to develop programs.
9:Oh! The soup taste good.
16:The world <Happy> is the same with "glad".
````

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n 'ooo*' regular_express.txt  #至少两个o以上的字符
1:"Open Source" is a good mechanism to develop programs.
2:apple is my favorite food.
3:Football game is not use feet only.
9:Oh! The soup taste good.
18:google is the best tools for search keyword.
19:goooooogle yes!
注：* 代表的是重复0个或多个前面的RE字符 'o*'表示是具有空字符或一个o以上的字符
````

#### 五、限定连续RE字符范围｛｝

````
[root@izwz9hpp9gmzo5x5e06iqjz home]# grep -n 'o\{2\}' regular_express.txt
1:"Open Source" is a good mechanism to develop programs.
2:apple is my favorite food.
3:Football game is not use feet only.
9:Oh! The soup taste good.
注：｛与｝符号在shell是有特殊意义的需要\转义
````

#### 六、基础正则表达式字符

| ER字符      | 意义                |
| --------- | ----------------- |
| ^word     | 查找字符串（word）在行首    |
| word$     | 查找的字符中（word）在行尾   |
| .         | 代表一定有一个任意字符的字符    |
|          | 转义字符              |
| *         | 重复0个到无穷多个的前一个字符   |
| [list]    | 从字符集合的RE字符里面选取字符  |
| [n1-n2]   | 从字符集合的RE字符里选取字符范围 |
| [^list]   | 从字符集合的RE字符里面反选字符  |
| \\{n,m\\} | 连续n到m个的前一个RE字符，   |

<Valine></Valine>
