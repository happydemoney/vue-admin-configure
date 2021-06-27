<template>
  <div class="wrap">
    <h2>Quick Sort</h2>
    <el-button-group>
      <el-button type="success" @click="quickSortInit" :disabled="!quickSorted"
        >Start</el-button
      >
    </el-button-group>
    <i-chart :options="quickSortOptions" class="iChart" autoresize> </i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { sleep } from "@/utils/async";
import mixin from "../mixins";

export default Vue.extend({
  name: "quickSort",
  mixins: [mixin],
  data() {
    return {
      quickSorted: true,
      quickSortOptions: {}
    };
  },
  mounted() {
    this.quickSortInit();
  },
  methods: {
    quickSortInit() {
      this.quickSorted = false;
      const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
      const sortData = this.setChartData(array);
      this.quickSortOptions = this.setChartOptions(sortData);
      this.quickSort(sortData, 0, array.length - 1);
    },
    async quickSort(array: any[], left: number, right: number) {
      let isSorted = true;
      if (left >= right) {
        return;
      }
      const pivot = await this.getPivot(array, left, right);
      if (left < pivot - 1) {
        isSorted = false;
        this.quickSort(array, left, pivot - 1);
      }
      if (right >= pivot + 1) {
        isSorted = false;
        this.quickSort(array, pivot + 1, right);
      }
      if (isSorted) {
        this.quickSorted = true;
        for (let k = 0; k < array.length; k++) {
          array[k].itemStyle = { color: "#aaa" };
        }
        this.quickSortOptions = this.setChartOptions(array);
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
