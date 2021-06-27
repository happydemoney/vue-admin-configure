<template>
  <div class="wrapper">
    <h2>tabs draggable example</h2>
    <el-button @click="onTabAdd" class="tabAdd">添加新tab</el-button>
    <draggable class="tabBox" :list="tabList">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        class="tab"
        :class="{ tabActive: item.tabIdx === tabNum }"
        @click="onTabClick(item, index)"
      >
        {{ item.name }}
        <i class="el-icon-close" @click.stop="onTabDelete(item, index)"></i>
      </div>
    </draggable>
    <div class="contentBox">
      <template v-for="(item, index) in tabList">
        <div class="tabContent" v-show="item.tabIdx === tabNum" :key="index">
          {{ item.other }}--{{ item.tabIdx }}
          <component :is="getComponentName(tabNum)" />
        </div>
      </template>
    </div>
    <div>
      <h1>tabNum</h1>
      <div>{{ tabNum }}</div>
      <h1>tabList:</h1>
      <div>{{ JSON.stringify(tabList) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";

export interface TabItem {
  name: string;
  tabIdx: number;
  other: string;
}

export interface ComponentMapInterface {
  [key: number]: string;
}

export default Vue.extend({
  name: "About",
  components: {
    draggable,
    BubbleSort: () => import("../algorithm/sort/bubble.vue"),
    SelectSort: () => import("../algorithm/sort/select.vue"),
    QuickSort: () => import("../algorithm/sort/quick.vue")
  },
  data() {
    return {
      tabList: [
        { name: "冒泡排序", tabIdx: 1, other: "==冒泡排序==" },
        { name: "选择排序", tabIdx: 2, other: "==选择排序==" },
        { name: "快速排序", tabIdx: 3, other: "==快速排序==" }
      ],
      tabListCount: 3,
      tabNum: 1
    };
  },
  mounted() {
    // this.$dragging.$on("dragged", ({ value }) => {
    //   console.log(value.item);
    //   console.log(value.list);
    // });
    // this.$dragging.$on("dragend", () => {});
  },
  methods: {
    onTabAdd() {
      this.tabListCount++;
      this.tabList.push({
        other: "内容" + this.tabListCount,
        tabIdx: this.tabListCount,
        name: "排序算法" + this.tabListCount
      });
    },
    onTabDelete(item: TabItem, index: number) {
      console.log(item, index, "del");
      this.tabList.splice(index, 1);
    },
    onTabClick(item: TabItem, index: number) {
      this.tabNum = item.tabIdx;
      console.log(item, index, "click");
    },
    getComponentName(index: number) {
      const ComponentMap = {
        1: "BubbleSort",
        2: "SelectSort",
        3: "QuickSort"
      } as ComponentMapInterface;
      return ComponentMap[index] || "BubbleSort";
    }
  }
});
</script>

<style scoped>
.wrapper {
  padding: 8px 16px;
}
.tabBox {
  display: inline-block;
  padding: 0 16px;
  width: 100%;
  overflow: auto;
  border-bottom: 1px solid #dcdee2;
  margin-bottom: 16px;
}
.tab {
  list-style: none;
  float: left;
  width: 100px;
  cursor: default;

  margin: 0;
  margin-right: 4px;
  height: 32px;
  padding: 5px 12px 4px;
  border: 1px solid #dcdee2;
  border-bottom: 0;
  border-radius: 0 0 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: #fff;
}
.tab:hover {
  color: #57a3f3;
}

.icon {
  float: right;
  cursor: pointer;
}
.tabAdd {
  position: relative;
  float: left;
  left: 16px;
  border-radius: 0;
  margin-bottom: 16px;
}

.tabActive {
  padding-bottom: 5px;
  background: #fff;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  border-color: #dcdee2;
  color: #294bff;
}
</style>
