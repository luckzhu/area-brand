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
      let data = [
        {
          children: [
            {
              name: "带动农户数",
              value: 5
            },
            {
              name: "每户增收",
              value: 5
            },
            {
              name: "从业人数",
              value: 5
            }
          ],
          name: "带动能力",
          value: 15
        },
        {
          children: [
            {
              name: "利润总额",
              value: 5
            },
            {
              name: "收入利润率",
              value: 5
            },
            {
              name: "总资产报酬率",
              value: 5
            },
            {
              name: "净资产收益率",
              value: 10
            }
          ],
          name: "盈利能力",
          value: 25
        },
        {
          children: [
            {
              name: "总资产周转率",
              value: 8
            },
            {
              name: "流动资产周转率",
              value: 2
            },
            {
              name: "专门质检机构",
              value: 2
            },
            {
              name: "质量体系认证",
              value: 2
            },
            {
              name: "出口创汇占销售收入\n比重过半",
              value: 2
            }
          ],
          name: "营运能力",
          value: 16
        },
        {
          children: [
            {
              name: "总资产",
              value: 5
            },
            {
              name: "收入",
              value: 5
            },
            {
              name: "总资产增长率",
              value: 5
            },
            {
              name: "销售收入增长率",
              value: 5
            }
          ],
          name: "成长能力",
          value: 20
        },
        {
          children: [
            {
              name: "资产负债率",
              value: 10
            }
          ],
          name: "偿债能力",
          value: 10
        },
        {
          children: [
            {
              name: "专门研发机构",
              value: 2
            },
            {
              name: "官网",
              value: 2
            },
            {
              name: "专利",
              value: 2
            },
            {
              name: "高企",
              value: 2
            },
            {
              name: "大专及以上人员占比",
              value: 2
            },
            {
              name: "研发经费投入占\n销售收入比重",
              value: 2
            },
            {
              name: "研发经费",
              value: 2
            }
          ],
          name: "创新能力",
          value: 14
        }
      ];
      this.chart.setOption({
        tooltip: {
          show: true
        },

        grid: {
          left: "1px",
          right: "1px",
          bottom: "1px",
          top: "1px",
          containLabel: true
        },
        series: {
          type: "sunburst",
          highlightPolicy: "descendant",
          data: data,
          center: ["50%", "50%"],
          radius: [0, "95%"],
          sort: null,
          highlight: {
            itemStyle: {
              color: "orange"
            }
          },
          // downplay: {
          //   itemStyle: {
          //     color: "#ccc"
          //   }
          // },
          levels: [
            {},
            {
              r0: "10%",
              r: "40%",
              itemStyle: {
                borderWidth: 2
              },
              label: {
                rotate: "tangential"
              }
            },
            {
              r0: "40%",
              r: "80%",
              label: {
                fontSize: "16",
                align: "right"
              }
            }
            // {
            //   r0: "60%",
            //   r: "63%",
            //   label: {
            //     position: "outside",
            //     padding: 3,
            //     silent: false
            //   },
            //   itemStyle: {
            //     borderWidth: 3
            //   }
            // }
          ]
        }
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