<template>
  <div class="wrap">
    <h2>Bubble Sort</h2>
    <el-button-group>
      <el-button
        type="success"
        @click="handleStart('bubble')"
        :disabled="!bubbleSorted"
        >Start</el-button
      >
    </el-button-group>
    <i-chart :options="bubbleSortOptions" class="iChart" autoresize> </i-chart>
    <h2>Quick Sort</h2>
    <el-button-group>
      <el-button
        type="success"
        @click="handleStart('quick')"
        :disabled="!quickSorted"
        >Start</el-button
      >
    </el-button-group>
    <i-chart :options="quickSortOptions" class="iChart" autoresize> </i-chart>
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
      bubbleSorted: true,
      quickSorted: true,
      sortSpeed: 500,
      quickSortOptions: {}
    };
  },
  mounted() {
    this.bubbleSortInit();
    this.quickSortInit();
  },
  methods: {
    bubbleSortInit() {
      this.bubbleSorted = false;
      const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
      const sortData = this.setChartData(array);
      this.bubbleSortOptions = this.setChartOptions(sortData);
      this.bubbleSort(sortData);
    },
    quickSortInit() {
      this.quickSorted = false;
      const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
      const sortData = this.setChartData(array);
      this.quickSortOptions = this.setChartOptions(sortData);
      this.quickSort(sortData, 0, array.length - 1);
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
            await sleep(this.sortSpeed);
          }
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
          this.bubbleSorted = true;
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
    async quickSort(array: any[], left: number, right: number) {
      if (left >= right) {
        this.quickSorted = true;
        this.quickSortOptions = this.setChartOptions(array);
        return;
      }
      const pivot = await this.getPivot(array, left, right);
      if (left < pivot - 1) {
        this.quickSort(array, left, pivot - 1);
      }
      if (right >= pivot + 1) {
        this.quickSort(array, pivot + 1, right);
      }
    },
    async getPivot(array: any[], left: number, right: number) {
      const pivot = array[left];
      let startIndex = left;
      let endIndex = right;
      while (startIndex !== endIndex) {
        while (startIndex < endIndex && array[endIndex].value > pivot.value)
          endIndex--;
        while (startIndex < endIndex && array[startIndex].value <= pivot.value)
          startIndex++;
        if (startIndex < endIndex) {
          const temp = this.deepCopy(array[endIndex]);
          array[endIndex] = this.deepCopy(array[startIndex]);
          array[startIndex] = temp;
          this.quickSortOptions = this.setChartOptions(array);
          await sleep(this.sortSpeed);
        }
      }
      array[left] = this.deepCopy(array[startIndex]);
      array[startIndex] = this.deepCopy(pivot);
      this.quickSortOptions = this.setChartOptions(array);
      await sleep(this.sortSpeed);
      return startIndex;
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
    },
    handleStart(type: string) {
      switch (type) {
        case "bubble":
          this.bubbleSortInit();
          break;
        case "quick":
          this.quickSortInit();
          break;
        default:
          break;
      }
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
