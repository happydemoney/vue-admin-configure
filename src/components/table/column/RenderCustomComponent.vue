<script lang="ts">
import Vue from "vue";
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
  render(h) {
    const self = this;
    return h(self.componentName, {
      props: {
        value: self.value,
        scope: self.scope,
        ...self.props
      },
      on: {
        input: function(event) {
          self.$emit("input", event);
        }
      }
    });
  }
});
</script>
