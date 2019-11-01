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
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            "历史年份得分",
            "带动农户得分",
            "传播力得分",
            "产地市场得分",
            "区域经济地位得分",
            "销售地区得分"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: [
            "梅州金柚",
            "大埔蜜柚",
            "德庆贡柑",
            "廉江红橙",
            "仁化贡柑",
            "平远脐橙"
          ],
          inverse: true
        },
        series: [
          {
            name: "历史年份得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight",
                formatter: function(params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                }
              }
            },
            data: [1.5, 1.5, 2, 0, 0, 0.5]
          },
          {
            name: "带动农户得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [4, 4, 4, 2, 4, 2.5]
          },
          {
            name: "传播力得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [3.5, 3, 2.5, 3, 1, 2.5]
          },
          {
            name: "产地市场得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight",
                formatter: function(params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                }
              }
            },
            data: [2, 0, 0, 0, 0, 0]
          },
          {
            name: "区域经济地位得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [12, 12, 12, 12, 12, 12]
          },
          {
            name: "销售地区得分",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [3, 3, 2, 1, 1, 3]
          }
        ]
      });
    }
  }
};
</script>