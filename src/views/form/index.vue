<template>
  <div class="about">
    <h2 style="text-align: center">iForm example</h2>
    <i-form
      ref="iForm"
      label-position="left"
      label-width="120px"
      :columns="1"
      :model="form"
      :rules="rules"
      :form-items="formItems"
    >
    </i-form>
    <el-input type="textarea" rows="5" :value="formString" />
    <el-button @click="resetRules">重置校验</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ElForm } from "element-ui/types/form";
declare module "vue/types/vue" {
  interface Vue {
    [key: string]: any;
  }
}

export default Vue.extend({
  name: "FormExample",
  data() {
    return {
      form: {
        name: "",
        // region: '',
        date: "",
        delivery: false,
        // type: [],
        // resource: '',
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      formItems: [
        {
          label: "活动名称",
          labelTips: {
            content: "我是活动名称"
          },
          prop: "name",
          renderConfig: {
            key: "name",
            type: "custom",
            component: {
              name: "ElInput"
            }
          }
        },
        // {
        //   label: '活动区域',
        //   prop: 'region',
        //   renderConfig: {
        //     key: 'region',
        //     type: 'select',
        //     options: [
        //       { label: '区域一', value: 'shanghai' },
        //       { label: '区域二', value: 'beijing' }
        //     ]
        //   }
        // },
        {
          label: "活动截止",
          prop: "date",
          renderConfig: {
            key: "date",
            type: "custom",
            component: {
              name: "ElDatePicker",
              props: {
                type: "daterange",
                rangeSeparator: "至",
                startPlaceholder: "开始日期",
                endPlaceholder: "结束日期",
                size: "small"
              }
            }
          }
        },
        {
          label: "即时配送",
          prop: "delivery",
          renderConfig: {
            key: "delivery",
            type: "custom",
            component: {
              name: "ElSwitch"
            }
          }
        },
        // {
        //   label: '活动性质',
        //   prop: 'type',
        //   renderConfig: {
        //     key: 'type',
        //     type: 'checkbox',
        //     options: [
        //       { label: '美食/餐厅线上活动', value: '1' },
        //       { label: '地推活动', value: '2' },
        //       { label: '线下主题活动', value: '3' },
        //       { label: '单纯品牌曝光', value: '4' }
        //     ]
        //   }
        // },
        // {
        //   label: '特殊资源',
        //   prop: 'resource',
        //   renderConfig: {
        //     key: 'resource',
        //     type: 'radio',
        //     options: [
        //       {
        //         'label': '线上品牌商赞助',
        //         'value': true
        //       },
        //       {
        //         'label': '线下场地免费',
        //         'value': false
        //       }
        //     ]
        //   }
        // },
        {
          label: "活动形式",
          prop: "desc",
          renderConfig: {
            key: "desc",
            type: "custom",
            component: {
              name: "ElInput",
              subType: "textarea"
            }
          }
        }
      ]
    };
  },
  computed: {
    formString() {
      return JSON.stringify(this.form);
    }
  },
  methods: {
    resetRules() {
      (this.$refs.iForm as ElForm).clearValidate();
    }
  }
});
</script>

<style lang="scss" scoped>
.el-form {
  margin-bottom: 24px;
}
</style>
