<template>
    <el-form
        v-bind="$attrs"
        v-on="$listeners"
        ref="iForm"
        :model="modelValue"
        :columns="columns">
        <el-form-item
            v-for="(item, index) in formItems"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :columns="item.columns || columns">
            <form-element
                v-model="modelValue[item.key]"
                :renderConfig="item.renderConfig">
            </form-element>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import formElement from './element/index.vue'

export default Vue.extend({
    name: 'iForm',
    components: { formElement },
    props: {
        formItems: {
            type: Array,
            default: function () {
                return []
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
        modelValue () {
            if (this.model) {
                return this.model
            }
            if (this.formItems.length > 0) {
                const model = {}
                this.formItems.forEach(item => {
                    model[item.key] = item.value || ''
                })
            }
            return null
        }
    }
})
</script>