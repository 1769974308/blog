(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{208:function(t,e,l){"use strict";l.r(e);var a=l(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[t._m(0),t._v(" "),l("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),l("p",[t._v("分为三种模式:：一般模式、编辑模式、命令模式")]),t._v(" "),l("p",[t._v("一般模式下可以进行删除、复制、粘贴等操作")]),t._v(" "),l("p",[t._v("一般模式下进入编辑模式需按 i ,l , o, O, a, A , r, R任何一个字母")]),t._v(" "),l("p",[t._v("一般模式下进入命令模式下需按  :、/、?中任何一个字母，命令模式下可以查找数据的操作，读取、保存、大量替换字符、离开vi、显示行号等")]),t._v(" "),l("p",[t._v("注：一般模式与编辑模式及命令模式可相互切换，编辑模式与命令模式之间不可以相互切换")]),t._v(" "),t._m(2),t._v(" "),l("p",[t._v("一般模式下可用快捷键，光标移动、复制粘贴、查找替换")]),t._v(" "),t._m(3),t._v(" "),l("p",[t._v("查找与替换")]),t._v(" "),t._m(4),t._v(" "),l("p",[t._v("删除、复制、粘贴")]),t._v(" "),t._m(5),t._v(" "),l("Valine")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim","aria-hidden":"true"}},[this._v("#")]),this._v(" vim")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"一、vi模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、vi模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、vi模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"二、快捷键说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、快捷键说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、快捷键说明")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("操作")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("移动光标说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("h")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("光标向左移动一个字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("光标向右移动一个字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("j")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("光标向下移动一个字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("k")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("光标向上移动一个字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("30j")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("向下移动30行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ctrl+f")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("屏幕向下移动一页，相当于page down")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ctrl+b")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("屏幕向上移动一页，相当开page up")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("0或home")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动到当行最前面的字符处")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("$或end")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动到当行最后面的字符处")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("G")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动到这个文件的最后一行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("nG")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动到这个文件指定的行（n:数字)，/set nu设置显示行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("gg")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动文件第一行，相当于1G")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("N[enter]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n为数字，光标向下移动n行")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("/word")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("向下查找word字符串")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("?word")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("向上查找word字符串")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("n")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重复前一个查找的操作 ，也就是重复地找到一些关键字")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("与n相反")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v(":n1,n2/word1/word2/g")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n1,n2为数字，在第n1与n2行，将worl2替换worl1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v(":1,$s/word1/word2g")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从第一行到最后一行，将worl2替换worl1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v(":1,$s/word1/word2g")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从第一行到最后一行，将worl2替换worl1 ，并确认是否替换")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("x,X")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("在一行字当中，x为向后删除一个字符")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("dd")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("删除光标所在的那一整行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ndd")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n为数字，删除光标所在的向下n行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("yy")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("复制光标所在的那一行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("nyy")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("n为数字，复制光标所在的向下n行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("p,P")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("p为将已复制的数据在光标下一行粘贴，P则为粘贴在光标上一行")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("u")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("复原前一个操作")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ctrl+r")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重复上一个操作")])])])])}],!1,null,null,null);e.default=i.exports}}]);