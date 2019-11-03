<template>
  <div class="area">
    <div class="box">
      <area-strength id="1" height="820px" width="800px" />
    </div>
    <div>
      <div class="box part">
        <area-benefit id="2" height="400px" width="800px" />
      </div>
      <div class="box part">
        <area-impact id="3" height="400px" width="800px" />
      </div>
    </div>
  </div>
</template>

<script>
import areaStrength from '@/components/area/area-strength.vue'
import areaBenefit from '@/components/area/area-benefit.vue'
import areaImpact from '@/components/area/area-impact.vue'
export default {
  components: {
    areaStrength,
    areaBenefit,
    areaImpact
  }
}
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  justify-content: center;
  align-items: center;
  .part {
    height: 50%;
  }
  .topChart,
  .bottomChart {
    display: flex;
  }
}
</style>