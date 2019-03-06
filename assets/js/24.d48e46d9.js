(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{180:function(n,s,t){"use strict";t.r(s);var a=t(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"nginx下配置虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx下配置虚拟主机","aria-hidden":"true"}},[n._v("#")]),n._v(" Nginx下配置虚拟主机")]),n._v(" "),t("p",[n._v("nginx下，一个server标签就是一个虚拟主机")]),n._v(" "),t("p",[n._v("基于域名的虚拟主机，通过域名来区分虚拟主机--应用：外部网站\n基于端口的虚拟主机，通过端口来区分虚拟主机--应用：公司内部网站，外部网站的管理后台\n基于IP的虚拟主机\n注：nginx指定配置文件启动")]),n._v(" "),t("p",[n._v("/usr/local/nginx/sbin/nginx  -c  /usr/local/nginx/conf/nginx.conf")]),n._v(" "),t("h2",{attrs:{id:"一、基于域名虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基于域名虚拟主机","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、基于域名虚拟主机")]),n._v(" "),t("p",[n._v("Linux操作系统允许添加IP别名，IP别名就是在一块物理网卡上绑定多个lP地址。这样就能够在使用单一网卡的同一个服务器上运行多个基于IP的虚拟主机。")]),n._v(" "),t("p",[n._v("iii.\t需求")]),n._v(" "),t("p",[n._v("一台nginx服务器绑定两个ip：192.168.199.134、192.168.199.135")]),n._v(" "),t("p",[n._v("访问不同的ip请求不同的html目录，即：")]),n._v(" "),t("p",[n._v("访问http://192.168.199.134将访问“html134”目录下的html网页")]),n._v(" "),t("p",[n._v("访问http://192.168.199.135将访问“html135”目录下的html网页")]),n._v(" "),t("p",[n._v("iv.\t准备环境")]),n._v(" "),t("p",[n._v("创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx。")]),n._v(" "),t("p",[n._v("v.\thtml目录创建")]),n._v(" "),t("p",[n._v("将原来nginx的html目录拷贝两个目录 “html134”和“html135”，")]),n._v(" "),t("p",[n._v("为了方便测试需要修改每个目录下的index.html内容使之个性化。")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cd /usr/local/nginx\n\ncp -r html html134\n\ncp -r html html135\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br")])]),t("p",[n._v("vii.\t配置虚拟主机")]),n._v(" "),t("p",[n._v("修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("#user  nobody;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n    #配置虚拟主机192.168.199.134\n    server {\n\t#监听的ip和端口，配置192.168.199.134:80\n        listen       80;\n\t#虚拟主机名称这里配置ip地址\n        server_name  192.168.199.1343;\n\t#所有的请求都以/开始，所有的请求都可以匹配此location\n        location / {\n\t    #使用root指令指定虚拟主机目录即网页存放目录\n\t    #比如访问http://ip/test.html将找到/usr/local/html134/test.html\n\t    #比如访问http://ip/item/test.html将找到/usr/local/html134/item/test.html\n\n            root   /usr/local/nginx/html134;\n\t    #指定欢迎页面，按从左到右顺序查找\n            index  index.html index.htm;\n        }\n\n    }\n    #配置虚拟主机192.168.199.135\n    server {\n        listen       80;\n        server_name  192.168.199.135;\n\n        location / {\n            root   /usr/local/nginx/html135;\n            index  index.html index.htm;\n        }\n\n    }\n\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br")])]),t("p",[n._v("viii.\t测试")]),n._v(" "),t("p",[n._v("启动nginx，观察端口监听状态：")]),n._v(" "),t("p",[n._v("#netstat -an|grep 80")]),n._v(" "),t("p",[n._v("访问http://192.168.199.134")]),n._v(" "),t("p",[n._v("访问http://192.168.199.135")]),n._v(" "),t("h2",{attrs:{id:"二、基于端口的虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基于端口的虚拟主机","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、基于端口的虚拟主机")]),n._v(" "),t("p",[n._v("ix.\t需求")]),n._v(" "),t("p",[n._v("nginx对外提供80和8080两个端口监听服务。")]),n._v(" "),t("p",[n._v("请求80端口则请求html80目录下的html")]),n._v(" "),t("p",[n._v("请求8080端口则请求html8080目录下的html")]),n._v(" "),t("p",[n._v("x.\t准备环境")]),n._v(" "),t("p",[n._v("创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx")]),n._v(" "),t("p",[n._v("xi.\thtml目录创建")]),n._v(" "),t("p",[n._v("将原来nginx的html目录拷贝两个目录 “html80”和“html8080”，")]),n._v(" "),t("p",[n._v("为了方便测试需要修改每个目录下的index.html内容使之个性化。 参考基于ip或域名的虚拟主机。")]),n._v(" "),t("p",[n._v("xii.\t配置虚拟主机")]),n._v(" "),t("p",[n._v("修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("#user  nobody;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n    #配置虚拟主机\n    server {\n\t#监听的ip和端口，配置80\n        listen       80;\n\t#虚拟主机名称这里配置ip地址\n        server_name  192.168.199.134;\n\t#所有的请求都以/开始，所有的请求都可以匹配此location\n        location / {\n\t    #使用root指令指定虚拟主机目录即网页存放目录\n\t    #比如访问http://ip/test.html将找到/usr/local/html80/test.html\n\t    #比如访问http://ip/item/test.html将找到/usr/local/html80/item/test.html\n\n            root   /usr/local/nginx/html80;\n\t    #指定欢迎页面，按从左到右顺序查找\n            index  index.html index.htm;\n        }\n\n    }\n    #配置虚拟主机\n    server {\n        listen       8080;\n        server_name  192.168.199.134;\n\n        location / {\n            root   /usr/local/nginx/html8080;\n            index  index.html index.htm;\n        }\n\n    }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br")])]),t("p",[n._v("xiii.\t测试")]),n._v(" "),t("p",[n._v("访问http://192.168.101.3")]),n._v(" "),t("p",[n._v("访问http://192.168.101.3:8080")]),n._v(" "),t("p",[n._v("三、基于域名的虚拟主机配置")]),n._v(" "),t("p",[n._v("xiv.\t需求")]),n._v(" "),t("p",[n._v("两个域名指向同一台nginx服务器，用户访问不同的域名显示不同的网页内容。")]),n._v(" "),t("p",[n._v("两个域名是aaa.test.com和bbb.test.com")]),n._v(" "),t("p",[n._v("nginx服务器使用虚拟机192.168.199.134")]),n._v(" "),t("p",[n._v("xv.\t准备环境")]),n._v(" "),t("p",[n._v("创建192.168.199.134虚拟机，保证本地电脑和虚拟网络通畅。 在192.168.199.134上安装nginx。")]),n._v(" "),t("p",[n._v("通过host文件指定aaa.test.com和bbb.test.com对应192.168.199.134虚拟机： 修改window的hosts文件：（C:\\Windows\\System32\\drivers\\etc） 添加如下")]),n._v(" "),t("p",[n._v("192.168.199.134  aaa.test.com\n192.168.199.134  bbb.test.com\nxvi.\thtml目录创建")]),n._v(" "),t("p",[n._v("在192.168.199.134上创建/usr/local/aaa_html，此目录为aaa.test.com域名访问的目录 在192.168.199.134上创建/usr/local/bbb_html，此目录为bbb.test.com域名访问的目录")]),n._v(" "),t("p",[n._v("目录中的内容使用nginx自带的html文件，将/usr/local/nginx/html中的内容拷贝分别拷贝到上边两个目录中，")]),n._v(" "),t("p",[n._v("将aaa_html目录中的index.html内容改为：“Welcome to aaa nginx!”")]),n._v(" "),t("p",[n._v("将bbb_html目录中的index.html内容改为“Welcome to bbb nginx!”")]),n._v(" "),t("p",[n._v("xvii.\t配置虚拟主机")]),n._v(" "),t("p",[n._v("修改/usr/local/nginx/conf/nginx.conf文件，添加两个虚拟主机，如下：")]),n._v(" "),t("p",[n._v("#配置虚拟主机aaa.test.com")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("server {\n\t\t#监听的ip和端口，配置本机ip和端口\n        listen 192.168.199.134:80;\n\t\t#虚拟主机名称是aaa.test.com，请求域名aaa.test.com的url将由此server配置解析\n        server_name aaa.test.com;\n\t\t#所有的请求都以/开始，所有的请求都可以匹配此location\n        location / {\n\t\t#使用root指令指定虚拟主机目录即网页存放目录\n\t\t#比如访问http://ip/test.html将找到/usr/local/aaa_html/test.html\n\t\t#比如访问http://ip/item/test.html将找到/usr/local/aaa_html/item/test.html\n                root /usr/local/aaa_html;\n\t\t\t    #指定欢迎页面，按从左到右顺序查找\n                index index.html index.htm;\n        }\n    }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br")])]),t("p",[n._v("#配置虚拟主机bbb.test.com")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("server {\n        listen 192.168.199.134:80;\n        server_name bbb.test.com;\n        location / {\n                root /usr/local/bbb_html;\n                index index.html index.htm;\n        }\n    }\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br")])]),t("p",[n._v("xviii.\t测试")]),n._v(" "),t("p",[n._v("访问aaa.test.com、bbb.test.com")])])}],!1,null,null,null);s.default=e.exports}}]);