# HttpClient4进行文件上传
## 1、概述

描述如何使用HttpClient4进行一次多文件上传操作

Github:https://github.com/eugenp/tutorials/tree/master/httpclient#readme

## 2、使用AddPart方法

MultipartEntityBuilder对象，向一个Http实体添加成分，将会被通过一个POST操作上传

使用两个文本和一个文件上传一个表单
```
CloseableHttpClient  client = HttpClients.createDefault();
String textFileName = "c:/6791.jpg";
File file = new File(textFileName);
HttpPost post = new HttpPost("http://echo.200please.com");
FileBody fileBody = new FileBody(file, ContentType.DEFAULT_BINARY);
StringBody stringBody1 = new StringBody("Message 1", ContentType.MULTIPART_FORM_DATA);
StringBody stringBody2 = new StringBody("Message 2", ContentType.MULTIPART_FORM_DATA);
//
MultipartEntityBuilder builder = MultipartEntityBuilder.create();
builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
builder.addPart("upfile", fileBody);
builder.addPart("text1", stringBody1);
builder.addPart("text2", stringBody2);
HttpEntity entity = builder.build();
//
post.setEntity(entity);
HttpResponse response = client.execute(post);
//
String responseBody = EntityUtils.toString(response.getEntity(), "UTF-8");
System.out.println("responseBody:"+responseBody);
```
注意：也通过制定将会被服务器使用到的ContentType值来实例化Filec对象

同样还请注意 addPart 方法有两个参数，作用就像是表单的键值对 . 除非服务器端实际需要这些值并使用了这些参数名称，它们就是有干系的，否则它们就会被简单的忽略掉.

## 3、使用addBinaryBody和addTextBody方法

创建一个multipart实体更直接的方式就是使用 addBinaryBody 和 AddTextBody 方法. 这些方法服务于上传文本，文件，字符数组和 InputStream 对象. 用了一个简单的例子来描述如何使用它们 .

上传一个文本和一个文本文件部分
```
HttpPost post = new HttpPost("http://echo.200please.com");
File file = new File(textFileName);
String message = "This is a multipart post";
MultipartEntityBuilder builder = MultipartEntityBuilder.create();
builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
builder.addBinaryBody("upfile", file, ContentType.DEFAULT_BINARY, textFileName);
builder.addTextBody("text", message, ContentType.DEFAULT_BINARY);
//
HttpEntity entity = builder.build();
post.setEntity(entity);
HttpResponse response = client.execute(post);
```
注意这里不需要 FileBody 和 StringBody 对象

同样重要的是，大多数服务器不会检查文本体的 *ContentType * , 因此 addTextBody 方法可能会忽略掉 ContentType 值 .

addBinaryBody 的 API 接受一个 ContentType * - 但是它也有可能从一个二进制体来创建实体，而对应名称的表单参数持有了这个文件. 如前面小节所述，如果ContentType值没有被指定，一些服务器将不会识别这个文件

接下来，将一个zip文件作为一个 InputStream 添加进来, 而图片文件将会被作为File对象被添加进来:

上传一个ZIP文件，一个图片文件和一个文本块
```
HttpPost post = new HttpPost("http://echo.200please.com");
InputStream inputStream = new FileInputStream(zipFileName);
File file = new File(imageFileName);
String message = "This is a multipart post";
MultipartEntityBuilder builder = MultipartEntityBuilder.create();
builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
builder.addBinaryBody
  ("upfile", file, ContentType.DEFAULT_BINARY, imageFileName);
builder.addBinaryBody
  ("upstream", inputStream, ContentType.create("application/zip"), zipFileName);
builder.addTextBody("text", message, ContentType.TEXT_PLAIN);
//
HttpEntity entity = builder.build();
post.setEntity(entity);
HttpResponse response = client.execute(post);
```
请注意ContentType值可以被动态创建，正如上面这个针对zip文件的示例中所示 .

最后，不是所有的服务器都接受 InputStream 部分. 我们在代码的第一行实体化的服务器可以接受 .

让我们现在来看看另外一个示例， addBinaryBody直接用于一个位数组

上传一个位数组和文本
```
HttpPost post = new HttpPost("http://echo.200please.com");
String message = "This is a multipart post";
byte[] bytes = "binary code".getBytes();
//
MultipartEntityBuilder builder = MultipartEntityBuilder.create();
builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
builder.addBinaryBody("upfile", bytes, ContentType.DEFAULT_BINARY, textFileName);
builder.addTextBody("text", message, ContentType.TEXT_PLAIN);
//
HttpEntity entity = builder.build();
post.setEntity(entity);
HttpResponse response = client.execute(post);
```
注意ContentType - 它现在被指定为二进制数据.
