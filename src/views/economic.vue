<template>
  <div class="economic">
    <div class="chart-container box">
      <pie-number id="1" height="300px" width="300px" />
      <pie-number2 id="2" height="300px" width="300px" />
      <pie-number3 id="3" height="300px" width="300px" />
    </div>
    <div class="table box">
      <p class="boxTitle">近五年经济指标</p>
      <eco-table />
    </div>
  </div>
</template>

<script>
import PieNumber from "@/components/eco/pieNumber";
import PieNumber2 from "@/components/eco/pieNumber2";
import PieNumber3 from "@/components/eco/pieNumber3";
import ecoTable from "@/components/eco/ecoTable";

export default {
  components: { PieNumber, PieNumber2, PieNumber3, ecoTable }
};
</script>

<style lang="scss" scoped>
.economic {
  display: flex;

}
.chart-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

 
  // width: 100%;
  // height: calc(100vh - 84px);
}
.table{
  margin-left: 20px;
  width: 100%;
}
</style>