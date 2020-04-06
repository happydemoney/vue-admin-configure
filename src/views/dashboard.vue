<template>
  <div class="dashboard-container">
    <h1>2020-03-30 ~ 2020-04-05百度指数</h1>
    <i-chart :options="chartOption" autoresize class="echarts"> </i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Dashboard",
  components: {},
  data() {
    return {
      chartOption: {
        title: {
          text: "百度指数趋势图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["剑与远征", "王者荣耀", "刺激战场", "和平精英", "荒野行动"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2020-03-30 周一",
              "2020-03-31 周二",
              "2020-04-01 周三",
              "2020-04-02 周四",
              "2020-04-03 周五",
              "2020-04-04 周六",
              "2020-04-05 周日"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "剑与远征",
            type: "line",
            // areaStyle: {},
            data: [20011, 23084, 21518, 20482, 21108, 12365, 30558]
          },
          {
            name: "王者荣耀",
            type: "line",
            // areaStyle: {},
            data: [199239, 579953, 173184, 137481, 210255, 502571, 231531]
          },
          {
            name: "刺激战场",
            type: "line",
            // areaStyle: {},
            data: [7529, 7764, 10275, 7559, 10226, 19981, 7483]
          },
          {
            name: "和平精英",
            type: "line",
            // areaStyle: {},
            data: [42720, 44027, 89848, 53313, 75091, 105463, 55425]
          },
          {
            name: "荒野行动",
            type: "line",
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top'
            //     }
            // },
            // areaStyle: {},
            data: [5166, 4799, 4745, 4458, 5808, 14180, 5167]
          }
        ]
      }
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.dashboard-container {
  .echarts {
    width: 100%;
  }
}
</style>
