(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(s,e,t){"use strict";t.r(e);var i=t(0),r=Object(i.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),t("p",[s._v("#requirepass foobared去掉注释，foobared修改登录密码，保存配置文件，")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),t("p",[s._v("1)、阿里云服务器添加安全规则，开放6379端口")]),s._v(" "),t("p",[s._v("2)、配置/etc/redis/6379.conf(redis服务启动使用开机自启动使用该配置文件)")]),s._v(" "),s._m(8),t("p",[s._v("默认只允许本地访问,注释后可以允许其他访问")]),s._v(" "),s._m(9),t("p",[s._v("将保护模式 yes 改成 no")]),s._v(" "),t("Valine")],1)},[function(){var s=this.$createElement,e=this._self._c||s;return e("h1",{attrs:{id:"redis设置密码登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis设置密码登录","aria-hidden":"true"}},[this._v("#")]),this._v(" redis设置密码登录")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"一、因设置redis开机自启动需修改-etc-redis-6379-conf配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、因设置redis开机自启动需修改-etc-redis-6379-conf配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、因设置redis开机自启动需修改/etc/redis/6379.conf配置文件")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[root@izwz9278r1bks1a5wiot7kz redis]# pwd\n/etc/redis\n[root@izwz9278r1bks1a5wiot7kz redis]# vim 6379.conf\n\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"二、重启服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、重启服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、重启服务")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[root@izwz9278r1bks1a5wiot7kz redis]# service redisd stop\n[root@izwz9278r1bks1a5wiot7kz redis]# service redisd start\n\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"三、测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、测试")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@izwz9278r1bks1a5wiot7kz redis]# redis-cli\n127.0.0.1:6379> set key 1234\n(error) NOAUTH Authentication required.\n127.0.0.1:6379> auth 123456\nOK\n127.0.0.1:6379> set key 123456\nOK\n127.0.0.1:6379> get key\n"123456"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"四、redis可视化客户端连接阿里云部署redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、redis可视化客户端连接阿里云部署redis","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、redis可视化客户端连接阿里云部署redis")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES\n# JUST COMMENT THE FOLLOWING LINE.\n# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n# bind 127.0.0.1\n\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br"),e("span",{staticClass:"line-number"},[this._v("5")]),e("br")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# are explicitly listed using the "bind" directive.\nprotected-mode no\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])}],!1,null,null,null);e.default=r.exports}}]);