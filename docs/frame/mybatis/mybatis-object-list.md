# Mybatis参数为对象中包含list情况处理
实体类如下：
```java
package com.kxlive.erp.sc.stock.vo;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.kxlive.erp.sc.stock.po.PurchaseDeliver;

public class QueryPurchaseDeliverVo extends PurchaseDeliver{

    private Long merchantId;

    private Long stockId;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date startTime;//发货开始时间
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date endTime;//发货结束时间

    private Integer page;//当前页

    private Integer rows;//每页记录数

    private String stockName;//仓库名

    private String supplierName;//供应商名称

    private List<Long> condSupplierIds;//供应商IDs

    private List<Integer> condStatuss;//状态s
    //set/get略
}
```
以上实体类中，包含了List对象
```java
 <select id="selectPurchaseDeliverByPrimaryKeySelective" resultMap="purchaseResultMap">
   select
        t2. name stock_name,
        t3. supplier_name, t1.*
   from
        T_SC_PURCHASE_DELIVER t1
        left join T_SC_STOCK t2 on t1.purchase_stock_id = t2.id
        left join T_SC_SUPPLIER t3 on t1.supplier_id = t3.id
   <where>
    <if test="queryCondition.ifDel!=null">
        and t1.if_del=#{queryCondition.ifDel,jdbcType=INTEGER}
    </if>

    <if test="queryCondition.condSuppierIds != null">
        and t1.supplier_id in
        <foreach collection="queryCondition.condSupplierIds" item="supplierId" index="index" separator="," open="(" close=")">
        #{queryCondition.condSupplierIds[${index}],jdbcType=BIGINT}
        </foreach>
    </if>
    <if test="queryCondition.condStatuss != null">
       and t1.status in
       <foreach collection="queryCondition.condStatuss" item="status"  separator=","  index="index" open="(" close=")">
        #{queryCondition.condStatuss[${index}],jdbcType=INTEGER}
        </foreach>
    </if>
    <if test="queryCondition.merchantId != null">
        and t1.merchant_id=#{queryCondition.merchantId,jdbcType=BIGINT}
    </if>
    <if test="queryCondition.stockId != null">
        and t1.purchase_stock_id=#{queryCondition.stockId,jdbcType=BIGINT}
    </if>
    <if test="queryCondition.startTime != null">
         <![CDATA[ and DATE_FORMAT(t1.create_time, '%Y-%m-%d') >=  DATE_FORMAT(#{queryCondition.startTime}, '%Y-%m-%d')]]>
    </if>
    <if test="queryCondition.endTime != null">
         <![CDATA[ and DATE_FORMAT(t1.create_time, '%Y-%m-%d') <=  DATE_FORMAT(#{queryCondition.endTime}, '%Y-%m-%d')]]>
    </if>
    <if test="queryCondition.name != null and queryCondition.name != '' ">
        and t1.name like CONCAT('%', #{queryCondition.name, jdbcType=VARCHAR}, '%')
    </if>
    <if test="queryCondition.deliverNo != null">
        and t1.deliver_no like CONCAT('%', #{queryCondition.deliverNo, jdbcType=VARCHAR}, '%')
    </if>
   </where>
   order by t1.create_time desc
 </select>
```
在foreach循环中，引用index作为list的下标，即可将对象中的所有数据取出
