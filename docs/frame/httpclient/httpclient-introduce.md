# HttpClient4.5介绍
## 一、概述

基于HttpCore的客户端HTTP通信库
基于经典I/O(阻塞I/O)
内容无关
HttpClient不是一个浏览器，它是一个客户端的HTTP通信实现库。HttpClient的目标是发送和接收HTTP报文。如果没有明确设置，否则不会重新格式化请求/重定向URI，或其它和HTTP通信无关的功能
## 二、执行请求

HttpClient最基本的功能是执行HTTP方法，一次HTTP方法的执行包含一个或多个HTTP请求/响应的交互，通常由HttpClient的内部来处理，使用者需要提供一个Request对象来执行HTTP请求，HttpClient就会把请求传送给目标服务器并返回一个相对应的Response对象，如果执行不成功，将会抛出一个异常。

一个简单的请求执行实例：
```
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpGet httpget = new HttpGet("http://localhost/");
CloseableHttpResponse response = httpclient.execute(httpget);
try {
   <...>
} finally {
   response.close();  //关闭
}
​```

HTTP 请求（Request）

HTTP 请求都有一个请求起始行，这个起始行由方法名，请求 URI 和 HTTP 协议版本组成。HttpClient很好地支持了HTTP/1.1规范中所有的HTTP方法：GET，HEAD， POST，PUT， DELETE， TRACE 和 OPTIONS。每个方法都有一个特别的类：HttpGet，HttpHead， HttpPost，HttpPut，HttpDelete，HttpTrace和HttpOptions。URI是统一资源标识符的缩写，用来标识与请求相符合的资源。HTTP 请求URI包含了一个协议名称，主机名，可选端口，资源路径，可选的参数，可选的片段。
```
HttpGet httpget = new HttpGet(
     "http://www.google.com/search?hl=en&q=httpclient&btnG=Google+Search&aq=f&oq=");
HttpClient提供了URIBuilder工具类来简化创建、修改请求 URIs。

URI uri = new URIBuilder()
          .setScheme("http")
          .setHost("www.google.com")
          .setPath("/search")
          .setParameter("q", "httpclient")
          .setParameter("btnG", "Google Search")
          .setParameter("aq", "f")
          .setParameter("oq", "")
          .build();
HttpGet httpget = new HttpGet(uri);
System.out.println(httpget.getURI());</span>
```
输出：

http://www.google.com/search?q=httpclient&btnG=Google+Search&aq=f&oq=
HTTP 响应（Response）

HTTP 相应是服务器接收并解析请求信息后返回给客户端的信息，它的起始行包含了一个协议版本，一个状态码和描述状态的短语
```
HttpResponse response = new BasicHttpResponse(HttpVersion.HTTP_1_1
                             ,HttpStatus.SC_OK, "OK");
System.out.println(response.getProtocolVersion());
System.out.println(response.getStatusLine().getStatusCode());
System.out.println(response.getStatusLine().getReasonPhrase());
System.out.println(response.getStatusLine().toString());
```
输出：

HTTP/1.1
200
OK
HTTP/1.1 200 OK
​

处理报文首部（Headers）

一个HTTP报文包含了许多描述报文的首部，比如内容长度，内容类型等。HttpClient提供了一些方法来取出，添加，移除，枚举首部
```
HttpResponse response = new BasicHttpResponse(HttpVersion.HTTP_1_1,HttpStatus.SC_OK, "OK");
response.addHeader("Set-Cookie","c1=a; path=/; domain=localhost");
response.addHeader("Set-Cookie","c2=b; path=\"/\", c3=c; domain=\"localhost\"");
Header h1 = response.getFirstHeader("Set-Cookie");
System.out.println(h1);
Header h2 = response.getLastHeader("Set-Cookie");
System.out.println(h2);
Header[] hs = response.getHeaders("Set-Cookie");
System.out.println(hs.length);
```
输出：

Set-Cookie: c1=a; path=/; domain=localhost
Set-Cookie: c2=b; path="/", c3=c; domain="localhost"
2
​

获得所有指定类型首部最有效的方式是使用HeaderIterator接口
```
HttpResponse response = new BasicHttpResponse(HttpVersion.HTTP_1_1,HttpStatus.SC_OK, "OK");
response.addHeader("Set-Cookie","c1=a; path=/; domain=localhost");
response.addHeader("Set-Cookie","c2=b; path=\"/\", c3=c; domain=\"localhost\"");
HeaderIterator it = response.headerIterator("Set-Cookie");
while (it.hasNext()) {
     System.out.println(it.next());
}
```
输出：

Set-Cookie: c1=a; path=/; domain=localhost
Set-Cookie: c2=b; path="/", c3=c; domain="localhost"
HTTP实体（HTTP Entity）

HTTP报文能够携带与请求或相应相关联的内容实体。实体存在于某些请求、响应中，它门是可选的。使用实体的请求被称为内含实体请求，HTTP规范定义了两种内含实体请求，POST和PUT。而响应总是内含实体。

HttpClient区分出三种实体： 流式实体（streamed）：内容来源于一个流，或者在运行中产生【译者：原文为generated on the fly】。特别的，这个类别包括从响应中接收到的实体。流式实体不可重复。 自包含实体（self-contained）：在内存中的内容或者通过独立的连接/其他实体获得的内容。自包含实体是可重复的。这类实体大部分是HTTP内含实体请求。 包装实体（wrapping）：从另外一个实体中获取内容。

​

可重复实体：一个实体能够被重复，意味着它的内容能够被读取多次。它仅可能是自包含实体（像ByteArrayEntity或StringEntity）

使用HTTP实体

由于一个实体能够表现为二进制和字符内容，它支持二进制编码（为了支持后者，即字符内容）。

实体将会在一些情况下被创建：当执行一个含有内容的请求时或者当请求成功，响应体作为结果返回给客户端时。为了读取实体的内容，可以通过HttpEntity#getContent() 方法取出输入流，返回一个java.io.InputStream，或者提供一个输出流给HttpEntity#writeTo(OutputStream) 方法，它将会返回写入给定流的所有内容。

当实体内部含有信息时，使用HttpEntity#getContentType()和HttpEntity#getContentLength()方法将会读取一些基本的元数据，比如Content-Type和Content-Length这样的首部（如果他们可用的话），由于Content-Type首部能够包含文本MIME类型（像 text/plain 或text/html），它也包含了与MIME类型相对应的字符编码，HttpEntity#getContentEncoding()方法被用来读取这些字符编码。如果对应的首部不存在，则Content-Length的返回值为-1，Content-Type返回值为NULL。如果Content-Type是可用的，一个Header类的对象将会返回。

确保释放低级别的资源

为了确保正确的释放系统资源，必须关掉与实体与实体相关的的内容流，还必须关掉响应本身。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpGet httpget = new HttpGet("http://localhost/");
CloseableHttpResponse response = httpclient.execute(httpget);
try {
     HttpEntity entity = response.getEntity();
     if (entity != null) {
        InputStream instream = entity.getContent();
        try {
            // do something useful
        } finally {
            instream.close();
        }
   }
} finally {
     response.close();
}
```
关闭内容流和关闭响应的不同点是：前者将会通过消费实体内容保持潜在的连接，而后者迅速的关闭并丢弃连接。 请注意，一旦实体被HttpEntity#writeTo(OutputStream)方法成功地写入时，也需要确保正确地释放系统资源。如果方法获得通过HttpEntity#getContent()，它也需要在一个finally子句中关闭流。 当使用实体时，可以使用EntityUtils#consume(HttpEntity)方法来确保实体内容完全被消费并且使潜在的流关闭。 某些情况，整个响应内容的仅仅一小部分需要被取出，会使消费其他剩余内容的性能代价和连接可重用性代价太高，这时可以通过关闭响应来终止内容流。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpGet httpget = new HttpGet("http://localhost/");
CloseableHttpResponse response = httpclient.execute(httpget);
try {
HttpEntity entity = response.getEntity();
if (entity != null) {
        InputStream instream = entity.getContent();
    int byteOne = instream.read();
        int byteTwo = instream.read();
    // Do not need the rest
}
} finally {
    response.close();
}
```
这样，连接将不会被重用，它分配的所有级别的资源将会被解除。

​

消费实体内容

为了消费实体内容，推荐的方式是使用HttpEntity#getContent()或者 HttpEntity#writeTo(OutputStream)方法。HttpClient也提供了一个EntityUtils类，它有几个静态方法更容易的从实体中读取内容或信息。取代了直接读取java.io.InputStream，你可以通过这个类的方法取出全部内容体并放入一个String 中或者byte数组中。可是，强烈不建议使用EntityUtils，除非响应实体来自于信任的HTTP服务器并且知道它的长度。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpGet httpget = new HttpGet("http://localhost/");
CloseableHttpResponse response = httpclient.execute(httpget);
try {
HttpEntity entity = response.getEntity();
if (entity != null) {
        long len = entity.getContentLength();
        if (len != -1 && len < 2048) {
             System.out.println(EntityUtils.toString(entity));
    } else {
        // Stream content out
    }
}
} finally {
    response.close();
}
```
在某些情况下，多次读取实体内容是必要的。在这种情况下，实体内容必须以一些方式缓冲，内存或者硬盘中。为了达到这个目的，最简单的方法是把原始的实体用BufferedHttpEntity类包装起来。这将会使原始实体的内容读入一个in-memory缓冲区。所有方式的实体包装都是代表最原始的那个实体。
```
CloseableHttpResponse response = <...>
HttpEntity entity = response.getEntity();
if (entity != null) {
    entity = new BufferedHttpEntity(entity);
}
​```

生产实体内容

HttpClient提供了几个类，用来通过HTTP连接高效地传输内容。这些类的实例均与内含实体请求有关，比如POST和PUT，它们能够把实体内容封装进友好的HTTP请求中。对于基本的数据容器String, byte array, input stream, and file，HttpClient为它们提供了几个对应的类：StringEntity, ByteArrayEntity, InputStreamEntity, and FileEntity。
```
File file = new File("somefile.txt");
FileEntity entity = new FileEntity(file,ContentType.create("text/plain", "UTF-8"));
HttpPost httppost = new HttpPost("http://localhost/action.do");
httppost.setEntity(entity);
```
请注意InputStreamEntity是不可重复的，因为它仅仅能够从数据流中读取一次。一般建议实现一个定制的HttpEntity类来代替使用一般的InputStreamEntity。FileEntity将会是一个好的出发点。

HTML表单

许多应用需要模仿一个登陆HTML表单的过程，比如：为了登陆一个web应用或者提交输入的数据。HttpClient提供了UrlEncodedFormEntity类来简化这个过程。
```
List<NameValuePair> formparams = new ArrayList<NameValuePair>();
formparams.add(new BasicNameValuePair("param1", "value1"));
formparams.add(new BasicNameValuePair("param2", "value2"));
UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams,
                                                          Consts.UTF_8);
HttpPost httppost = new HttpPost("http://localhost/handler.do");
httppost.setEntity(entity);
```
UrlEncodedFormEntity实例像上面一样使用URL编码方式来编码参数并生成下面的内容： param1=value1&param2=value2

​

内容分块

通常，我们推荐让HttpClient选择基于被传递的HTTP报文属相最合适的传输编码方式。可能地，可以通过设置HttpEntity#setChunked()为true来通知HttpClient你要进行分块编码。注意HttpClient将会使用这个标志作为提示。当使用一些不支持分块编码的HTTP版本（比如HTTP/1.0.）时，这个值将会忽略。
```
StringEntity entity = new StringEntity("important message",
                           ContentType.create("plain/text", Consts.UTF_8));
entity.setChunked(true);
HttpPost httppost = new HttpPost("http://localhost/acrtion.do");
httppost.setEntity(entity);
​```

响应处理器

最简单、最方便的方式来处理响应是使用ResponseHandler接口，它包含了一个handleResponse(HttpResponse response)方法。这个方法减轻使用者对于连接管理的担心。 当你使用ResponseHandler时，无论是请求执行成功亦或出现异常，HttpClient将会自动地确保连接释放回连接管理器中。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpGet httpget = new HttpGet("http://localhost/json");
ResponseHandler<MyJsonObject> rh = new ResponseHandler<MyJsonObject>() {
    @Override
    public JsonObject handleResponse(final HttpResponse response) throws IOException {
        StatusLine statusLine = response.getStatusLine();
        HttpEntity entity = response.getEntity();
        if (statusLine.getStatusCode() >= 300) {
            throw new HttpResponseException(statusLine.getStatusCode(),
                statusLine.getReasonPhrase());
        }
        if (entity == null) {
             throw new ClientProtocolException("Response contains no content");
        }
        Gson gson = new GsonBuilder().create();
        ContentType contentType = ContentType.getOrDefault(entity);
        Charset charset = contentType.getCharset();
        Reader reader = new InputStreamReader(entity.getContent(), charset);
        return gson.fromJson(reader, MyJsonObject.class);
    }
};
MyJsonObject myjson = client.execute(httpget, rh);
```
HttpClient接口

HttpClient代表HTTP请求执行的最基本约定。它没有强加限制或具体细节给请求执行过程,它保留了连接管理，状态管理，认证，重定向等处理细节的个人实现。使用额外的功能来装饰这个接口是非常容易的，比如设置响应体缓存。

HttpClient实现作为特殊目的的处理器或策略接口的门面，负责处理HTTP协议特定的方面，比如重定向处理，认证处理，为连接持久化做决定或者保持持续连接。这使得用户使用自定义的、应用程序特定方面的实现来取代那些默认的实现。

​

HttpClient线程安全

HttpClient实现是线程安全的。对于不同的请求执行，这个类的相同实例是可复用的。

HttpClient资源分配

当一个HttpClient实例不再需要时并且它不在连接管理器之内时，必须通过CloseableHttpClient#close()方法关闭。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
try {
    <...>
} finally {
    httpclient.close();
}
​
```
## 三、Http执行上下文(context)

HTTP是被设计成无状态的，面向请求-响应的协议。然而，现实世界中的应用程序经常需要通过一些逻辑相关的请求-响应交换来保持状态信息。 为了使应用程序能够维持一个过程状态， HttpClient允许HTTP请求在一个特定的执行上下文中来执行--称为HTTP上下文。如果相同的上下文在连续请求之间重用，那么多种逻辑相关的请求可以参与到一个逻辑会话中。HTTP上下文功能和java.util.Map<String,Object>很相似。 它仅仅是任意命名参数值的集合。应用程序可以在请求之前填充上下文属性，也可以在执行完成之后来检查上下文属性。

下面的例子中：请求配置在最初被初始化，它将在执行上下文中一直保持。共享与同一个会话中所有连续的请求。
```
CloseableHttpClient httpclient = HttpClients.createDefault();
RequestConfig requestConfig = RequestConfig.custom()
    .setSocketTimeout(1000)
    .setConnectTimeout(1000)
    .build();
HttpGet httpget1 = new HttpGet("http://localhost/1");
httpget1.setConfig(requestConfig);
CloseableHttpResponse response1 = httpclient.execute(httpget1, context);
try {
    HttpEntity entity1 = response1.getEntity();
} finally {
    response1.close();
}
HttpGet httpget2 = new HttpGet("http://localhost/2");
CloseableHttpResponse response2 = httpclient.execute(httpget2, context);
try {
    HttpEntity entity2 = response2.getEntity();
} finally {
    response2.close();
}
```
## 四、HTTP协议拦截器

HTTP协议拦截器是一个实现了HTTP协议特定方面的程序。通常协议拦截器将作用于报文的一个特定的首部或一组相关的首部。或者添加一个特定的首部或一组相关的首部到将要发送的报文中。协议拦截器也可以操作报文内含的实体--显而易见的内容解压/压缩就是一个好的例子。包装实体类使用了装饰模式对原始的实体进行装饰。几个协议拦截器能够结合构成一个逻辑单元。

协议拦截器能够通过共享信息来合作--比如处理状态--通过HTTP上下文。协议拦截器使用HTTP上下文为一次请求或几个关联请求储存一个处理状态。

几个拦截器中被执行的顺序不依靠一个特别的执行上下文状态。如果这些拦截器具有相具有依赖关系，就必须以一个特定的顺序执行。比如希望他们以某个顺序执行，就必须以相同的序列加到协议进程中。

协议拦截器必须被实现为线程安全的。类似于servlet，协议拦截器将不会使用多个实例变量，除非访问的这些变量是同步的。

## 五、异常处理

HttpClient 能够抛出两种类型的异常：1）java.io.IOException ：在 I/O 失败时，如socket连接超时或被重置的异常；2）HttpException：标志 HTTP 请求失败的信号，如违反 HTTP 协议。通常 I/O 错误被认为是非致命的和可以恢复的，而 HTTP 协议错误，则被认为是致命的而且是不能自动恢复的。请注意HttpClient实现了可抛出异常HttpExceptions为ClientProtocolException，也是 java.io.IOException的子类。这使HttpClient使用者能够在一个单一的catch子句中处理 IOException 和HttpException

## 六、终止请求

在一些情况下，由于目标服务器的高负载或客户端有很多同时的请求发出，那么 HTTP 请求会在预期的时间内执行失败。 这时，有必要过早地中止请求，解除在 I/O 执行中的线程锁。 HttpClient 执行时，可以在任意阶段通过调用HttpUriRequest#abort()方法中止请求。 这个方法是线程安全的，而且可以从任意线程中调用。当一个 HTTP 请求被中止时，它的执行线程--就封锁在 I/O 操作中了--而且保证通过抛出InterruptedIOException异常来解锁。

## 七、重定向处理

HttpClient自动处理所有类型的重定向。除了那些由 HTTP 规范明令禁止的，比如需要用户干预的。参考其它（状态码 303）POST 和 PUT 请求的重定向转换为符合 HTTP 规范要求的 GET请求。你可以使用一个重定向策略，来突破POST方法自动重定向的限制（POST自动重定向为HTTP规范强加）。

1

在请求报文执行过程中，HttpClient经常需要改写它。每个默认的HTTP/1.0和HTTP/1.1使用相对URI。同样，原始请求需要从一个地址重定向到另一个地址多次。最终绝对的HTTP地址将会被原始的请求和上下文构建。功能方法URIUtils#resolve被使用来构建最终请求形成的绝对URI。这个方法包含了来自于重定向和原始请求的上一个标识。

2

## 八、连接管理

连接持久化 两个主机之间建立连接的过程是很复杂的，包括了两个终端之间许多数据包的交换，会消耗了大量时间。对于很小的HTTP报文传输，上层连接的握手也是必须的，如果已有的连接能够重复使用，来执行多个请求，将会加大程序的数据吞吐量 HTTP/1.1 默认HTTP连接可以重复地执行多次请求。符合HTTP/1.0的终端，也可以使用某些机制来明确地表达为多次请求而优先使用持久连接。HTTP代理中，对于相同的目标主机，需要随后更多的请求，也能够在特定的时间段内保持空闲的持久连接。保持持续连接的能力通常被称为连接持久化。HttpClient完全地支持连接持久化
2.HTTP连接路由 HttpClient 能够直接建立连接到目标主机，或者通过路由，但这会涉及多个中间连接----也被称为”一跳”。 HttpClient区分连接路由plain, tunneled 和layered。连接到目标主机的隧道使用多个中间代理，被称为代理链。 直接连接到目标主机或仅仅有一个代理的是plain路由。通过一个代理或者代理链连到目标主机的是tunneled 路由。没有代理的路由不是tunneled 路由。 通过已有链接加上协议分层是layered。协议可以在链接到目标主机的隧道上分层，也可以在没有代理的直接连接上分层。 3.安全HTTP连接 如果信息在两个不能由非认证的第三方进行读取或修改的终端之间传输， HTTP 连接可 以被认为是安全的。 SSL/TLS 协议是用来确保 HTTP 传输安全所使用的最广泛的技术。当然，其它加密技术也可以被使用。通常来说， HTTP 传输是在 SSL/TLS 加密连接之上分层的。
