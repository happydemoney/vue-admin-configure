<template>
    <el-container>
        <el-aside width="241px">
            <sidebar></sidebar>
        </el-aside>
        <el-container direction="vertical">
            <app-header></app-header>
            <app-main></app-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { AppMain, AppHeader, Sidebar } from './components'

export default Vue.extend({
    name: "Layout",
    components: {
        AppMain,
        AppHeader,
        Sidebar
    }
})
</script>

<style lang="scss" scoped>

</style>