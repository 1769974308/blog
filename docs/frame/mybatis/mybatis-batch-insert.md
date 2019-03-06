# Mybatis 批量插入以及多参数批量删除
## 一、批量插入

实体类:
```java
import java.io.Serializable;
public class AttachmentTable implements Serializable {
    private static final long serialVersionUID = 8325882509007088323L;
    private Integer id;
    // 附件名称
    private String name;
    // 日志ID
    private Integer logid;
    // 附件URL
    private String url;

    // getter/setter.......
}
```
Mapper接口:
```java
import java.util.List;
import model.AttachmentTable;
public interface AttachmentTableMapper {
　　int insert(AttachmentTable record);
　　void insertByBatch(List<AttachmentTable> attachmentTables);
}
```
Mapper.xml:
```java
<insert id="insertByBatch" parameterType="java.util.List">
        insert into attachment_table (name, logID,url)
        values
        <foreach collection="list" item="item" index="index" separator=",">
            (#{item.name,jdbcType=VARCHAR}, #{item.logid,jdbcType=INTEGER},#{item.url,jdbcType=LONGVARCHAR})
        </foreach>
    </insert>
```
## 二、多参数批量删除
```java
package com.vrv.linkdood.app.workreport.demomodule.mapper;
import org.apache.ibatis.annotations.Param;
public interface AttachmentTableMapper {
    void deleteByLogIdAndNames(@Param("logid") Integer logID, @Param("names") String[] names);
}
```
```java
<delete id="deleteByLogIdAndNames">
        delete from attachment_table
        where logid = #{logid,jdbcType=INTEGER} AND NAME IN
        <foreach collection="names" item="item" index="index" open="(" close=")" separator=",">
            #{item}
        </foreach>
    </delete>
```
