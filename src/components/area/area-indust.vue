<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        angleAxis: {
          type: "category",
          data: [
            "梅州金柚 7.92",
            "大埔蜜柚 5.83",
            "德庆贡柑 5.00",
            "廉江红橙 1.67",
            "仁化贡柑 5.00",
            "平远脐橙 6.25"
          ],
          z: 10
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            data: [6, 3, 5, 0, 4, 6],
            coordinateSystem: "polar",
            name: "产业化经营占比",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 6, 0, 0, 1, 5],
            coordinateSystem: "polar",
            name: "加工程度",
            stack: "a"
          },
          {
            type: "bar",
            data: [6, 2, 1, 4, 1, 1],
            coordinateSystem: "polar",
            name: "名牌产品",
            stack: "a"
          },
          
          {
            type: "bar",
            data: [6, 3, 6, 0, 6, 3],
            coordinateSystem: "polar",
            name: "机械化占比",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["产业化经营占比", "加工程度", "名牌产品", "机械化占比"]
        }
      });
    }
  }
};
</script>