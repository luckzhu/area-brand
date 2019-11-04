<template>
  <div class="pieChart">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          top: 20,
          data: ["2018", "2017"]
        },
        xAxis: [
          {
            type: "category",

            data: [
              "年末资产总额",
              "固定资产净值",
              "流动资产总值",
              "总负债",
              "销售收入",
              "利润总额",
              "研发投入",
              "品牌建设投入"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLabel: { interval: 0, rotate: 5, align: "center" }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "万元",
            min: 0,
            max: 1800,
            interval: 600,
            axisLabel: {
              formatter: "{value} (万元)"
            }
          }
        ],
        series: [
          {
            name: "2018",
            type: "bar",
            barGap: "-0%",

            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [520, 206, 285, 354, 1715, 1, 5, 25]
          },
          {
            name: "2017",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [454, 212.5, 63.5, 289, 1593, -11.7, 0, 23.2]
          }
        ]
      });
    }
  }
  // watch: {
  //   options: {
  //     handler(options) {
  //       this.chart.setOption(this.options);
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style lang="scss" scoped>
</style>