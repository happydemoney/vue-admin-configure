<template>
  <div class="wrap">
    <bubble-sort></bubble-sort>
    <select-sort></select-sort>
    <quick-sort></quick-sort>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "algorithmSort",
  components: {
    BubbleSort: () => import("./bubble.vue"),
    SelectSort: () => import("./select.vue"),
    QuickSort: () => import("./quick.vue")
  }
});
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
}
</style>
