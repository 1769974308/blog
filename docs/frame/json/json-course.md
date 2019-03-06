# JSON教程
## 一、简介

JSON : javaScript对象表示法（JavaScript Object Notation）

JSON 是存储和交换文本信息的语法。类似 XML。

JSON 比 XML 更小、更快，更易解析

## 二、JSON - 转换为 JavaScript 对象

JavaScript 程序能够使用内建的 eval() 函数，用 JSON 数据来生成原生的 JavaScript 对象
```java
$.ajax({
		url : requestUrl,
		method : 'post',
		async : false,
		contentType : 'application/json;charset=UTF-8',
		dataType : 'json',
		processData : false,
		success : function(data, textStatus, jqXHR) {
			var ret = eval(data);
			if(ret.success){
				glcache.dictTypes = ret.data.dictTypes;
				glcache.dictItems = ret.data.dictItems;
			}else{
				console.log("Sync dict from cache has error.");
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			var result = JSON.parse(XMLHttpRequest.responseText);
			console.log("Sync dict from cache has error :"+result);
		}
	});
  ```
## 三、JSON 语法规则

1、 数据在名称/值对中

2、数据由逗号分隔

3、花括号保存对象

4、 方括号保存数组

## 四、JSON 名称/值对

JSON 数据的书写格式是：名称/值对。

名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：

"firstName" : "John"
## 五、JSON 值

数字（整数或浮点数）
字符串（在双引号中）
逻辑值（true 或 false）
数组（在方括号中）
对象（在花括号中）
null
## 六、JSON 对象

JSON 对象在花括号中书写：

对象可以包含多个名称/值对：

{ "firstName":"John" , "lastName":"Doe" }
## 七、JSON 数组

JSON 数组在方括号中书写：

数组可包含多个对象：
```
{
"employees": [
{ "firstName":"John" , "lastName":"Doe" },
{ "firstName":"Anna" , "lastName":"Smith" },
{ "firstName":"Peter" , "lastName":"Jones" }
]
}
```
## 八、JSON 文件

JSON 文件的文件类型是 ".json"
JSON 文本的 MIME 类型是 "application/json"
九、JSON 解析器

提示：eval() 函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题; 使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只能识别 JSON 文本，而不会编译脚本
```
var txt = '{"employees":[' +
'{"firstName":"Bill","lastName":"Gates" },' +
'{"firstName":"George","lastName":"Bush" },' +
'{"firstName":"Thomas","lastName":"Carter" }]}';

var obj = JSON.parse(txt);
document.getElementById("fname").innerHTML=obj.employees[1].firstName
document.getElementById("lname").innerHTML=obj.employees[1].lastName
```
