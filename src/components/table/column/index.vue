<template>
  <component :is="componentType" :column="column" />
</template>

<script lang="ts">
import Vue from "vue";
import Default from "./Default.vue";
import Custom from "./Custom.vue";
import Recursion from "./Recursion.vue";

export default Vue.extend({
  name: "ITableColumn",
  components: {
    Default,
    Custom,
    Recursion
  },
  props: {
    column: {
      type: Object,
      default: null
    }
  },
  computed: {
    componentType() {
      if (this.column.children) {
        const children = this.processValue(this.column.children);
        if (Array.isArray(children) && children.length > 0) {
          return "Recursion";
        }
      }
      if (this.column.type && this.column.type !== "default") {
        return "Default";
      }
      return "Custom";
    }
  },
  methods: {
    processValue(value: any) {
      if (typeof value === "function") {
        return value();
      }
      return value;
    }
  }
});
</script>
