<template>
  <div class="pieChart">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
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
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          top: 20,
          data: [
            '产值（万元）',
            '产量（万吨）',
            '带动农户（万人）',
            '亩均效益(万元/亩)'
          ]
        },
        xAxis: [
          {
            type: 'category',

            data: ['2019', '2018', '2017', '2016', '2015'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '产值(万元)',
            min: 0,
            max: 300000,
            interval: 50000,
            axisLabel: {
              formatter: '{value} (万元)'
            }
          },
          {
            type: 'value',
            show: false,
            name: '亩均效益（万元）',
            min: 0,
            max: 1,
            interval: 0.5,
            axisLabel: {
              show: false,
              formatter: '{value} （万元）'
            }
          },
          {
            type: 'value',
            name: '产量（万吨）',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} （万吨）'
            }
          },
          {
            type: 'value',
            show: false,
            name: '带动农户（万人）',
            min: 0,
            max: 10,
            interval: 5,
            axisLabel: {
              show: false,
              formatter: '{value} （万人）'
            }
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
            data: [275000, 238200, 198200, 188900, 196300]
          },
          {
            name: '亩均效益(万元/亩)',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            yAxisIndex: 1,
            data: [0.5886, 0.5539, 0.5201, 0.5033, 0.4899]
          },
          {
            name: '产量（万吨）',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            yAxisIndex: 2,
            data: [57.53, 46.51, 43.85, 44.63, 41.51]
          },
          {
            name: '带动农户（万人）',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            yAxisIndex: 3,
            data: [5.865, 5.6, 4.96, 4.75, 4.23]
          }
        ]
      })
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
}
</script>

<style lang="scss" scoped>
</style>
