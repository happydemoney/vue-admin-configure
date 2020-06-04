<template>
    <component
        :is="componentType"
        :renderConfig="renderConfig"
        :value="value"
        @input="handleInput"/>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from './Input.vue'
import Custom from './Custom.vue'

const ComponentsMap = {
    Input,
    custom: Custom
}

export default Vue.extend({
    components: ComponentsMap,
    props: {
        value: {
            default: null
        },
        renderConfig: {
            type: Object,
            default: null
        }
    },
    computed: {
        componentType () {
            return this.renderConfig.type
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
            this.$emit('input', val)
        }
    }
})
</script>