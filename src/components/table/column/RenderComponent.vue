<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "render-component",
  props: {
    renderFunction: {
      type: Function,
      required: true
    },
    scope: {
      default: null
    }
  },
  render(h) {
    return this.handleRender(h, this.scope);
  },
  methods: {
    handleRender(h, scope) {
      if (typeof scope === "string") {
        return this.renderFunction(h, scope);
      }
      return this.renderFunction(h, scope.row, scope.column, scope.$index);
    }
  }
});
</script>
