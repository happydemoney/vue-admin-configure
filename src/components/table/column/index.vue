<template>
    <component
        :is="componentType"
        :column="column"/>
</template>

<script lang="ts">
import Vue from 'vue'
import Default from './Default.vue'
import Custom from './Custom.vue'
import Recursion from './Recursion.vue'
import mixinMethods from '../mixins/methods'

const ComponentsMap = {
    Default,
    Custom,
    Recursion
}

export default Vue.extend({
    name: 'ITableColumn',
    components: ComponentsMap,
    props: {
        column: {
            type: Object,
            default: null
        }
    },
    mixins: [ mixinMethods ],
    computed: {
        componentType () {
            if (this.column.children) {
                const children = this.processValue(this.column.children)
                if (Array.isArray(children) && children.length > 0) {
                    return 'Recursion'
                }
            }
            if (this.column.type && this.column.type !== 'default') {
                return 'Default'
            }
            return 'Custom'
        }
    }
})
</script>