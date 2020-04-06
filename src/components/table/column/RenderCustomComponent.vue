<script lang="ts">
import Vue, { CreateElement } from "vue";
export default Vue.extend({
  name: "render-custom-component",
  props: {
    value: {
      type: [String, Array, Number],
      require: true
    },
    componentName: {
      required: true
    },
    props: {
      default: null
    },
    scope: {
      default: null
    }
  },
  render(h: CreateElement) {
    const componentName = this.componentName
    const value = this.value
    const scope = this.scope
    const props = this.props
    const $emitInput = (event: InputEvent) => {
      this.$emit("input", event);
    }
    return h(componentName, {
      props: {
        value,
        scope,
        ...props
      },
      on: {
        input: function(event: InputEvent) {
          $emitInput(event)
        }
      }
    });
  }
});
</script>
