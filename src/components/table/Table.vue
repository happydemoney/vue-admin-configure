<template>
  <!-- https://element.eleme.cn/#/zh-CN/component/table#table-attributes -->
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    ref="iTable">
    <!-- 暂无数据 -->
    <template slot="empty">
      <div>暂无数据模板</div>
    </template>
    <!-- https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes -->
    <template v-for="(item, index) in visibleColumns">
      <i-table-column :key="index" :column="item"></i-table-column>
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
          v-for="(item, index) in operation.options"
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

<script lang="ts">
import Vue from 'vue'
import ITableColumn from './column/index.vue'

export default Vue.extend({
  name: "iTable",
  components: {
    ITableColumn
  },
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    operation: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data: function() {
    return {};
  },
  computed: {
    visibleColumns() {
      if (this.columns.length === 0) {
        return [];
      }
      return this.columns.filter(item => {
        return item.columnVisible !== false;
      });
    }
  },
  methods: {
    itemLabel(row, item) {
      if (typeof item.label === "function") {
        return item.label(row, item.methods);
      }
      return item.label;
    },
    itemDisabled(row, item) {
      if (typeof item.disabled === "function") {
        return item.disabled(row, item.methods);
      }
      return item.disabled;
    },
    itemVisible(row, item) {
      if (typeof item.visible === "function") {
        return item.visible(row, item);
      }
      return item.visible !== false;
    },
    handleIconClick(row, item, index) {
      if (this.itemDisabled(row, item)) {
        return;
      }
      this.$emit("handle-icon-click", {
        methods: item.methods,
        row,
        index
      });
    },
    handleItemClick(row, item, index) {
      if (this.itemDisabled(row, item)) {
        return;
      }
      this.$emit("handle-icon-click", {
        methods: item.methods,
        row,
        index
      });
    },
    titleCaseUpper(str) {
      if (!str) {
        return "Undefined";
      }
      // 将首字母转大写
      return str.replace(/( |^)[a-z]/g, L => L.toUpperCase());
    },
    clearSelection() {
      this.$refs.iTable.clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$refs.iTable.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.iTable.toggleAllSelection();
    },
    toggleRowExpansion(row, expand) {
      this.$refs.iTable.toggleRowExpansion(row, expand);
    },
    setCurrentRow(row) {
      this.$refs.iTable.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.iTable.clearSort();
    },
    clearFilter(columnKey) {
      this.$refs.iTable.clearFilter(columnKey);
    },
    doLayout() {
      this.$refs.iTable.doLayout();
    },
    sort(prop, order) {
      this.$refs.iTable.sort(prop, order);
    }
  }
});
</script>
