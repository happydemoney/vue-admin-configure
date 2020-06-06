[TOC]
##	el-table二次封装
为了统一前端表格的展示风格，现对`el-table`组件进行二次封装，统一表格组件入口，方便以后统一修改表格风格
`无特殊需求不要在引用公共表格组件后改变其样式`

##	组件基本使用
当`i-table`元素中注入`table-data`对象数组以及`table-label`对象数组后即可显示简单表格数据，`table-label`对象中用label属性来定义表格的列名，可以使用width属性来定义列宽。
```
<template>
  <i-table
    :table-data="tableData"
    :table-label="tableLabel"
  ></i-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      tableLabel: [
        { label: '日期', prop: 'date' },
		{ label: '姓名', prop: 'name' },
		{ label: '地址', prop: 'address' }
      ]
    }
  }
}
</script>
```

##	参数说明

###	table-attributes (events)

```
// 参考文档： https://element.eleme.cn/#/zh-CN/component/table#table-attributes
// 表格属性和事件绑定直接绑定在组件标签上即可
<i-table
	...
	max-height="500"
	@select="handleTableSelect"
></i-table>
```

###	table-column-attributes

* 继承el-table部分

```
// 参考文档： https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes
// 表格column属性通过属性table-label传入，以小驼峰命名规则（比如：min-width ---> minWidth）
<i-table
	...
	:table-label="tableLabel"
></i-table>

<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
        { label: '日期', prop: 'date', align: 'center', width: '200' },
		{ label: '姓名', prop: 'name' },
		{ label: '地址', prop: 'address' }
      ]
  },
  ...
}
</script>

```

*	自定义列显示

```
// 0. 列有可能无数据，需要自定义显示成 --  推荐formatter函数
<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
	  	...,
		{
			label: '代号',
			prop: 'code',
			formatter: (row, column) => {
				if (row.code) {
					return row.code
				}
				return '--'
			}
		}
      ]
  },
  ...
}
</script>

// 1. 列数据有多种状态，需要自定义显示成不同颜色的文案 -- 推荐 component render
<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
	  	...,
		{
			label: '空闲状态',
          prop: 'idleStatus',
          component: {
            render: (h, row) => {
              const textMapping = {
                0: '占用',
                1: '空闲',
                2: '清理中',
                3: '清理失败',
                4: '执行任务',
                5: '异常'
              }
              return h('span', {
                class: {
                  'idle-status': true,
                  'occupy': row.idleStatus === 0,
                  'free': row.idleStatus === 1,
                  'cleaning': row.idleStatus === 2,
                  'clean-fail': row.idleStatus === 3,
                  'exe-tasks': row.idleStatus === 4,
                  'abnormal': row.idleStatus === 5
                }
              }, textMapping[row.idleStatus] || '--')
            }
          } }
      ]
  },
  ...
}
</script>
// idleStatus = 1时渲染元素为： <span class="idle-status free">空闲</span>

// 2. 列需要渲染成不同element其它组件或自定义组件 -- 推荐 component name render
<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
	  	...,
		{
		  label: '路径',
          prop: 'resourceUrl',
          component: {
            name: 'ElInput', // el-input组件示例： 具体名字可查询 ./node_modules/element-ui/packages
            props: {
              size: 'small'
            }
          }
      ]
  },
  ...
}
</script>
// 渲染元素为： <el-input size="small" v-model="resourceUrl"/>

```
// 3. 列需要渲染多个标签时 -- 推荐 component name render

		{
          label: '版本号',
          minWidth: '120',
          component: {
            render: (h, row) => {
              const textMapping = {
                0: '未发布',
                1: ''
              }
              return h(
                'div',
                // {},
                [
                  h('span', row.plugVersion),
                  h('span', {
                    class: {
                      'noIssue': row.signature === 0,
                      'isIssue': row.signature === 1
                    }
                  }, textMapping[row.signature])
                ]
              )
            }
          }
        }

注：h接收三个参数，参一标签，参二可传，做标签的属性绑定，参三接收数组，可创建多个子标签

// 4. 列需要绑定事件的用法 -- 推荐 component name render

		{ label: '文件路径',
          prop: 'fileUrl',
          showOverflowTooltip: true,
          minWidth: '250',
          component: {
            render: (h, row) => {
              return h('span', {
                domProps: {
                  row: row
                },
                class: {
                  'download_apk': true
                },
                on: {
                  click: (e) => {
                    this.handleDownloadApk(e.target.row)
                  }
                }
              }, row.fileUrl || '--')
            }
          }
        }
		
注：一定要domProps接收传递的数据，再用event的target接收


*	自定义列属性

```
// 0: columnVisible - 控制列显示或隐藏
<i-table
	...
	:table-label="tableLabel"
></i-table>

<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
		...,
		{ label: '地址', prop: 'address', columnVisible: this.columnVisible }
      ]
  },
  methods: {
  	columnVisible () {
		return this.data.showAddress
	}
  }
}
</script>
```


*	多级表头

```
// 自定义属性 children (Array / Function)
<i-table
	...
	:table-label="tableLabel"
></i-table>

<script>
export default {
  ...,
  data () {
    return {
      tableLabel: [
		...,
		{ label: '用户信息', prop: 'userInfo', children: [
			{
				label: '用户名', prop: 'userName'
			},
			{
				label: '用户性别', prop: 'userSex'
			}
		] }
      ]
  }
}
</script>
```


###	操作列相关配置（待开发）

*	配置tableOptions,暂时提供了两种类型 -- svgIcon以及dropdown（多操作图标折叠展示）

演示基本用法

```
<template>
  <i-table
    :table-option="tableOption"
    @handle-icon-click="handleIconClick"
  ></i-table>
</template>

<script>
export default {
  data () {
    return {
	  ...,
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          {
            type: 'SvgIcon',
            config: {
              icon: 'play',
              iconSize: 15
            },
            label: '执行',
            methods: 'exe'
          },
		  {
            type: 'dropdown',
            label: i18n.messages[i18n.locale].common.button.more,
            iconList: [{
              config: {
                icon: 'edit',
                iconSize: 18
              },
              label: i18n.messages[i18n.locale].common.button.edit,
              methods: 'edit'
            }]
          }
        ]
      }
    }
  },
  ...,
  methods: {
    handleIconClick ({ methods, row, index }) {
      if (methods === 'exe') {
        console.log('执行事件')
      } elseif (methods === 'edit') {
        console.log('编辑事件')
	  }
    }
  }
}
</script>
```

如果有图标有状态时，需要切换显示一个或多个图标

```
<script>
export default {
  ...,
  data () {
    return {
       tableOption: {
        label: '操作',
        width: '200',
        options: [
          {
            type: 'SvgIcon',
            config: {
              icon: this.iconFunc,
              iconSize: 15
            },
            label: this.labelFunc,
            methods: 'exe'
          }
		]
	  }
  },
  methods: {
  	iconFunc (row) {
		if (row.state === 0) {
			return 'enable'
		}
		return 'disable'
	},
	labelFunc (row) {
		if (row.state === 0) {
			return '启用'
		}
		return '禁用'
	}
  }
}
</script>
```

如果图标需要根据row的某个值联动隐藏或显示时
```
<script>
export default {
  ...,
  data () {
    return {
       tableOption: {
        label: '操作',
        width: '200',
        options: [
          {
            type: 'SvgIcon',
            config: {
              icon: 'issue'
            },
            label: '发布'
            methods: 'issue',
			visible:this.visible
          }
		]
	  }
  },
  methods: {
  	visible (row) {
		return row.status===0//默认返回true值
	}
  }
}
</script>
```
* <slot></slot>

```
<i-table
	:table-data="tableData"
	:table-label="tableLabel"
	:table-option="tableOption"
	@handle-icon-click="handleIconClick"
	:max-height="450"
	>
	<el-table-column label="操作">
		<template slot-scope="scope">
		... // 操作按钮放置
		</template>
	</el-table-column>
</i-table>
```
##	其它说明

###	svgIcon图片添加规则

名字前缀为icon-，比如执行任务图标命令为icon-play，配置时输入icon: play即可
