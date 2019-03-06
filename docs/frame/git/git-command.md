# git 命令
## 初始设置：
设置姓名和邮箱地址
$git config --global user.name "firstname lastname"
$git config --user.email "1769974308@qq.com"

SLMGR.vbs -rearm  display:none;

## 分支操作
1、显示分支
$git branch
2、创建分支
$ git checkout -b feature-A
或者
$ git branch feature-A
或者
$ git checkout feature-A
3、切换分支
$git checkout master
4、合并分支
首先切换到 master 分支
$ git merge --no-ff feature-A
5、以图表形式查看分支
git log --graph


## 更改提交操作
1、回溯历史版本（完全恢复至该时间点的状态）
$ git reset --hard fd0cbf0d4a25f747230694d95cac1be72d33441d
2、查看当前仓库的操作日志
$git reflog


## 推送至远程仓库
1、添加远程仓库
$ git remote add origin git@github.com:github-book/git-tutorial.git
2、推送至远程仓库（推送至 master 分支）
$ git push -u origin master

## 从远程仓库获取
1、git clone--获取远程仓库
$ git clone git@github.com:github-book/git-tutorial.git
2、git?pull——获取最新的远程仓库分支
