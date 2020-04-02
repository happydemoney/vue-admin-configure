export default {
  methods: {
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
};
