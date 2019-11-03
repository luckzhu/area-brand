<template>
  <div class="area">
    <div class="box part">
      <area-prodValue id="7" height="400px" width="800px" />
    </div>
    <div class="box part">
      <area-indust id="4" height="400px" width="800px" />
    </div>
    <div class="box part">
      <area-env id="5" height="400px" width="800px" />
    </div>
    <div class="box part">
      <area-compete id="6" height="400px" width="800px" />
    </div>
  </div>
</template>

<script>
import areaIndust from '@/components/area/area-indust.vue'
import areaEnv from '@/components/area/area-env.vue'
import areaCompete from '@/components/area/area-compete.vue'
import areaProdValue from '@/components/area/area-prodValue.vue'
export default {
  components: {
    areaIndust,
    areaEnv,
    areaCompete,
    areaProdValue
  }
}
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .part {
    width: 45%;
    height: 30%;
  }
  .topChart,
  .bottomChart {
    display: flex;
  }
}
</style>