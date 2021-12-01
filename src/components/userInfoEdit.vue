<template>
  <div id="user-info-edit">
    <PageHeader ref="header"></PageHeader>
    <div class="user-info-body">
      <div class="user-name">
        编辑个人信息
      </div>
      <div class="hr"></div>
      <div class="user-mail user-info-row">
        <span class="user-field-tag">邮箱：</span><el-input v-model="userEmail"></el-input>
      </div>
      <div class="hr"></div>
      <div class="user-address user-info-row">
        <span class="user-field-tag">地址：</span><el-input v-model="userAddress"></el-input>
      </div>
      <div class="hr"></div>
      <div class="user-phone user-info-row">
        <span class="user-field-tag">手机：</span><el-input v-model="userPhone"></el-input>
      </div>
      <div class="hr"></div>
      <div class="user-education user-info-row">
        <span class="user-field-tag">教育：</span><el-input v-model="userEducation"></el-input>
      </div>
      <div class="hr"></div>
      <div class="user-education user-info-row">
        <span class="user-field-tag">用户名：</span><el-input v-model="userName"></el-input>
      </div>
    </div>
    <div>
      <el-button type="primary" @click="pageUser">取消</el-button>
      <el-button type="success" @click="pageUser">保存</el-button>
    </div>
  </div>
</template>

<script>
import PageHeader from './page_header'
export default {
  name: 'userInfo.vue',
  components: {PageHeader},
  data () {
    return {
      header: '',
      userEmail: '',
      userAddress: '',
      userPhone: '',
      userEducation: '',
      userName: ''
    }
  },
  mounted () {
    this.header = this.$refs.header.accountName
  },
  methods: {
    pageUser () {
      window.location.href = '/#/userInfo'
    }
  }
}
</script>

<style scoped>
  #user-info-edit{
    width: 100%;
    background: #eeeeee;
    height: calc(100vh);
  }
  .user-info-body{
    overflow: hidden;
    position: relative;
    margin: 7% auto 20px;
    padding: 20px;
    width: 40%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    text-align: left;
    color: black;
    background: white;
  }
  .user-info-row{
    margin: 20px 0;
    line-height: 40px;
    position: relative;
    width: fit-content;
  }
  .user-info-row .el-input{
    position: absolute;
    left: 80px;
    width: 480px;
  }
  .hr{
    width: 100%;
    height: 1px;
    background: #cccccc;
  }
  .user-name{
    margin: 10px 0;
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
  }
</style>
