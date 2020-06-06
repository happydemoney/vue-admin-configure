<script lang="ts">
import Vue, { CreateElement } from "vue";
export default Vue.extend({
  name: "render-custom-component",
  props: {
    value: {
      type: [String, Array, Number, Boolean],
      require: true
    },
    componentName: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: function() {
        return null;
      }
    },
    scope: {
      default: null
    }
  },
  render(h: CreateElement) {
    const componentName = this.componentName;
    const value = this.value;
    const scope = this.scope;
    const props = this.props;
    const self = this as Vue;
    return h(componentName, {
      props: {
        value,
        scope,
        ...props
      },
      on: {
        input: function(value: any) {
          self.$emit("input", value);
        }
      }
    });
  }
});
</script>
