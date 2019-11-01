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
        legend: {
          data: [
            {
              name: "地标标志"
            },
            {
              name: "农业保险"
            },
            {
              name: "生产标准"
            },
            {
              name: "制定发展规划或扶持政策"
            },
            {
              name: "制定发布绿色环保生产措施文件"
            },
            {
              name: "品牌建设比重"
            }
          ],
          textStyle: {
            color: "#555",
            fontSize: 14
          },

          itemWidth: 10,
          itemHeight: 10
        },
        tooltip: {
          trigger: "axis",
          padding: [0, 0, 0, 0],

          axisPointer: {
            type: "shadow",
            animation: true
          },
          extraCssText: "box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)"
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#C0C0C5"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 13,
            color: "#5F5F6B"
          },
          data: [
            "梅县金柚",
            "大埔蜜柚",
            "德庆贡柑",
            "廉江红橙",
            "仁化贡柑",
            "平远脐橙"
          ]
        },
        yAxis: {
          name: "",
          type: "value",
          nameRotate: 1,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#C0C0C5"
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            fontSize: 13,
            color: "#5F5F6B"
          }
        },
        series: [
          {
            name: "地标标志",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [4, 4, 0, 4, 0, 4],
          
          },
          {
            name: "农业保险",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [2, 2, 2, 0, 0, 2]
          },
          {
            name: "生产标准",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [4, 4, 4, 4, 4, 4]
          },
          {
            name: "制定发展规划或扶持政策",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [4, 4, 4, 4, 4, 4]
          },
          {
            name: "制定发布绿色环保生产措施文件",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [2, 2, 2, 2, 0, 2]
          },
          {
            name: "品牌建设比重",
            type: "bar",
            stack: "a",
            barWidth: "60%",
            data: [0, 6, 0.31, 6, 0.8, 5.95]
          }
        ]
      });
    }
  }
};
</script>