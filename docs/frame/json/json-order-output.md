# 指定JSON.toJSONString中实体类属性的输出顺序
JSON.toJSONString过程中出现实体类的属性与转换之前的顺序不一致

第一种：通过在实体类添加@JSONType(orders={"name","age","gender","height","weight"})
```java
@JSONType(orders={"name","age","gender","height","weight"})
public class Person {
    private String name;
    private Integer age;
    private String gender;
    private Double height;
    private Double weight;
}
```
第二种：在属性上添加@JSONField(ordinal = 1)
```java
 public class Person {
    @JSONField(ordinal = 1)
    private String name;
    @JSONField(ordinal = 2)
    private Integer age;
    @JSONField(ordinal = 3)
    private String gender;
    @JSONField(ordinal = 4)
    private Double height;
    @JSONField(ordinal = 5)
    private Double weight;
}
```
