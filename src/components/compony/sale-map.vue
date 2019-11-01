<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
// import '@/assets/map/js/guangdong.js'
import guangdong from "@/assets/map/json/province/guangdong.json";
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
      this.$echarts.registerMap("广东", guangdong);
      var geoCoordMap = {
        广州: [113.264, 23.129],
        深圳: [114.059, 22.542],
        东莞: [113.757, 23.02],
        中山: [113.393, 22.516],
        珠海: [113.577, 22.271],
        德庆县: [111.929, 23.247]
      };

      var BJData = [
        [{ name: "德庆县" }, { name: "广州", value: 95 }],
        [{ name: "德庆县" }, { name: "深圳", value: 90 }],
        [{ name: "德庆县" }, { name: "东莞", value: 80 }],
        [{ name: "德庆县" }, { name: "中山", value: 60 }],
        [{ name: "德庆县" }, { name: "珠海", value: 60 }]
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      };

      var color = ["#a6c84c", "#ffa022", "#46bee9"];
      var series = [];
      [["德庆县", BJData]].forEach(function(item, i) {
        series.push(
          {
            // name: item[0] + " Top10",
            name: "德庆贡柑",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3
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
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
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
            name: item[0] + " Top10",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 8;
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
              };
            })
          }
        );
      });

      this.chart.setOption({
        backgroundColor: "#404a59",
        title: {
          text: "德庆贡柑销售地区",
          subtext: "省内",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["德庆贡柑"],
          textStyle: {
            color: "#fff"
          },
          selectedMode: "single"
        },
        geo: {
          map: "广东",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
   
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#404a59"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: series
      });
    }
  }
};
</script>