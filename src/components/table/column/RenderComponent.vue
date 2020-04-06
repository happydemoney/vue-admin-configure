<script lang="ts">
import Vue, { CreateElement } from "vue";
declare module "vue/types" {
  interface Vue {
    renderFunction: Function
  }
}

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
  render(h: CreateElement) {
    const handleRender = (h: CreateElement, scope: any) => {
      if (typeof scope === "string") {
        return this.renderFunction(h, scope);
      }
      return this.renderFunction(h, scope.row, scope.column, scope.$index);
    }
    return handleRender(h, this.scope);
  }
});
</script>
