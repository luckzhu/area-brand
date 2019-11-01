<template>
  <div class="area">
    <div class="topChart">
      <div class="box">
        <area-strength id="1" height="600px" width="600px" />
      </div>
      <div>
        <div class="box">
          <area-benefit id="2" height="300px" width="600px" />
        </div>
        <div class="box">
          <area-impact id="3" height="300px" width="600px" />
        </div>
      </div>
    </div>
    <div class="bottomChart">
      <div class="box">
        <area-indust id="4" height="300px" width="500px" />
      </div>
      <div class="box">
        <area-env id="5" height="300px" width="500px" />
      </div>
      <div class="box">
        <area-compete id="6" height="300px" width="500px" />
      </div>
    </div>
  </div>
</template>

<script>
import areaStrength from "@/components/area/area-strength.vue";
import areaBenefit from "@/components/area/area-benefit.vue";
import areaImpact from "@/components/area/area-impact.vue";
import areaIndust from "@/components/area/area-indust.vue";
import areaEnv from "@/components/area/area-env.vue";
import areaCompete from "@/components/area/area-compete.vue";
export default {
  components: {
    areaStrength,
    areaBenefit,
    areaImpact,
    areaIndust,
    areaEnv,
    areaCompete
  }
};
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .topChart,
  .bottomChart{
    display: flex;
  }
}
</style>