<template>
  <div>
  <el-dropdown
    placement="bottom-end"
    class="h-p-100 flex-center"
  >
    <div class="flex-center">
      jiaberr <el-icon size="18" color="#409efc"><Avatar /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="openPersonal"
          ><span class="fz-12">个人中心</span></el-dropdown-item
        >
        <el-dropdown-item @click="passWordDialogVisible = true"
          ><span class="fz-12">修改密码</span></el-dropdown-item
        >
        <el-dropdown-item @click="loginOut"
          ><span class="fz-12">退出</span></el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dialog
    v-model="passWordDialogVisible"
    title="修改密码"
    width="500"
    align-center
    center
  >
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="原密码" prop="oldpass">
      <el-input v-model="ruleForm.oldpass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="新密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认新密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
  </el-form>
  <template #footer>
      <div class="dialog-footer">
        <el-button @click="passWordDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm()">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import router from "@/router"
import {reactive, ref} from 'vue'

const passWordDialogVisible = ref(false)
const ruleFormRef = ref()
const ruleForm = reactive({
  oldpass: '',
  pass: '',
  checkPass:''
})


const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入新密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次密码不一致！"))
  } else {
    callback()
  }
}

const rules = reactive({
  pass: [{ required: true, message: '请输入新密码', trigger: 'blur'  }],
  checkPass: [{ required: true,validator: validatePass, trigger: 'blur' }],
  oldpass: [{ required: true, message: '请输入原密码', trigger: 'blur'  }],
})


const submitForm = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
      passWordDialogVisible.value = fasle
      // 传新密码到后台等逻辑
    }
  })
}
// 打开个人中心
const openPersonal = () => {

}

// 修改密码
const handlePassWord = () => {

}

// 退出登录
const loginOut = () => {
    sessionStorage.clear()
    router.replace('/login')
}
</script>

<style  scoped>
</style>