# Nginx下配置虚拟主机
nginx下，一个server标签就是一个虚拟主机

基于域名的虚拟主机，通过域名来区分虚拟主机--应用：外部网站
基于端口的虚拟主机，通过端口来区分虚拟主机--应用：公司内部网站，外部网站的管理后台
基于IP的虚拟主机
注：nginx指定配置文件启动

/usr/local/nginx/sbin/nginx  -c  /usr/local/nginx/conf/nginx.conf
## 一、基于域名虚拟主机

Linux操作系统允许添加IP别名，IP别名就是在一块物理网卡上绑定多个lP地址。这样就能够在使用单一网卡的同一个服务器上运行多个基于IP的虚拟主机。

iii.	需求

一台nginx服务器绑定两个ip：192.168.199.134、192.168.199.135

访问不同的ip请求不同的html目录，即：

访问http://192.168.199.134将访问“html134”目录下的html网页

访问http://192.168.199.135将访问“html135”目录下的html网页

iv.	准备环境

创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx。

v.	html目录创建

将原来nginx的html目录拷贝两个目录 “html134”和“html135”，

为了方便测试需要修改每个目录下的index.html内容使之个性化。
```
cd /usr/local/nginx

cp -r html html134

cp -r html html135
```
vii.	配置虚拟主机

修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：
```
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;
    #配置虚拟主机192.168.199.134
    server {
	#监听的ip和端口，配置192.168.199.134:80
        listen       80;
	#虚拟主机名称这里配置ip地址
        server_name  192.168.199.1343;
	#所有的请求都以/开始，所有的请求都可以匹配此location
        location / {
	    #使用root指令指定虚拟主机目录即网页存放目录
	    #比如访问http://ip/test.html将找到/usr/local/html134/test.html
	    #比如访问http://ip/item/test.html将找到/usr/local/html134/item/test.html

            root   /usr/local/nginx/html134;
	    #指定欢迎页面，按从左到右顺序查找
            index  index.html index.htm;
        }

    }
    #配置虚拟主机192.168.199.135
    server {
        listen       80;
        server_name  192.168.199.135;

        location / {
            root   /usr/local/nginx/html135;
            index  index.html index.htm;
        }

    }

}
```
viii.	测试

启动nginx，观察端口监听状态：

#netstat -an|grep 80

访问http://192.168.199.134

访问http://192.168.199.135

## 二、基于端口的虚拟主机

ix.	需求

nginx对外提供80和8080两个端口监听服务。

请求80端口则请求html80目录下的html

请求8080端口则请求html8080目录下的html

x.	准备环境

创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx

xi.	html目录创建

将原来nginx的html目录拷贝两个目录 “html80”和“html8080”，

为了方便测试需要修改每个目录下的index.html内容使之个性化。 参考基于ip或域名的虚拟主机。

xii.	配置虚拟主机

修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：
```
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;
    #配置虚拟主机
    server {
	#监听的ip和端口，配置80
        listen       80;
	#虚拟主机名称这里配置ip地址
        server_name  192.168.199.134;
	#所有的请求都以/开始，所有的请求都可以匹配此location
        location / {
	    #使用root指令指定虚拟主机目录即网页存放目录
	    #比如访问http://ip/test.html将找到/usr/local/html80/test.html
	    #比如访问http://ip/item/test.html将找到/usr/local/html80/item/test.html

            root   /usr/local/nginx/html80;
	    #指定欢迎页面，按从左到右顺序查找
            index  index.html index.htm;
        }

    }
    #配置虚拟主机
    server {
        listen       8080;
        server_name  192.168.199.134;

        location / {
            root   /usr/local/nginx/html8080;
            index  index.html index.htm;
        }

    }
```
xiii.	测试

访问http://192.168.101.3

访问http://192.168.101.3:8080

三、基于域名的虚拟主机配置

xiv.	需求

两个域名指向同一台nginx服务器，用户访问不同的域名显示不同的网页内容。

两个域名是aaa.test.com和bbb.test.com

nginx服务器使用虚拟机192.168.199.134

xv.	准备环境

创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx。

通过host文件指定aaa.test.com和bbb.test.com对应192.168.199.134虚拟机： 修改window的hosts文件：（C:\Windows\System32\drivers\etc） 添加如下

192.168.199.134  aaa.test.com
192.168.199.134  bbb.test.com
xvi.	html目录创建

在192.168.199.134上创建/usr/local/aaa_html，此目录为aaa.test.com域名访问的目录 在192.168.199.134上创建/usr/local/bbb_html，此目录为bbb.test.com域名访问的目录

目录中的内容使用nginx自带的html文件，将/usr/local/nginx/html中的内容拷贝分别拷贝到上边两个目录中，

将aaa_html目录中的index.html内容改为：“Welcome to aaa nginx!”

将bbb_html目录中的index.html内容改为“Welcome to bbb nginx!”

xvii.	配置虚拟主机

修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：

#配置虚拟主机aaa.test.com
```
server {
		#监听的ip和端口，配置本机ip和端口
        listen 192.168.199.134:80;
		#虚拟主机名称是aaa.test.com，请求域名aaa.test.com的url将由此server配置解析
        server_name aaa.test.com;
		#所有的请求都以/开始，所有的请求都可以匹配此location
        location / {
		#使用root指令指定虚拟主机目录即网页存放目录
		#比如访问http://ip/test.html将找到/usr/local/aaa_html/test.html
		#比如访问http://ip/item/test.html将找到/usr/local/aaa_html/item/test.html
                root /usr/local/aaa_html;
			    #指定欢迎页面，按从左到右顺序查找
                index index.html index.htm;
        }
    }
```
#配置虚拟主机bbb.test.com
```
server {
        listen 192.168.199.134:80;
        server_name bbb.test.com;
        location / {
                root /usr/local/bbb_html;
                index index.html index.htm;
        }
    }

```
xviii.	测试

访问aaa.test.com、bbb.test.com
