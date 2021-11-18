<template>
  <div id="index">
    <div class="header">
    </div>
    <div class="content">
      <div class="login-box">
        <h1>统一登录系统</h1>
        <div>
          <el-input style="width: 75%;" v-model="account">
            <template slot="prepend">账号</template>
          </el-input>
        </div>
        <div style="margin-top: 30px;">
          <el-input style="width: 75%;" v-model="password" show-password>
            <template slot="prepend">密码</template>
          </el-input>
        </div>
        <div style="margin-top: 30px;">
           <el-button type="primary" style="width: 75%;" round @click="login">登录</el-button>
        </div>
        <div style="margin: 40px 0 20px;">
          <hr style="width: 75%;color: darkgray"/>
        </div>
        <div style="color: cornflowerblue;cursor: pointer;">
          <a href="/#/signin" style="color: cornflowerblue;text-decoration: none;">注册账号</a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a style="color: cornflowerblue;text-underline: none;">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.account.length === 0) {
        return
      }
      localStorage.setItem('user', this.account)
      window.location.href = '/#/index'
    }
  }
}
</script>

<style scoped>
  #index{
    margin: 0 0!important;
  }
  .header{
    height: 50px;
    width: 100%;
    background: cornflowerblue;
    position:relative;
  }
  .content{
    position:relative;
    height: calc(100vh - 50px);
    background: antiquewhite;
  }
  .login-box{
    position: absolute;
    right: 10%;
    top: 100px;
    width: 500px;
    height: 400px;
    background: white;
    box-shadow: grey 0 0 10px;
  }
</style>
