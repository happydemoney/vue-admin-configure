<template>
    <el-main class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </el-main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "AppMain",
    computed: {
        key() {
            return this.$route.path
        }
    }
})
</script>
