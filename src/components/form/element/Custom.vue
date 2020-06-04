<template>
    <render-custom-component
        :value="val"
        @input="handleInput"
        :component-name="renderConfig.component.name"
        :props="renderConfig.component.props ? renderConfig.component.props : null"
        :scope="scope">
    </render-custom-component>
</template>

<script lang="ts">
import Vue from 'vue'
import RenderCustomComponent from './RenderCustomComponent.vue'

export default Vue.extend({
    name: 'iInput',
    components: {
      RenderCustomComponent
    },
    props: {
        value: {
            default: null
        },
        renderConfig: {
            type: Object,
            default: null
        },
        scope: {
            default: null
        }
    },
    data () {
        return {
            val: this.value
        }
    },
    watch: {
        value (newVal, oldVal) {
            this.val = newVal
        }
    },
    methods: {
        handleInput (val) {
            console.log(val)
            this.$emit('input', val)
        }
    }
})
</script>