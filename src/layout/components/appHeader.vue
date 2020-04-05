<template>
    <el-header class="app-header">
        <div class="app-header-left">
            <i :class="sidebar.opened? 'el-icon-s-fold': 'el-icon-s-unfold'"
                style="font-size: 18px;cursor: pointer;"
                @click="handleCollapse"></i>
        </div>
        <div class="app-header-right">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>小彬哥</span>
        </div>
    </el-header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
    name: 'AppHeader',
    computed: {
        ...mapGetters([
        'sidebar'
        ]),
    },
    methods: {
        handleCollapse () {
            this.$store.dispatch('app/toggleSideBar')
        }
    }
})
</script>

<style scoped>

</style>