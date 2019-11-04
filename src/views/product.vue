<template>
  <div class="product">
    <div class="box">
      <sale-map id="1" height="500px" width="500px" />
    </div>
    <div class="box">
      <sale-channel id="2" height="500px" width="500px" />
    </div>
  </div>
</template>

<script>
import saleMap from "@/components/compony/sale-map.vue";
import saleChannel from "@/components/compony/sale-channel.vue";
export default {
  components: {
    saleMap,
    saleChannel
  }
};
</script>

<style lang="scss" scoped>
.product{
  display: flex;
}
</style>