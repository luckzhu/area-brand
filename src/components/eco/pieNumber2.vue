<template>
  <div class="pieChart">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
    <h4 class="title">{{title}}</h4>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    title: {
      type: String,
      default: "品牌价值"
    },
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
        backgroundColor: "#fff",
        title: {
          text: "227.5",
          x: "center",
          y: "center",
          subtext: "亿元",
          itemGap: -10,
          textStyle: {
            fontSize: 60,
            fontWeight: "600",
            color: "#fe7000",
            fontStyle: "italic",
            fontFamily: "Arial",
            textShadowBlu: 2,
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
            textShadowColor: "#bbb"
          },
          subtextStyle: {
            fontSize: 24,
            
            fontWeight: "600",
            color: "#fe7000",
            fontStyle: "normal",
            fontFamily: "Arial"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["rose3", "rose5", "rose6", "rose7", "rose8"]
        },
        calculable: true,
        series: [
          {
            type: "pie",
            radius: [100, 120],
            center: ["50%", "50%"],
            color: "#fe7000",
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 144,
                tooltip: {
                  formatter: "已超过{d}%的区域品牌"
                }
              },
              {
                value: 27,
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: "transparent"
                }
              }
            ]
          },
          {
            type: "pie",
            radius: [100, 120],
            center: ["50%", "50%"],
            color: "#d5d5d5",
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 144,
                itemStyle: {
                  color: "transparent"
                }
              },
              {
                value: 27
              }
            ]
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
.pieChart {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: -20px;
    z-index: 1;
    font-size: 20px;
    color: #777777;
  }
}
</style>
