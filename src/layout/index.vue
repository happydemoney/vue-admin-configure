<template>
  <el-container>
    <sidebar></sidebar>
    <el-container direction="vertical">
      <div>
        <app-header></app-header>
        <tags-view />
      </div>
      <app-main></app-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script lang="ts">
import "@/styles/layout.scss";
import Vue from "vue";
import { AppMain, AppHeader, Sidebar, TagsView } from "./components";

export default Vue.extend({
  name: "Layout",
  components: {
    AppMain,
    AppHeader,
    Sidebar,
    TagsView
  }
});
</script>
