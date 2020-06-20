<template>
  <div class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <el-scrollbar wrap-class="scrollbar-wrapper">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
      </el-scrollbar>
    <!-- </transition> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  }
});
</script>
