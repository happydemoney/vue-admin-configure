<template>
  <div class="about">
    <h2>iTable example</h2>
    <i-table :data="tableData" :columns="tableColums"> </i-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
      ]
    };
  }
});
</script>
