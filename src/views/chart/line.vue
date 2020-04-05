<template>
  <div class="wrap">
    <h2>iChart line example</h2>
    <i-chart :options="chartOptions" class="iChart"></i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "echarts/lib/chart/line";
export default Vue.extend({
  name: "lineChart",
  data() {
    return {
      chartOptions: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
}
.iChart {
  width: 100%;
}
</style>