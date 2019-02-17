
# sed工具
sed是一个管道命令，可以分析standard,input;sed也可以将数据进行替换，删除，新增，选取特定行等功能

````
sed [-nefr] [动作]
-n :经过sed特殊处理的那一行或操作才会被列出来
-e : 直接在命令模式上进行sed动作编辑

````

## 一、以行为单位的新增/删除功能

````
在第二行后加上add a row字样
[root@izwz9hpp9gmzo5x5e06iqjz home]# nl regular_express.txt |sed '2a  add a row'
     1	"Open Source" is a good mechanism to develop programs.
     2	apple is my favorite food.
add a row
     3	Football game is not use feet only.

````

````
删除2-5行
[root@izwz9hpp9gmzo5x5e06iqjz home]# nl regular_express.txt  |sed 2,5d
     1	"Open Source" is a good mechanism to develop programs.
     6	GNU is free air not free beer.
     7	Her hair is very beauty.

````

## 二、以行为单位的替换与显示功能

````
第2-5行的内容替换为no 2-5 row
[root@izwz9hpp9gmzo5x5e06iqjz home]# nl regular_express.txt | sed '2,5c no 2-5 row'
     1	"Open Source" is a good mechanism to develop programs.
no 2-5 row
     6	GNU is free air not free beer.
打印2-5行内容
[root@izwz9hpp9gmzo5x5e06iqjz home]# nl regular_express.txt |sed -n '2,5p'
     2	apple is my favorite food.
     3	Football game is not use feet only.
     4	this dress doesn't fit me.
     5	However, this dress is about $ 3183 dollars.
````

sed  's/要被替换的字符串/新的字符串/g'

## 三、直接修改文件内容（危险操作）

sed  -i   's/要被替换的字符串/新的字符串/g'
