<template>
    <el-container>
        <sidebar></sidebar>
        <el-container direction="vertical">
            <app-header></app-header>
            <app-main></app-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </el-container>
</template>

<script lang="ts">
import '@/styles/layout.scss'
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