<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
// import '@/assets/map/js/guangdong.js'
import guangdong from '@/assets/map/json/province/guangdong.json'
import xianggang from '@/assets/map/json/province/xianggang.json'
import aomen from '@/assets/map/json/province/aomen.json'
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
      this.$echarts.registerMap('广东', guangdong)
      this.$echarts.registerMap('香港', xianggang)
      this.$echarts.registerMap('澳门', aomen)
      var geoCoordMap = {
        梅县金柚: [116.09, 24.446],
        大湾区: [114.059, 22.542],
        大埔蜜柚: [116.706, 24.349],
        廉江红橙: [109.858, 21.614],
        仁化贡柑: [113.825, 25.071],
        德庆贡柑: [111.929, 23.247],
        平远脐橙: [115.894, 24.555]
      }

      var BJData = [
        [{ name: '德庆贡柑' }, { name: '大湾区', value: 50 }],
        [{ name: '德庆贡柑' }, { name: '德庆贡柑', value: 32.3 }],
        [{ name: '梅县金柚' }, { name: '大湾区', value: 50 }],
        [{ name: '梅县金柚' }, { name: '梅县金柚', value: 227.48 }],
        [{ name: '大埔蜜柚' }, { name: '大湾区', value: 50 }],
        [{ name: '大埔蜜柚' }, { name: '大埔蜜柚', value: 35.31 }],
        [{ name: '廉江红橙' }, { name: '大湾区', value: 50 }],
        [{ name: '廉江红橙' }, { name: '廉江红橙', value: 30.65 }],
        [{ name: '仁化贡柑' }, { name: '大湾区', value: 50 }],
        [{ name: '仁化贡柑' }, { name: '仁化贡柑', value: 21.37 }],
        [{ name: '平远脐橙' }, { name: '大湾区', value: 50 }],
        [{ name: '平远脐橙' }, { name: '平远脐橙', value: 14.13 }]
      ]

      var planePath =
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

      var convertData = function(data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[0].name]
          var toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            })
          }
        }
        return res
      }

      var color = ['#ff5e3a', '#ffa022', '#46bee9']
      var series = []
      ;[['柑橘橙柚', BJData]].forEach(function(item, i) {
        series.push(
          {
            // name: item[0] + " Top10",
            name: '',
            type: 'lines',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#fff',
              symbolSize: 7
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            // name: item[0] + " Top10",
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            legendHoverLink: true, //是否启用图例 hover 时的联动高亮。
            hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
            effectType: 'ripple', //特效类型，目前只支持涟漪特效'ripple'。
            showEffectOn: 'render', //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: function(val) {
              return val[2] / 2
            },
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              }
            })
          }
        )
      })

      this.chart.setOption({
        backgroundColor: '#fff',
        title: {
          text: '2018柑橘橙柚销售情况',
          subtext: '粤港澳大湾区',
          left: 'center',
          top: '30px',
          textStyle: {
            fontSize: 40,
            color: '#222',
            fontFamily: 'Arial'
          },
          subtextStyle: {
            fontSize: 24,
            fontWeight: '600'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          data: ['北京 Top10', '上海 Top10', '广州 Top10'],
          textStyle: {
            color: '#fff'
          },
          selectedMode: 'single'
        },
        geo: {
          map: '广东',
          label: {
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#eee',
              borderColor: '#0692a4'
            },
            emphasis: {
              areaColor: '#777'
            }
          }
        },
        series: series
      })
    }
  }
}
</script>