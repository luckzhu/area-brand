<template>
  <div>
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
      // var colorList = [
      //   "#afa3f5",
      //   "#00d488",
      //   "#3feed4",
      //   "#3bafff",
      //   "#f1bb4c",
      //   "rgba(250,250,250,0.5)"
      // ];
      var sportsIcon = {
        a: "@/asset/image/1.png",
        b: "@/asset/image/1.png",
        c: "@/asset/image/1.png",
        d: "@/asset/image/1.png",
        e: "@/asset/image/1.png"
      };
      this.chart.setOption({
        title: {
          text: "1715",
          subtext: "总销售收入\n(万元)",
          x: "center",
          y: "center",
          textStyle: {
            fontSize: 30,
            fontWeight: "bold",
            color: ["#333"]
          },
          subtextStyle: {
            color: "#666",
            fontSize: 14
          }
        },
        grid: {
          top: 10,
          bottom: 10,
          left: 20,
          right: 30,
        },
        legend: {
          show: true,
          
          bottom: 20,
          textStyle: {
            color: "#444"
          },
          icon: "roundRect"
        },
        series: [
          // 主要展示层的
          {
            radius: ["25%", "51%"],
            center: ["50%", "50%"],
            type: "pie",
            itemStyle: {
              normal: {
                // color: function(params) {
                //   return colorList[params.dataIndex];
                // }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 120,
                lineStyle: {
                  color: "#d3d3d3"
                },
                align: "right"
              },
              color: "#000",
              emphasis: {
                show: true
              }
            },
            label: {
              normal: {
                formatter: function(params) {
                  var str = "";
                  switch (params.name) {
                    case "批发市场":
                      str =
                        "{a|}\n{nameStyle|批发市场 }" +
                        "{rate|" +
                        params.value +
                        "%}";
                      break;
                    case "超市":
                      str =
                        "{b|}\n{nameStyle|超市 }" +
                        "{rate|" +
                        params.value +
                        "%}";
                      break;
                    case "专卖店":
                      str =
                        "{c|}\n{nameStyle|专卖店 }" +
                        "{rate|" +
                        params.value +
                        "%}";
                      break;
                    case "电商":
                      str =
                        "{d|}\n{nameStyle|电商 }" +
                        "{rate|" +
                        params.value +
                        "%}";
                      break;
                    case "柚园直销":
                      str =
                        "{e|}\n{nameStyle|柚园直销 }" +
                        "{rate|" +
                        params.value +
                        "%}";
                      break;
                  }
                  return str;
                },
                padding: [0, -110],
                height: 165,
                rich: {
                  a: {
                    width: 38,
                    height: 38,
                    lineHeight: 50,
                    backgroundColor: {
                      image: sportsIcon.e
                    },
                    align: "left"
                  },
                  b: {
                    width: 29,
                    height: 45,
                    lineHeight: 50,
                    backgroundColor: {
                      image: sportsIcon.d
                    },
                    align: "left"
                  },
                  c: {
                    width: 34,
                    height: 33,
                    lineHeight: 50,
                    backgroundColor: {
                      image: sportsIcon.c
                    },
                    align: "left"
                  },
                  d: {
                    width: 34,
                    height: 44,
                    lineHeight: 50,
                    backgroundColor: {
                      image: sportsIcon.b
                    },
                    align: "left"
                  },
                  e: {
                    width: 38,
                    height: 30,
                    lineHeight: 50,
                    backgroundColor: {
                      image: sportsIcon.a
                    },
                    align: "left"
                  },
                  nameStyle: {
                    fontSize: 14,
                    color: "#555",
                    align: "left"
                  },
                  rate: {
                    fontSize: 16,
                    color: "#1ab4b8",
                    align: "left"
                  }
                }
              }
            },
            data: [
              {
                value: 55,
                name: "批发市场"
              },
              { value: 15, name: "超市" },
              { value: 5, name: "专卖店" },
              { value: 20, name: "电商" },
              { value: 5, name: "柚园直销" }
            ]
          },
          // 边框的设置
          {
            radius: ["47%", "51%"],
            center: ["50%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: "rgba(250,250,250,0.5)"
              }
            },
            data: [
              {
                value: 1
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