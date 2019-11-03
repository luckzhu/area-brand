<template>
  <el-table :data="tableData" stripe style="width: 100%" fit>
    <el-table-column prop="name" label="产品名称" align="center" class-name="year"></el-table-column>
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
          name: '梅县金柚',
          prodValue: '238200',
          yield: '46.51',
          PerAcreBenefit: '5539',
          bringFarmer: '56000'
        },
        {
          name: '大埔蜜柚',
          prodValue: '106920',
          yield: '32.4',
          PerAcreBenefit: '2356',
          bringFarmer: '71000'
        },
        {
          name: '德庆贡柑',
          prodValue: '180000',
          yield: '22.5',
          PerAcreBenefit: '8571',
          bringFarmer: '70000'
        },

        {
          name: '廉江红橙',
          prodValue: '52200',
          yield: '5.8',
          PerAcreBenefit: '5032',
          bringFarmer: '8300'
        },
        {
          name: '仁化贡柑',
          prodValue: '150000',
          yield: '30',
          PerAcreBenefit: '3750',
          bringFarmer: '25000'
        },
        {
          name: '平远脐橙',
          prodValue: '56000',
          yield: '5.25',
          PerAcreBenefit: '7612',
          bringFarmer: '10000'
        }
      ]
    }
  }
}
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
  // font-style: italic;
  color: #132937;
}
</style>