<template>
  <div class="enterprise">
    <p class="boxTitle">德庆县腾龙果品农民专业合作社</p>
    <div class="chartPart">
      <div class="box">
        <sale-map id="1" height="500px" width="500px" />
      </div>
      <div class="box">
        <sale-channel id="2" height="500px" width="500px" />
      </div>
    </div>
  </div>
</template>

<script>
import saleMap from '@/components/compony/sale-map.vue'
import saleChannel from '@/components/compony/sale-channel.vue'

export default {
  components: {
    saleMap,
    saleChannel
  }
}
</script>

<style lang="scss" scoped>
.chartPart {
  display: flex;
}
</style>