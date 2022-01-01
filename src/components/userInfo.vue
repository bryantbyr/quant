<template>
  <div id="user-info">
    <PageHeader ref="header"></PageHeader>
    <div class="user-info-body">
      <div style="width: 100%;background: #eeeeee;position: absolute;top: 0;left: 0;padding: 10px 10px;border-radius: 5px;border-bottom: 1px solid #cccccc">我的资料</div>
      <div class="user-name user-info-row">
        {{header}}
        <el-button type="success" style="float: right" size="small" @click="pageEdit">编辑</el-button>
      </div>
      <div class="hr"></div>
      <div class="user-mail user-info-row">
        <span class="user-field-tag">用户名：</span><span class="user-field-content">qiqiqi</span>
      </div>
      <div class="hr"></div>
      <div class="user-address user-info-row">
        <span class="user-field-tag">邮箱：</span><span class="user-field-content">a12312323@sina.com</span>
      </div>
      <div class="hr"></div>
      <div class="user-phone user-info-row">
        <span class="user-field-tag">手机：</span><span class="user-field-content">17801188406</span>
      </div>
      <div class="hr"></div>
      <div class="user-education user-info-row">
        <span class="user-field-tag">教育经历：</span><span class="user-field-content">硕士</span>
      </div>
      <div class="hr"></div>
      <div class="user-education user-info-row">
        <span class="user-field-tag">地址：</span><span class="user-field-content">北京市海淀区西土城路10号</span>
      </div>
    </div>
    <div><el-button type="primary" @click="pageIndex">返回</el-button></div>
  </div>
</template>

<script>
import PageHeader from './page_header'
export default {
  name: 'userInfo.vue',
  components: {PageHeader},
  data () {
    return {
      header: ''
    }
  },
  mounted () {
    this.header = this.$refs.header.accountName
  },
  methods: {
    pageIndex () {
      window.location.href = '/#/index'
    },
    pageEdit () {
      window.location.href = '/#/userInfoEdit'
    }
  }
}
</script>

<style scoped>
  #user-info{
    width: 100%;
    background: #eeeeee;
    height: calc(100vh);
  }
  .user-info-body{
    overflow: hidden;
    position: relative;
    margin: 8% auto 20px;
    padding: 20px;
    width: 50%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    text-align: left;
    color: black;
    background: white;
  }
  .user-info-row{
    margin: 20px 0;
    position: relative;
  }
  .user-name{
    margin-top: 40px;
    text-align: left;
    font-size: 24px;
    font-weight: bolder;
  }
  .hr{
    width: 100%;
    height: 1px;
    background: #cccccc;
  }
  .user-field-content{
    position: absolute;
    left: 400px;
  }
</style>
