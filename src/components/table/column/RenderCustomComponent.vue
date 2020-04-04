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
    // const self = this;
    return h(this.componentName, {
      props: {
        value: this.value,
        scope: this.scope,
        ...this.props
      },
      on: {
        input: function(event) {
          this.$emit("input", event);
        }
      }
    });
  }
});
</script>
