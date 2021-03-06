# EXPLAIN 分析低效 SQL 的执行计划
```
mysql> explain SELECT * FROM students st LEFT JOIN scores sc on st.sno = sc.sno WHERE st.sno = '103';
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                              |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
|  1 | SIMPLE      | st    | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    6 |    16.67 | Using where                                        |
|  1 | SIMPLE      | sc    | NULL       | ALL  | NULL          | NULL | NULL    | NULL |   12 |   100.00 | Using where; Using join buffer (Block Nested Loop) |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
2 rows in set, 1 warning (0.00 sec)

```

## 执行计划每个列的简单解释如下:
- id:决定表的读取顺序

  id相同，执行顺序由上至下；

  id不同，如果是子查询，id的序号会递增，id值越大优先级越高,越先被执行;

  id相同不同，同时存在，如果id相同，可以认为是一组，从上往下顺序执行,在所有组中，id值越大，优先级越高，越先执行；

- select_type:表示 SELECT 的类型,常见的取值有 SIMPLE(简单表,即不使用表连接或者子查询)、PRIMARY(主查询,即外层的查询)、UNION(UNION 中的第二个或者后面的查询语句)、SUBQUERY(子查询中的第一个 SELECT)等
-  table:输出结果集的表
-  type:表示表的连接类型,性能由好到差的连接类型为:

    system(表中仅有一行,即常量表)

    const(单表中最多有一个匹配行,例如 primary key 或者 unique index)

    eq_ref(对于前面的每一行,在此表中只查询一条记录,简单来说,就是多表连接中使用 primary key 或者 unique index)

    ref(与 eq_ref 类似,区别在于不是使用 primary key 或者 unique index,而是使用普通的索引)

    ref_or_null(与 ref 类似,区别在于条件中包含对 NULL 的查询)

    index_merge(索引合并优化)

    unique_subquery(in的后面是一个查询主键字段的子查询)

    index_subquery (与 unique_subquery 类似,区别在于 in 的后面是查询非唯一索引字段的子查询)

    range (单表中的范围查询)

    index (对于前面的每一行,都通过查询索引来得到数据)

    all (对于前面的每一行,都通过全表扫描来得到数据)

- possible_keys:表示查询时,可能使用的索引。
- key:表示实际使用的索引
- key_len:索引字段的长度
- ref : 显示了哪些字段或者常量被用来和 key 配合从表中查询记录出来。显示那些在index查询中被当作值使用的在其他表里的字段或者constants
- rows:扫描行的数量
- Extra:执行情况的说明和描述

  using filesort(不理想):说明mysql会对数据使用一个外部的索引排序,而不是按照表内的索引顺序进行读取,mysql中无法利用索引完成的排序操作称为"文件排序";

  using temporary(不理想,使用到了临时表):使用了临时表保存中间结果,Mysql在对查询结果排序时使用临时表,常见于排序order by和分组查询group by.

  using index:表示相应的select操作中使用了覆盖索引(Covering Index),避免了访问了表的数据行,效率不错！

  Distinct:如果同时出现using where ,表明索引被用来执行索引键值的查找;
  如果没有同时出现using where,表明索引用来读取数据而非执行查找操作；

  > 覆盖索引:索引是高效找到行的一个方法,但是一般数据库也能使用索引找到一个列的数据,因此它不必读取整个行，索引的叶子节点存储了索引数据;当能通过读取索引就可以得到想要的数据,那就不需要读取行了;一个索引包含了(或者覆盖了)满足查询结果的数据就叫做覆盖索引。

  using where:使用了where;

  using join buffer:使用了链接缓存;

  Not exists：MySQL能够对查询进行LEFT JOIN优化，发现1个匹配LEFT JOIN标准的行后，不再为前面的的行组合在该表内检查更多的行

  range checked for each record (index map: #)：MySQL没有发现好的可以使用的索引，但发现如果来自前面的表的列值已知，可能部分索引可以使用。对前面的表的每个行组合，MySQL检查是否可以使用range或index_merge访问方法来索取行
