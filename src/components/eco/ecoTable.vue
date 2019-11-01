<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="year" label="年份" align="center" class-name="year"></el-table-column>
    <el-table-column prop="prodValue" label="产值（万元）" align="center"></el-table-column>
    <el-table-column prop="yield" label="产量（万吨）" align="center"></el-table-column>
    <el-table-column prop="PerAcreBenefit" label="亩均效益（元/亩）" align="center"></el-table-column>
    <el-table-column prop="bringFarmer" label="带动农户（人）" align="center"></el-table-column>
    <el-table-column prop="action" label="操作" align="center">
      <el-button type="warning" size="small">查看更多</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          year: "2019",
          prodValue: "275000",
          yield: "57.53",
          PerAcreBenefit: "5886",
          bringFarmer: "58650"
        },
        {
          year: "2018",
          prodValue: "238200",
          yield: "46.51",
          PerAcreBenefit: "5539",
          bringFarmer: "56000"
        },
        {
          year: "2017",
          prodValue: "198200",
          yield: "43.85",
          PerAcreBenefit: "5201",
          bringFarmer: "49600"
        },
        {
          year: "2016",
          prodValue: "188900",
          yield: "44.63",
          PerAcreBenefit: "5033",
          bringFarmer: "47500"
        },
        {
          year: "2015",
          prodValue: "196300",
          yield: "41.51",
          PerAcreBenefit: "4899",
          bringFarmer: "42300"
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
.cell {
  color: #777777;
  font-size: 16px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
}
.year .cell {
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  color: #ff5e3a;
}
</style>