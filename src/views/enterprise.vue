<template>
  <div class="enterprise">
    <div class="box">
      <p class="boxTitle">德庆县腾龙果品农民专业合作社</p>
      <p class="boxTitle">企业竞争力六大能力</p>
      <sale-six id="3" height="710px" width="700px" />
    </div>
    <div class="chartPart">
      <div class="box">
        <sale-data id="5" height="400px" width="820px" />
      </div>
    </div>
  </div>
</template>

<script>
import saleSix from "@/components/compony/sale-six.vue";
import saleData from "@/components/compony/sale-data.vue";

export default {
  components: {
    saleSix,
    saleData
  }
};
</script>

<style lang="scss" scoped>
.enterprise {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.chartPart {
  display: flex;
  flex-wrap: wrap;
}
</style>