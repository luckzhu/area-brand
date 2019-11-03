<template>
  <div class="mapWrapper">
    <div class="box">
      <gd-map id="1" height="900px" width="900px" />
    </div>

    <div class="box table">
      <p class="boxTitle">2018柑橘橙柚主要经济指标</p>
      <map-table />
      <div class="advise">
        <div class="boxTitle">专家建议</div>
        <p>一、实施农产品区域品牌战略。农产品区域品牌战略是提升农产品的内在品质和市场竞争力的有效保证，要健全农产品质量检测体系，突出抓好无公害、绿色产品、有机食品等农业标准的制订和执行。</p>
        <p>二、政府指导和把关，营造品牌创建环境。成立品牌培育领导小组，将品牌创建和打造作为工作重点。对品牌生产企业在项目立项、用地指标、财政贴息、信贷发放、科研立项、技术进步、质量赶超等方面给予优先安排。</p>
        <p>三、加强区域品牌宣传，扩大品牌知名度。采用多种形式宣传农产品区域品牌，积极组织区域农产品参加国内外大型博览会、展销会、交易会。</p>
      </div>
    </div>
  </div>
</template>

<script>
import gdMap from '@/components/map/gdMap.vue'
import mapTable from '@/components/map/mapTable'

export default {
  components: {
    gdMap,
    mapTable
  }
}
</script>

<style lang="scss" scoped>
.mapWrapper {
  display: flex;
}
.table {
  margin-left: 20px;
  width: 100%;
}
.advise {
  background: #fff;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 60px;
  border-radius: 4px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: #132937;
  > p {
    padding: 24px;
    margin: 0;
  }
  .adviseTitle {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
}
</style>