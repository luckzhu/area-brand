<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
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
          data: ['产值（万元）']
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0
              // rotate: 40
            },
            data: [
              '梅县金柚',
              '大埔蜜柚',
              '德庆贡柑',
              '廉江红橙',
              '仁化贡柑',
              '平远脐橙'
            ],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '产值',
            min: 0,
            max: 250000,
            interval: 50000
            // axisLabel: {
            //   formatter: "{value} (万元)"
            // }
          }
        ],
        series: [
          {
            name: '产值（万元）',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [238200, 106920, 180000, 52200, 150000, 56000],
            itemStyle: {
              normal: {
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                // 定制显示（按顺序）
                color: function(params) {
                  var colorList = [
                    '#C33531',
                    '#EFE42A',
                    '#64BD3D',
                    '#EE9201',
                    '#29AAE3',
                    '#B74AE5',
                    '#0AAF9F',
                    '#E89589',
                    '#16A085',
                    '#4A235A',
                    '#C39BD3 ',
                    '#F9E79F',
                    '#BA4A00',
                    '#ECF0F1',
                    '#616A6B',
                    '#EAF2F8',
                    '#4A235A',
                    '#3498DB'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
          // {
          //   name: "产值（万元）",
          //   type: "line",
          //   data: [238200, 106920, 180000, 52200, 150000, 56000],
          //   markLine: {
          //     data: [{ type: "average", name: "平均值" }]
          //   }
          // }
        ]
      })
    }
  }
}
</script>