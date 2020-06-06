<template>
  <component
    :is="componentType"
    :renderConfig="renderConfig"
    :value="value"
    @input="handleInput"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Custom from "./Custom.vue";
import { RenderConfig } from "../Form.vue";

const ComponentsMap = {
  custom: Custom
};

export default Vue.extend({
  components: ComponentsMap,
  props: {
    value: {
      default: null
    },
    renderConfig: {
      type: Object,
      default: function() {
        return {
          type: "input"
        };
      }
    }
  },
  computed: {
    componentType() {
      return (this.renderConfig as RenderConfig).type;
    }
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.val = newVal;
    }
  },
  methods: {
    handleInput(val: any) {
      this.$emit("input", val);
    }
  }
});
</script>
