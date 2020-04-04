<template>
  <div class="about">
    <h2>iChart line example</h2>
    <i-chart :options="chartOptions"></i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "echarts/lib/chart/line";
export default Vue.extend({
  name: "About",
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
