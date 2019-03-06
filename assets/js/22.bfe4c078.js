(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{182:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"nginx安装手册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装手册","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx安装手册")]),s._v(" "),t("h2",{attrs:{id:"_1-nginx安装环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx安装环境","aria-hidden":"true"}},[s._v("#")]),s._v(" 1 nginx安装环境")]),s._v(" "),t("p",[s._v("nginx是C语言开发，建议在linux上运行，本教程使用Centos6.5作为安装环境。")]),s._v(" "),t("ul",[t("li",[s._v("gcc")])]),s._v(" "),t("p",[s._v("安装nginx需要先将官网下载的源码进行编译，编译依赖gcc环境，如果没有gcc环境，需要安装gcc：yum install gcc-c++")]),s._v(" "),t("ul",[t("li",[s._v("PCRE")])]),s._v(" "),t("p",[s._v("PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。")]),s._v(" "),t("p",[s._v("yum install -y pcre pcre-devel")]),s._v(" "),t("p",[s._v("注：pcre-devel是使用pcre开发的一个二次开发库。nginx也需要此库。")]),s._v(" "),t("ul",[t("li",[s._v("zlib")])]),s._v(" "),t("p",[s._v("zlib库提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。")]),s._v(" "),t("p",[s._v("yum install -y zlib zlib-devel")]),s._v(" "),t("ul",[t("li",[s._v("openssl")])]),s._v(" "),t("p",[s._v("OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用。")]),s._v(" "),t("p",[s._v("nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。")]),s._v(" "),t("p",[s._v("yum install -y openssl openssl-devel")]),s._v(" "),t("h2",{attrs:{id:"_2-编译安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 2 编译安装")]),s._v(" "),t("p",[s._v("将nginx-1.8.0.tar.gz拷贝至linux服务器。")]),s._v(" "),t("p",[s._v("解压：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tar -zxvf nginx-1.8.0.tar.gz\n\ncd nginx-1.8.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("1、 configure")]),s._v(" "),t("p",[s._v("./configure --help查询详细参数（参考本教程附录部分：nginx编译参数）")]),s._v(" "),t("p",[s._v("参数设置如下：进入nginx解压包执行")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("/configure \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("access"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("with"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("http_gzip_static_module \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("client \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proxy \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fastcgi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fastcgi \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uwsgi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("uwsgi \\\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scgi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("scgi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("注意：上边将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录")]),s._v(" "),t("h2",{attrs:{id:"_2、-编译安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、-编译安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、 编译安装")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("make\n\nmake install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("安装成功查看安装目录 ：")]),s._v(" "),t("h2",{attrs:{id:"_3-启动nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 3 启动nginx")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /usr/local/nginx/sbin/\n\n./nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查询nginx进程：")]),s._v(" "),t("p",[s._v("15098是nginx主进程的进程id，15099是nginx工作进程的进程id")]),s._v(" "),t("p",[s._v("注意：执行./nginx启动nginx，这里可以-c指定加载的nginx配置文件，如下：")]),s._v(" "),t("p",[s._v("./nginx -c /usr/local/nginx/conf/nginx.conf")]),s._v(" "),t("p",[s._v("如果不指定-c，nginx在启动时默认加载conf/nginx.conf文件，此文件的地址也可以在编译安装nginx时指定./configure的参数（--conf-path= 指向配置文件（nginx.conf））")]),s._v(" "),t("h2",{attrs:{id:"_4-停止nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-停止nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 4 停止nginx")]),s._v(" "),t("p",[s._v("方式1，快速停止：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /usr/local/nginx/sbin\n\n./nginx -s stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。")]),s._v(" "),t("p",[s._v("方式2，完整停止(建议使用)：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /usr/local/nginx/sbin\n\n./nginx -s quit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此方式停止步骤是待nginx进程处理任务完毕进行停止。")]),s._v(" "),t("h2",{attrs:{id:"_5-重启nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-重启nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 5 重启nginx")]),s._v(" "),t("p",[s._v("方式1，先停止再启动（建议使用）：")]),s._v(" "),t("p",[s._v("对nginx进行重启相当于先停止nginx再启动nginx，即先执行停止命令再执行启动命令。")]),s._v(" "),t("p",[s._v("如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./nginx -s quit\n\n./nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("方式2，重新加载配置文件：")]),s._v(" "),t("p",[s._v("当nginx的配置文件nginx.conf修改后，要想让配置生效需要重启nginx，使用-s reload不用先停止nginx再启动nginx即可将配置信息在nginx中生效，如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./nginx -s reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 6 测试")]),s._v(" "),t("p",[s._v("nginx安装成功，启动nginx，即可访问虚拟机上的nginx：")])])}],!1,null,null,null);a.default=r.exports}}]);