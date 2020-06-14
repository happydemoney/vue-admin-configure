<template>
  <el-form
    v-bind="$attrs"
    v-on="$listeners"
    ref="iForm"
    :model="modelValue"
    :columns="columns"
  >
    <el-form-item
      v-for="(item, index) in formItems"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      :columns="item.columns || columns"
    >
      <form-element
        v-model="modelValue[item.renderConfig.key]"
        :renderConfig="item.renderConfig"
      >
      </form-element>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from "vue";
import formElement from "./element/index.vue";
import {
  ElForm,
  ValidateCallback,
  ValidateFieldCallback
} from "element-ui/types/form";

export interface RenderConfig {
  key: string;
  type: string;
  value: any;
  subtype: string;
  valueKey: string;
  options: [];
  optionsUrl: string;
  label: string | Function;
}
export interface DynamicObject {
  [key: string]: any;
}

export default Vue.extend({
  name: "iForm",
  components: { formElement },
  props: {
    formItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    model: {
      type: Object,
      default: null
    },
    columns: {
      type: Number,
      default: 1
    }
  },
  computed: {
    modelValue() {
      if (this.model) {
        return this.model;
      }
      if ((this.formItems as []).length > 0) {
        const model = {} as DynamicObject;
        (this.formItems as []).forEach((item: RenderConfig) => {
          model[item.key] = item.value || "";
        });
        return model;
      }
      return null;
    }
  },
  methods: {
    validate(callback: ValidateCallback) {
      (this.$refs.iForm as ElForm).validate(callback);
    },
    validateField(props: string | string[], callback?: ValidateFieldCallback) {
      (this.$refs.iForm as ElForm).validateField(props, callback);
    },
    resetFields() {
      (this.$refs.iForm as ElForm).resetFields();
    },
    clearValidate(props?: string | string[]) {
      (this.$refs.iForm as ElForm).clearValidate(props);
    }
  }
});
</script>
