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
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            // magicType: { show: true, type: ["line", "bar"] },
            // restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["产值（万元）"]
        },
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
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
            name: "产值",
            min: 0,
            max: 250000,
            interval: 50000,
            // axisLabel: {
            //   formatter: "{value} (万元)"
            // }
          }
        ],
        series: [
          {
            name: "产值（万元）",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [238200, 106920, 180000, 52200, 150000, 56000],
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          // {
          //   name: "产值（万元）",
          //   type: "line",
          //   data: [238200, 106920, 180000, 52200, 150000, 56000],
          //   markLine: {
          //     data: [{ type: "average", name: "平均值" }]
          //   }
          // }
        ]
      });
    }
  }
};
</script>