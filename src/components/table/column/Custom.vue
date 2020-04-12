<template>
  <el-table-column
    :type="column.type || 'default'"
    :label="processValue(column.label || '')"
    :column-key="column.columnKey || ''"
    :prop="column.prop || ''"
    :width="column.width || ''"
    :min-width="column.minWidth || ''"
    :fixed="column.fixed"
    :render-header="column.renderHeader"
    :sortable="column.sortable || false"
    :sort-method="column.sortMethod"
    :sort-by="column.sortBy"
    :sort-orders="column.sortOrders || ['ascending', 'descending', null]"
    :resizable="column.resizable !== undefined ? column.resizable : true"
    :formatter="column.formatter"
    :show-overflow-tooltip="column.showOverflowTooltip || false"
    :align="column.align || 'left'"
    :header-align="column.headerAlign"
    :class-name="column.className"
    :label-class-name="column.labelClassName"
    :selectable="column.selectable"
    :reserve-selection="column.reserveSelection || false"
    :filters="processValue(column.filters)"
    :filter-placement="column.filterPlacement"
    :filter-multiple="
      column.filterMultiple !== undefined ? column.filterMultiple : true
    "
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue">
    <template slot-scope="scope">
      <span v-if="column.formatter">{{
        column.formatter(scope.row, scope.column)
      }}</span>
      <span v-else-if="!column.component">{{ scope.row[column.prop] }}</span>
      <render-custom-component
        v-else-if="column.component && column.component.name"
        v-model="scope.row[column.prop]"
        :component-name="column.component.name"
        :props="column.component.props ? column.component.props : null"
        :scope="scope">
      </render-custom-component>
      <render-component
        v-else-if="column.component && column.component.render"
        :render-function="column.component.render"
        :scope="scope">
      </render-component>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinMethods from '../mixins/methods'
import RenderComponent from './RenderComponent.vue'
import RenderCustomComponent from './RenderCustomComponent.vue'

export default Vue.extend({
    name: 'CustomColumn',
    components: {
      RenderComponent,
      RenderCustomComponent
    },
    props: {
        column: {
            type: Object,
            default: null
        }
    },
    mixins: [ mixinMethods ]
})
</script>