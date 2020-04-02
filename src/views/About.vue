<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>iTable example</h2>
    <i-table :data="tableData" :columns="tableColums"> </i-table>
    <h2>iChart example</h2>
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
      tableData: [{ id: 1, name: "钱", sex: "男" }],
      tableColums: [
        {
          type: "selection"
        },
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "sex",
          label: "性别"
        }
      ],
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
