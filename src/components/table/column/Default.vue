<template>
    <el-table-column
        :type="column.type"
        :label="processValue(column.label || '')"
        :column-key="column.columnKey || ''"
        :prop="column.prop || ''"
        :width="column.width || ''"
        :min-width="column.minWidth || ''"
        :fixed="column.fixed"
        :resizable="column.resizable !== undefined ? column.resizable : true"
        :formatter="column.formatter"
        :show-overflow-tooltip="column.showOverflowTooltip || false"
        :align="column.align || 'left'"
        :header-align="column.headerAlign"
        :class-name="column.className"
        :label-class-name="column.labelClassName"
        :selectable="column.selectable"
        :reserve-selection="column.reserveSelection || false">
    </el-table-column>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinMethods from '../mixins/methods'

export default Vue.extend({
    name: 'DefaultColumn',
    props: {
        column: {
            type: Object,
            default: null
        }
    },
    mixins: [ mixinMethods ]
})
</script>