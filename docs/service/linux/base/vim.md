[TOC]
#### 一、vi模式

分为三种模式:：一般模式、编辑模式、命令模式

一般模式下可以进行删除、复制、粘贴等操作

一般模式下进入编辑模式需按 i ,l , o, O, a, A , r, R任何一个字母

一般模式下进入命令模式下需按  :、/、?中任何一个字母，命令模式下可以查找数据的操作，读取、保存、大量替换字符、离开vi、显示行号等

注：一般模式与编辑模式及命令模式可相互切换，编辑模式与命令模式之间不可以相互切换

#### 二、快捷键说明

一般模式下可用快捷键，光标移动、复制粘贴、查找替换

| 操作       | 移动光标说明                         |
| :------- | :----------------------------- |
| h        | 光标向左移动一个字符                     |
| l        | 光标向右移动一个字符                     |
| j        | 光标向下移动一个字符                     |
| k        | 光标向上移动一个字符                     |
| 30j      | 向下移动30行                        |
| ctrl+f   | 屏幕向下移动一页，相当于page down          |
| ctrl+b   | 屏幕向上移动一页，相当开page up            |
| 0或home   | 移动到当行最前面的字符处                   |
| $或end    | 移动到当行最后面的字符处                   |
| G        | 移动到这个文件的最后一行                   |
| nG       | 移动到这个文件指定的行（n:数字)，/set nu设置显示行 |
| gg       | 移动文件第一行，相当于1G                  |
| N[enter] | n为数字，光标向下移动n行                  |

查找与替换

| /word                | 向下查找word字符串                      |
| :------------------- | :------------------------------- |
| ?word                | 向上查找word字符串                      |
| n                    | 重复前一个查找的操作 ，也就是重复地找到一些关键字        |
| N                    | 与n相反                             |
| :n1,n2/word1/word2/g | n1,n2为数字，在第n1与n2行，将worl2替换worl1  |
| :1,$s/word1/word2g   | 从第一行到最后一行，将worl2替换worl1          |
| :1,$s/word1/word2g   | 从第一行到最后一行，将worl2替换worl1 ，并确认是否替换 |

删除、复制、粘贴

| x,X    | 在一行字当中，x为向后删除一个字符             |
| :----- | :---------------------------- |
| dd     | 删除光标所在的那一整行                   |
| ndd    | n为数字，删除光标所在的向下n行              |
| yy     | 复制光标所在的那一行                    |
| nyy    | n为数字，复制光标所在的向下n行              |
| p,P    | p为将已复制的数据在光标下一行粘贴，P则为粘贴在光标上一行 |
| u      | 复原前一个操作                       |
| ctrl+r | 重复上一个操作                       |
