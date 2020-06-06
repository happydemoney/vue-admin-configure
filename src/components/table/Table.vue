<template>
  <!-- https://element.eleme.cn/#/zh-CN/component/table#table-attributes -->
  <el-table v-bind="$attrs" v-on="$listeners" ref="iTable">
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
      :align="operation.align || 'left'"
    >
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
          @item-click="handleItemClick"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from "vue";
import ITableColumn from "./column/index.vue";
import { ElTable } from "element-ui/types/table";
export interface OperationItem {
  type: string;
  config: object;
  label: string | Function;
  methods: string;
  visible: boolean | Function;
  disabled: boolean | Function;
}

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
      return this.columns.filter((item: any) => item.columnVisible !== false);
    }
  },
  methods: {
    itemLabel(row: object, item: OperationItem) {
      if (typeof item.label === "function") {
        return item.label(row, item.methods);
      }
      return item.label;
    },
    itemDisabled(row: object, item: OperationItem) {
      if (typeof item.disabled === "function") {
        return item.disabled(row, item.methods);
      }
      return item.disabled;
    },
    itemVisible(row: object, item: OperationItem) {
      if (typeof item.visible === "function") {
        return item.visible(row, item);
      }
      return item.visible !== false;
    },
    handleIconClick(row: object, item: OperationItem, index: number) {
      if ((this as any).itemDisabled(row, item)) {
        return;
      }
      this.$emit("handle-icon-click", {
        methods: item.methods,
        row,
        index
      });
    },
    handleItemClick(row: object, item: OperationItem, index: number) {
      if ((this as any).itemDisabled(row, item)) {
        return;
      }
      this.$emit("handle-icon-click", {
        methods: item.methods,
        row,
        index
      });
    },
    titleCaseUpper(str: string) {
      if (!str) {
        return "Undefined";
      }
      // 将首字母转大写
      return str.replace(/( |^)[a-z]/g, (L: string) => L.toUpperCase());
    },
    clearSelection() {
      (this.$refs.iTable as ElTable).clearSelection();
    },
    toggleRowSelection(row: object, selected?: boolean) {
      (this.$refs.iTable as ElTable).toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      (this.$refs.iTable as ElTable).toggleAllSelection();
    },
    toggleRowExpansion(row: object, expanded?: boolean) {
      (this.$refs.iTable as ElTable).toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row?: object) {
      (this.$refs.iTable as ElTable).setCurrentRow(row);
    },
    clearSort() {
      (this.$refs.iTable as ElTable).clearSort();
    },
    clearFilter() {
      (this.$refs.iTable as ElTable).clearFilter();
    },
    doLayout() {
      (this.$refs.iTable as ElTable).doLayout();
    },
    sort(prop: string, order: string) {
      (this.$refs.iTable as ElTable).sort(prop, order);
    }
  }
});
</script>
