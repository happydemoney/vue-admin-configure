<template>
  <div class="about">
    <h2>iForm example</h2>
    <i-form
        :model="form"
        :form-items="formItems">
    </i-form>
    <el-button @click="handleClick">点我看表单数据</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Form",
  data() {
    return {
        form: {
            name: ''
        },
        formItems: [
            {
                label: 'myName',
                renderConfig: {
                    key: 'name',
                    type: 'custom',
                    component: {
                        name: 'ElInput'
                    }
                }
            }
        ]
    };
  },
  methods: {
      handleClick () {
          console.log(this.form)
      }
  }
});
</script>
