<template>
  <div class="home">
    <!-- <h1>2018柑橘橙柚区域公用品牌大数据分析</h1> -->
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="map">流通地图</el-menu-item>
        <el-menu-item index="economic">经济指标</el-menu-item>
        <el-menu-item index="area">区域指标</el-menu-item>
        <el-menu-item index="market">区域指标2</el-menu-item>
        <el-menu-item index="enterprise">企业指标</el-menu-item>
        <el-menu-item index="product">产品指标</el-menu-item>
      </el-menu>
    </div>
    <div class="chartBox">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'home',
  components: {},
  data() {
    return {
      activeIndex: 'map'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.chartBox {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
}
</style>
