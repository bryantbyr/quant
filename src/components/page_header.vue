<template>
    <div id="header" class="header">
      <div class="title" @click="pageIndex">
        智能量化投资系统
      </div>
      <div class="login-button" @click="loginHandle" v-if="accountName === '' || accountName === null">
        登录
      </div>
      <el-dropdown class="login-button" @command="handleCommand" v-else>
        <div >
          {{accountName}}
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" icon="el-icon-user" v-if="accountName.indexOf('admin') !== -1">用户管理</el-dropdown-item>
          <el-dropdown-item command="c" icon="el-icon-setting">个人信息</el-dropdown-item>
          <el-dropdown-item command="b" icon="el-icon-switch-button">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      accountName: ''
    }
  },
  mounted () {
    this.accountName = localStorage.getItem('user')
  },
  methods: {
    loginHandle () {
      window.location.href = '/#/login'
    },
    loginLogout () {
      localStorage.removeItem('user')
      location.reload()
    },
    handleCommand (cmd) {
      if (cmd === 'a') {
        this.userAdmin()
        return
      }
      if (cmd === 'b') {
        this.loginLogout()
      }
      this.userInfo()
    },
    userAdmin () {
      window.location.href = '/#/userAdmin'
    },
    userInfo () {
      window.location.href = '/#/userInfo'
    },
    pageIndex () {
      window.location.href = '/#/index'
    }
  }
}
</script>

<style scoped>
  .header{
    height: 50px;
    width: 100%;
    background: cornflowerblue;
    position:relative;
  }
  .title{
    position: absolute;
    color: white;
    top: 8px;
    font-size: 24px;
    font-weight: bolder;
    left: 3%;
    cursor: pointer;
  }
  .login-button{
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 10px;
    font-weight: bolder;
    padding: 5px 10px;
    background: white;
    color: cornflowerblue;
  }
</style>
