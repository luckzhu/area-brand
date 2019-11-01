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
        tooltip: {
          trigger: "axis"
        },
        legend: {
          color: ["#F58080", "#47D8BE", "#F9A589"],
          data: ["企业竞争力", "企业经营能力"],
          left: "center",
          selectedMode: "single"
        },
        grid: {
          top: "middle",
          left: "3%",
          right: "4%",
          bottom: "3%",
          height: "80%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "梅县金柚",
            "大埔蜜柚",
            "德庆贡柑",
            "廉江红橙",
            "仁化贡柑",
            "平远脐橙"
          ],
          axisLine: {
            lineStyle: {
              color: "#444"
            }
          }
        },
        yAxis: {
          type: "value",

          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#DDD"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#333"
            }
          },
          nameTextStyle: {
            color: "#999"
          },
          splitArea: {
            show: false
          }
        },
        series: [
          {
            name: "企业经营能力",
            type: "line",
            data: [12.86, 12.86, 3.64, 13.71, 0, 0],
            color: "#F58080",
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#444"
              }
            },
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#FFCAD4" // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "#F58080" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F58080" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(245,128,128, 0.5)",
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: "#F58080",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                borderColor: "#F58080"
              }
            },
            smooth: true
          },
          {
            name: "企业竞争力",
            type: "line",
            data: [8.04, 8.04, 2.28, 8.57, 0, 0],
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#444"
              }
            },
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#AAF487" // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "#47D8BE" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#47D8BE" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(71,216,190, 0.5)",
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: "#AAF487",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                borderColor: "#AAF487"
              }
            },
            smooth: true
          }
        ]
      });
    }
  }
};
</script>