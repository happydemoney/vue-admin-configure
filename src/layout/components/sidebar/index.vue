<template>
  <el-aside class="app-sidebar-wrap" :class="{'has-logo':showLogo, 'collapse': isCollapse}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'
import { routes } from '@/router'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: { SidebarItem, Logo },
  data () {
    return {
      routes
    }
  },
  computed: {
    ...mapGetters([
    'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo
      return true
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
})
</script>
