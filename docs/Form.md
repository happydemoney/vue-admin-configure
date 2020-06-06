[TOC]
##	需求背景

为了满足更多的业务场景，提供更多的能力（比如layout布局配置、label提示等）

##	组件基本使用

当`i-form`元素中注入`form-items`对象数组即可显示简单表单数据，使用`columns`定义列数，`model`在需要使用校验时必填,`form-items`对象中用label属性来定义表单的项名，`renderConfig`定义当前表单项组件显示类型(input / select)等等


```
<i-form
	label-position="left"
	label-width="120px"
	:columns=1
	:model="form"
	:form-items="formItems">
</i-form>

<script>
export default {
	data () {
		return {
			form: {
        		name: ''
			},
			 formItems: [
				{
				  label: '活动名称',
				  labelTips: {
					content: '我是活动名称'
				  },
				  renderConfig: {
					key: 'name',
					type: 'input'
				  }
				}
			]
		}
	}
}
</script>
```

##	Form Attributes

```
// 参考文档： https://element.eleme.cn/#/zh-CN/component/form#form-attributes
```
> 自定义及重写属性部分

| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| label-width  | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。  |  string | —   | '100px'  |
| columns | 表单每行列数（布局相关）  | number  | 1/2/3/4  | 1  |

##	Form-Item Attributes

> 自定义及重写属性部分

| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| labelTips  | 表单域标签提示信息，使用的el-prover组件,最低需填入 { content: 'label介绍' }  |  object | — | —  |
| columns  | 当前表单项可占空间（1标识占满整行，2表示占二分之一，3表示占三分之一，4四分之一） | Number  | 1/2/3/4  | 随form的columns  |
| renderConfig | 表单项渲染配置 | object  | —  | —  |

###	renderConfig


| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| key  | 字段标识  | String  | —  | —  |
| type  | 表单项渲染类型  | String  | input / select / radio / textarea / multiselect / checkbox / textlist / treetable / form / custom | input  |
| value  | 表单项默认值，如果表单配置了model可不填此项，或者干脆不填  | any  | —  | '' |
| subtype  | type为input时指定  | String  | text / number  | text  |
| component  | type为custom时指定,name属性指定要渲染的组件（已注册的全局组件，比如ElInput,ElSwitch），props属性指定要渲染组件的props，具体用法可见下方典型表单示例  | Object  | —  | —  |
| renderConfig  | type为treetable/form时指定  | Array  | —  | —  |
| valueKey  | type为multiselect时value 唯一标识的键名，绑定值为对象类型时必填 | String  | - | value |
| options  | type为select / checkbox / radio 时需指定  | Array  | —  | —  |
| optionsUrl  | 外部数据源（接口的url地址）  | String  | —  | —  |

##	校验相关

```
// i-form
model必填
rules 统一配置

// i-form-item
prop必填
rules 单一配置
```	

##	典型表单示例

```
<template>
  <div style="width: 584px; margin: 0 auto">
    <h1>form example(典型表单)</h1>
    <i-form
      ref="oForm"
      label-position="left"
      label-width="120px"
      :columns=1
      :model="form"
      :rules="rules"
      :form-items="formItems">
    </i-form>
    <el-input type="textarea" rows="5" :value="formString"/>
    <el-button @click="resetRules">重置校验</el-button>
  </div>
</template>

<script>
export default {
  name: 'formExample',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      formItems: [
        {
          label: '活动名称',
          labelTips: {
            content: '我是活动名称'
          },
          prop: 'name',
          renderConfig: {
            key: 'name',
            type: 'input',
            subtype: 'text'
          }
        },
        {
          label: '活动区域',
          prop: 'region',
          renderConfig: {
            key: 'region',
            type: 'select',
            options: [
              { label: '区域一', value: 'shanghai' },
              { label: '区域二', value: 'beijing' }
            ]
          }
        },
        {
          label: '活动截止',
          prop: 'date',
          renderConfig: {
            key: 'date',
            type: 'custom',
            component: {
              name: 'ElDatePicker',
              props: {
                type: 'daterange',
                rangeSeparator: '至',
                startPlaceholder: '开始日期',
                endPlaceholder: '结束日期',
                size: 'small'
              }
            }
          }
        },
        {
          label: '即时配送',
          prop: 'delivery',
          renderConfig: {
            key: 'delivery',
            type: 'custom',
            component: {
              name: 'ElSwitch'
            }
          }
        },
        {
          label: '活动性质',
          prop: 'type',
          renderConfig: {
            key: 'type',
            type: 'checkbox',
            options: [
              { label: '美食/餐厅线上活动', value: '1' },
              { label: '地推活动', value: '2' },
              { label: '线下主题活动', value: '3' },
              { label: '单纯品牌曝光', value: '4' }
            ]
          }
        },
        {
          label: '特殊资源',
          prop: 'resource',
          renderConfig: {
            key: 'resource',
            type: 'radio',
            options: [
              {
                'label': '线上品牌商赞助',
                'value': true
              },
              {
                'label': '线下场地免费',
                'value': false
              }
            ]
          }
        },
        {
          label: '活动形式',
          prop: 'desc',
          renderConfig: {
            key: 'desc',
            type: 'textarea'
          }
        }
      ]
    }
  },
  computed: {
    formString () {
      return JSON.stringify(this.form)
    }
  },
  methods: {
    resetRules () {
      this.$refs.oForm.clearValidate()
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-form {
    margin-bottom: 24px;
  }
</style>
```
