<template>
  <div class="wrap">
    <h2>Bubble Sort</h2>
    <el-button-group>
      <el-button
        type="success"
        @click="bubbleSortInit"
        :disabled="!bubbleSorted"
        >Start</el-button
      >
    </el-button-group>
    <i-chart :options="bubbleSortOptions" class="iChart" autoresize> </i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { sleep } from "@/utils/async";
import mixin from "../mixins";

export default Vue.extend({
  name: "bubbleSort",
  mixins: [mixin],
  data() {
    return {
      bubbleSortOptions: {},
      bubbleSorted: true
    };
  },
  mounted() {
    window.console.log("bubble sort mounted!!!");
    this.bubbleSortInit();
  },
  methods: {
    bubbleSortInit() {
      this.bubbleSorted = false;
      const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
      const sortData = this.setChartData(array);
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
