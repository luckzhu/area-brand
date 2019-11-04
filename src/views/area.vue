<template>
  <div class="area">
    <div class="box">
      <area-strength id="1" height="860px" width="750px" />
    </div>
    <div class="part">
      <div class="box">
        <!-- <p class="boxTitle">产出效益</p> -->
        <area-benefit id="2" height="420px" width="750px" />
      </div>
      <div class="box">
        <!-- <p class="boxTitle">产品影响力</p> -->
        <area-impact id="3" height="420px" width="750px" />
      </div>
    </div>
  </div>
</template>

<script>
import areaStrength from "@/components/area/area-strength.vue";
import areaBenefit from "@/components/area/area-benefit.vue";
import areaImpact from "@/components/area/area-impact.vue";
export default {
  components: {
    areaStrength,
    areaBenefit,
    areaImpact
  }
};
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  
  justify-content: center;
  align-items: flex-start;
  .part {
    height: 100%;
  }

}
</style>