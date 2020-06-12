<template>
  <div class="wrap">
    <h2>Bubble Sort</h2>
    <i-chart :options="bubbleSortOptions" class="iChart" autoresize> </i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { sleep } from "@/utils/async";

export default Vue.extend({
  name: "algorithmSort",
  data() {
    return {
      bubbleSortOptions: {},
      sortSpeed: 500
    };
  },
  mounted() {
    const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
    const sortData = this.setChartData(array);
    this.bubbleSortInit(sortData);
  },
  methods: {
    bubbleSortInit(sortData: any[]) {
      this.bubbleSortOptions = this.setChartOptions(sortData);
      this.bubbleSort(sortData);
    },
    async bubbleSort(array: any[]) {
      const arrLength = array.length;
      let i = 0;
      let loopLength = arrLength - 1;
      let unSortedLength = loopLength;
      while (i < arrLength) {
        let isSort = true;
        loopLength = unSortedLength;
        for (let j = 0; j < loopLength; j++) {
          if (array[j].value > array[j + 1].value) {
            const temp = this.deepCopy(array[j + 1]);
            array[j + 1] = this.deepCopy(array[j]);
            array[j] = temp;
            this.bubbleSortOptions = this.setChartOptions(array);
            isSort = false;
            unSortedLength = j;
          }
          await sleep(this.sortSpeed);
        }
        // 上色
        if (isSort) {
          for (let k = 0; k < arrLength; k++) {
            if (!array[k].sorted) {
              array[k].sorted = true;
              array[k].itemStyle = { color: "#aaa" };
              this.bubbleSortOptions = this.setChartOptions(array);
            }
          }
          break;
        } else {
          for (let k = unSortedLength + 1; k < arrLength; k++) {
            if (!array[k].sorted) {
              array[k].sorted = true;
              array[k].itemStyle = { color: "#aaa" };
            }
          }
        }
        i++;
      }
    },
    deepCopy(value: object) {
      return JSON.parse(JSON.stringify(value));
    },
    setChartData(data: number[]) {
      const color = [
        "#2291e3",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ];
      return data.map((item: number, index: number) => {
        return { value: item, itemStyle: { color: color[index] } };
      });
    },
    setChartOptions(data: any[]) {
      return {
        xAxis: {
          type: "category",
          data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data,
            type: "bar"
          }
        ]
      };
    }
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
