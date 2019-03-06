# mybatis中的mapper接口文件以及example类的实例函数以及详解
mybatis中的mapper接口文件以及example类的实例函数以及详解
```java
Example example = new Example();
example.setOrderByClause("字段名 ASC"); //升序排列，desc为降序排列。
example.setDistinct(false)//去除重复，boolean型，true为选择不重复的记录。
Criteria criteria = new Example().createCriteria();
is null;is not null;
equal to(value);not equal to(value);
GreaterThan(value);GreaterThanOrEqualTo(value);
LessThan(value); LessThanOrEqualTo(value);
in(item,item,item,...);not in(item,item,item,...);
like("%"+value+"%");not like("%"+value+"%");
Between(value1,value2);not between(value1,value2)
```
mybatis中mapper的实例函数:
```java
int countByExample(UserExample example) thorws SQLException：按条件计数。
int deleteByPrimaryKey(Integer id) thorws SQLException：按主键删除。
int deleteByExample(UserExample example) thorws SQLException：按条件删除。
String/Integer insert(User record) thorws SQLException：插入(返回值为id值)
User selectByPrimaryKey(Integer id) thorws SQLException：按主键查询。
List<?>selectByExample(UserExample example) thorws SQLException：按条件查询
List<?>selectByExampleWithBLOGs(UserExample example) thorws SQLException：按条件查询（包括BLOB字段）。只有当数据表中的字段类型有为二进制的才会产生。
int updateByPrimaryKey(User record) thorws SQLException：按主键更新
int updateByPrimaryKeySelective(User record) thorws SQLException：按主键更新值不为null的字段
int updateByExample(User record, UserExample example) thorws SQLException：按条件更新
int updateByExampleSelective(User record, UserExample example) thorws SQLException：按条件更新值不为null的字段
```
mybatis中mapper的实例函数详解：
```java
① selectByPrimaryKey()

User user = Mapper.selectByPrimaryKey(100); 相当于select * from user where id = 100
```
```java
② selectByExample() 和 selectByExampleWithBLOGs()

UserExample example = new UserExample();
Criteria criteria = example.createCriteria();
criteria.andUsernameEqualTo("joe");
criteria.andUsernameIsNull();
example.setOrderByClause("username asc,email desc");
List<?>list = Mapper.selectByExample(example);
相当于：select * from user where username = 'joe' and username is null order by username asc,email desc
```
注：在iBator 生成的文件UserExample.java中包含一个static 的内部类 Criteria ，在Criteria中有很多方法，主要是定义SQL 语句where后的查询条件。
```java
③ insert()

User user = new User();
user.setId(101);
user.setUsername("test");
user.setPassword("123")
user.setEmail("joe@163.com");
Mapper.insert(user);
相当于：insert into user(ID,username,password,email) values (101,'test','123','joe@163.com');
```
```java
 ④ updateByPrimaryKey() 和 updateByPrimaryKeySelective()

User user =new User();
user.setId(101);
user.setUsername("joe");
user.setPassword("joe");
user.setEmail("joe@163.com");
Mapper.updateByPrimaryKey(user);
相当于：update user set username='joe',password='joe',email='joe@163.com' where id=101
```
```java
User user = new User();
user.setId(101);
user.setPassword("joe");
Mapper.updateByPrimaryKeySelective(user);
相当于：update user set password='joe' where id=101
```
```java
⑤ updateByExample() 和 updateByExampleSelective()

UserExample example = new UserExample();
Criteria criteria = example.createCriteria();
criteria.andUsernameEqualTo("joe");
User user = new User();
user.setPassword("123");
Mapper.updateByPrimaryKeySelective(user,example);
相当于：update user set password='123' where username='joe'
```
```java
⑥ deleteByPrimaryKey()

Mapper.deleteByPrimaryKey(101);  相当于：delete from user where id=101
```
```java
⑦ deleteByExample()

UserExample example = new UserExample();
Criteria criteria = example.createCriteria();
criteria.andUsernameEqualTo("joe");
Mapper.deleteByExample(example);
相当于：delete from user where username='joe'
```
```java
⑧ countByExample()

UserExample example = new UserExample();
Criteria criteria = example.createCriteria();
criteria.andUsernameEqualTo("joe");
int count = Mapper.countByExample(example);
相当于：select count(*) from user where username='joe'
```
