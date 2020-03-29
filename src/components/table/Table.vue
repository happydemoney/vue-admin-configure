<template>
  <!-- https://element.eleme.cn/#/zh-CN/component/table#table-attributes -->
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    header-row-class-name="grayTableHeader"
    ref="iTable">
    <!-- 暂无数据 -->
    <template slot="empty">
      <div>暂无数据模板</div>
    </template>
    <!-- https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes -->
    <template v-for="(item,index) in visibleColumns">
      <el-table-column
        v-if="!item.type || item.type === 'default'"
        :key="index"
        :type="item.type || 'default'"
        :label="processValue(item.label || '')"
        :column-key="item.columnKey || ''"
        :prop="item.prop || ''"
        :width="item.width || ''"
        :min-width="item.minWidth || ''"
        :fixed="item.fixed"
        :render-header="item.renderHeader"
        :sortable="item.sortable || false"
        :sort-method="item.sortMethod"
        :sort-by="item.sortBy"
        :sort-orders="item.sortOrders || ['ascending', 'descending', null]"
        :resizable="item.resizable !== undefined ? item.resizable: true"
        :formatter="item.formatter"
        :show-overflow-tooltip="item.showOverflowTooltip || false"
        :align="item.align || 'left'"
        :header-align="item.headerAlign"
        :class-name="item.className"
        :label-class-name="item.labelClassName"
        :selectable="item.selectable"
        :reserve-selection="item.reserveSelection || false"
        :filters="processValue(item.filters)"
        :filter-placement="item.filterPlacement"
        :filter-multiple="item.filterMultiple !== undefined ? item.filterMultiple: true"
        :filter-method="item.filterMethod"
        :filtered-value="item.filteredValue">
        <template slot-scope="scope">
          <span v-if="item.formatter">{{ item.formatter(scope.row, scope.column) }}</span>
          <span v-else-if="!item.component">{{ scope.row[item.prop] }}</span>
          <render-custom-component
            v-else-if="item.component && item.component.name"
            v-model="scope.row[item.prop]"
            :component-name="item.component.name"
            :props="item.component.props ? item.component.props : null"
            :scope="scope">
          </render-custom-component>
          <render-component
            v-else-if="item.component && item.component.render"
            :render-function="item.component.render"
            :scope="scope">
          </render-component>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="index"
        :type="item.type"
        :label="processValue(item.label || '')"
        :column-key="item.columnKey || ''"
        :prop="item.prop || ''"
        :width="item.width || ''"
        :min-width="item.minWidth || ''"
        :fixed="item.fixed"
        :resizable="item.resizable !== undefined ? item.resizable: true"
        :formatter="item.formatter"
        :show-overflow-tooltip="item.showOverflowTooltip || false"
        :align="item.align || 'left'"
        :header-align="item.headerAlign"
        :class-name="item.className"
        :label-class-name="item.labelClassName"
        :selectable="item.selectable"
        :reserve-selection="item.reserveSelection || false">
      </el-table-column>
    </template>
    <slot></slot>
    <!-- table option: 操作列 -->
    <el-table-column
      v-if="operation.label"
      :width="operation.width"
      :label="operation.label"
      :align="operation.align || 'left'">
      <template slot-scope="scope">
        <component
          v-for="(item,index) in operation.options"
          :key="index"
          :is="item.type"
          :title="itemLabel(scope.row, item)"
          :config="item.config"
          :tableRow="scope.row"
          :disabled="itemDisabled(scope.row, item)"
          v-show="itemVisible(scope.row, item)"
          @click="handleIconClick(scope.row, item, index)"
          :iconList="item.iconList"
          @item-click="handleItemClick"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import renderComponent from './column/RenderComponent.vue'
import renderCustomComponent from './column/RenderCustomComponent.vue'
import TableMethods from './mixins/tableMethods'

const componentsMap = {
  renderComponent,
  renderCustomComponent
}

export default {
  name: 'iTable',
  components: componentsMap,
  mixins: [ TableMethods ],
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    operation: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    visibleColumns () {
      if (this.columns.length === 0) {
        return []
      }
      return this.columns.filter(item => {
        return item.columnVisible !== false
      })
    }
  },
  methods: {
    processValue (value) {
      if (typeof value === 'function') {
        return value()
      }
      return value
    },
    itemLabel (row, item) {
      if (typeof item.label === 'function') {
        return item.label(row, item.methods)
      }
      return item.label
    },
    itemDisabled (row, item) {
      if (typeof item.disabled === 'function') {
        return item.disabled(row, item.methods)
      }
      return item.disabled
    },
    itemVisible (row, item) {
      if (typeof item.visible === 'function') {
        return item.visible(row, item)
      }
      return item.visible !== false
    },
    handleIconClick (row, item, index) {
      if (this.itemDisabled(row, item)) {
        return
      }
      this.$emit('handle-icon-click', {
        methods: item.methods,
        row,
        index
      })
    },
    handleItemClick (row, item, index) {
      if (this.itemDisabled(row, item)) {
        return
      }
      this.$emit('handle-icon-click', {
        methods: item.methods,
        row,
        index
      })
    },
    titleCaseUpper (str) {
      if (!str) {
        return 'Undefined'
      }
      // 将首字母转大写
      return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
    }
  }
}
</script>
