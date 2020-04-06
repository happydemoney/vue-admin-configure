<template>
  <el-main class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </el-main>
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
