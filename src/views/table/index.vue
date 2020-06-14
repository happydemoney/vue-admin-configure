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
      tableData: [
        {
          id: 1,
          name: "小彬哥",
          sex: "男",
          address: "深圳市宝安区新安街道新安三路"
        }
      ],
      tableColums: [
        {
          type: "selection"
        },
        {
          prop: "userInfo",
          label: "用户信息",
          children: [
            {
              prop: "name",
              label: "姓名"
            },
            {
              prop: "sex",
              label: "性别"
            }
          ]
        },
        {
          prop: "address",
          label: "地址"
        }
      ]
    };
  }
});
</script>
