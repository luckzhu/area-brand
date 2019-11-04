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
        title: {
          text: "产出效益\n",
          left: "left",
          padding: 20,

          textStyle: {
            height: 30,
            fontSize: "18",
            color: "#333"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        grid: {
          left: "7%", //图表距离左右上下之间的距离
          right: "4%",
          top: "20%",
          bottom: "5%",
          containLabel: true
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["","","","", "亩均产值（万元）", "产出效益得分"]
        },
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0
              // rotate: 40
            },
            data: [
              "梅县金柚",
              "大埔蜜柚",
              "德庆贡柑",
              "廉江红橙",
              "仁化贡柑",
              "平远脐橙"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "亩均产值（万元）",
            min: 0,
            max: 2,
            interval: 1
            // axisLabel: {
            //   formatter: "{value} (万元)"
            // }
          },
          {
            type: "value",
            name: "产出效益得分",
            min: 0,
            max: 6,
            interval: 2
            // axisLabel: {
            //   formatter: "{value} (万元)"
            // }
          }
        ],
        series: [
          {
            name: "亩均产值（万元）",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [0.92, 0.49, 1.71, 0.77, 0.75, 1.16],
            itemStyle: {
              normal: {
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                // 定制显示（按顺序）
                color: function(params) {
                  var colorList = [
                    "#C33531",
                    "#EFE42A",
                    "#64BD3D",
                    "#EE9201",
                    "#29AAE3",
                    "#B74AE5",
                    "#0AAF9F",
                    "#E89589",
                    "#16A085",
                    "#4A235A",
                    "#C39BD3 ",
                    "#F9E79F",
                    "#BA4A00",
                    "#ECF0F1",
                    "#616A6B",
                    "#EAF2F8",
                    "#4A235A",
                    "#3498DB"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "产出效益得分",
            type: "line",
            yAxisIndex: 1,
            data: [2.01, 1.07, 4.76, 2.01, 1.99, 1.99]
          }
        ]
      });
    }
  }
};
</script>