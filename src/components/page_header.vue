<template>
    <div id="header" class="header">
      <div class="title">
        智能量化投资系统
      </div>
      <div class="login-button" v-if="accountName === '' || accountName === null" @click="loginHandle" >
        登录
      </div>
      <div class="login-button" v-else @click="loginLogout" >
        {{accountName}}
      </div>
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
