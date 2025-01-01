<template>
      <el-date-picker
        v-model="localValue"
        :type="type"
        :placeholder="placeholder"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :format="format"
      />
</template>

<script setup>
import { ref } from "vue"

const prop = defineProps({
    type: {
        Type: String,
        default: 'datetime'
    },
    placeholder: {
        Type: String,
        default: '请选择时间'
    },
    startPlaceholder: {
        Type: String,
        default: '请选择开始时间'
    },
    endPlaceholder: {
         Type: String,
        default: '请选择结束时间'
    },
    format: {
        Type: String,
        default: 'YYYY-MM-DD HH:mm:ss'
    }
})

const localValue = ref('')

</script>

<style scoped>

</style>