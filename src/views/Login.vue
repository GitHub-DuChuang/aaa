<template>
  <div class="login-container">
    <div class="form-container">
      <el-form label-width="80px" :model="form" :rules="rules" ref="form">
        <el-form-item label="手机号:"  prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queding">确定</el-button>
          <el-button @click="quxiao">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const shouji = (rule, value, callback) => {
      if (/^1[0-9]{10}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    const mima = (rule, value, callback) => {
      if (/^[0-9]{6,18}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的密码'))
      }
    }
    return {
      form: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          { required: true, trigger: 'blur', message: '手机号不能为空' },
          { validator: shouji, trigger: 'blur' }
        ],
        code: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          { validator: mima, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    queding () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push(
            {
              path: '/'
            }
          )
        }
        return false
      })
    },
    quxiao () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  width: 100vw;
  height: 100vh;

  background-color: rgb(238, 241, 246);
  .form-container {
    width: 500px;
    height: 400px;
    border: 1px solid #b3c0d1;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
