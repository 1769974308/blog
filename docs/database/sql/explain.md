# EXPLAIN 分析低效 SQL 的执行计划
```
mysql> explain SELECT * FROM students st LEFT JOIN scores sc on st.sno = sc.sno WHERE st.sno = '103'
```

## 执行计划每个列的简单解释如下:
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
- rows:扫描行的数量
- Extra:执行情况的说明和描述
