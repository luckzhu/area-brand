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
        color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          data: ["德庆贡柑", "平均水平"],
          bottom:20,
        },
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#999"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#999"
            }
          },
          // shape: 'circle',
          name: {
            // formatter: "{a|{value}}{abg|}\n{hr|}\n{b|1234}",
            // backgroundColor: "#eee",
            // borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 0,
            color: "#444"
            // rich: {
            //   a: {
            //     color: "#00b7ee",

            //     lineHeight: 25,
            //     padding: [0, 0, 0, 8],
            //     height: 25,
            //     backgroundColor: "#fff",

            //     borderRadius: 0
            //   },

            //   hr: {
            //     borderColor: "#aaa",
            //     width: "100%",
            //     borderWidth: 0.1,
            //     align: "left",
            //     height: 1
            //   },
            //   b: {
            //     color: "#333",
            //     lineHeight: 25,
            //     padding: [0, 0, 0, 8],
            //     height: 25,
            //     backgroundColor: "#fff",
            //     width: "100%",
            //     align: "left",
            //     borderRadius: 0
            //   },
            //   per: {
            //     color: "#eee",
            //     backgroundColor: "#ffffff",
            //     borderWidth: 0.5,
            //     borderRadius: 0,
            //     borderColor: "#fff"
            //   }
            // }
          },
          indicator: [
            {
              name: "产业化程度",
              max: 10
            },
            {
              name: "企业竞争力",
              max: 10
            },
            {
              name: "产品影响力",
              max: 10
            },
            {
              name: "产出效益",
              max: 10
            },
            {
              name: "发展环境",
              max: 10
            }
          ]
        },

        series: [
          {
            name: "德庆贡柑",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            label: {
              normal: {
                show: true,
                position: "right"
              }
            },

            itemStyle: {
              normal: {
                color: "rgba(0,183,238, 1)",
                borderColor: "rgba(0,183,238, 0.4)",
                borderWidth: 10
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(0,183,238, 0.3)"
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(0,183,238, 1)",
                width: 2
              }
            },

            data: [[5, 2.28, 7.5, 4.76, 5.6]]
          },
          {
            name: "平均水平",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            areaStyle: {
              normal: {
                color: "rgba(86,199,60, 0.3)"
              }
            },
            itemStyle: {
              color: "rgba(86,199,60, 1)",
              borderColor: "rgba(86,199,60, 0.3)",
              borderWidth: 10
            },
            lineStyle: {
              normal: {
                color: "rgba(86,199,60, 1)",
                width: 2
              }
            },
            data: [[6, 6, 6, 6, 6, 6]]
          }
        ]
      });
    }
  }
};
</script>