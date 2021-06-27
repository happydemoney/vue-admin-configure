<template>
  <div class="wrap">
    <h2>Select Sort</h2>
    <el-button-group>
      <el-button type="success" @click="sortInit" :disabled="!sorted"
        >Start</el-button
      >
    </el-button-group>
    <i-chart :options="sortOptions" class="iChart" autoresize> </i-chart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { sleep } from "@/utils/async";
import mixin from "../mixins";

export default Vue.extend({
  name: "selectSort",
  mixins: [mixin],
  data() {
    return {
      sortOptions: {},
      sorted: true
    };
  },
  mounted() {
    this.sortInit();
  },
  methods: {
    sortInit() {
      this.sorted = false;
      const array = [10, 9, 8, 5, 4, 7, 6, 3, 1, 2, 11];
      const sortData = this.setChartData(array);
      this.sortOptions = this.setChartOptions(sortData);
      this.sort(sortData);
    },
    async sort(array: any[]) {
      const arrLength = array.length;
      let i = 0;
      while (i < arrLength) {
        let min = i;
        for (let j = i + 1; j < arrLength - 1; j++) {
          if (array[j].value < array[min].value) {
            min = j;
          }
        }
        if (i !== min) {
          const temp = this.deepCopy(array[min]);
          array[min] = this.deepCopy(array[i]);
          array[i] = temp;
          this.sortOptions = this.setChartOptions(array);
          await sleep(this.sortSpeed);
        }
        array[i].itemStyle = { color: "#aaa" };
        i++;
      }
      this.sorted = true;
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
