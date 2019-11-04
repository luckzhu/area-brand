<template>
  <div class="product">
    <div class="valuePart">
      <div class="box">
        <product-data title="总销售收入" value="1716万元" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="生产面积" value="2000亩" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="总产值" value="1716万元" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="亩均产值" value="0.86万元/亩" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="总产量" value="950吨" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="产品单价" value="1.81万元/吨" height="100px" width="100px" />
      </div>
      <div class="box">
        <product-data title="电商销售额" value="350万元" height="100px" width="100px" />
      </div>
    </div>

    <div class="chartPart">
      <div class="box">
        <sale-map id="1" height="500px" width="700px" />
      </div>
      <div class="box">
        <sale-channel id="2" height="500px" width="700px" />
      </div>
    </div>
  </div>
</template>

<script>
import saleMap from "@/components/compony/sale-map.vue";
import saleChannel from "@/components/compony/sale-channel.vue";
import productData from "@/components/product/product-data.vue";
export default {
  data() {
    return {
      valueList: [
        {
          title22: "总销售收入",
          value: "1716万元"
        },
        {
          title22: "生产面积",
          value: "2000亩"
        },
        {
          title22: "亩均产值",
          value: "0.86万元/亩"
        },
        {
          title22: "总产量",
          value: "950吨"
        },
        {
          title22: "产品单价",
          value: "1.81万元/吨"
        },
        {
          title22: "电商销售额",
          value: "350万元"
        }
      ]
    };
  },
  components: {
    saleMap,
    saleChannel,
    productData
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.valuePart{
  display: flex;
}
.chartPart {
  display: flex;
}
</style>