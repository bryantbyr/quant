<template>
  <div id="index">
    <div class="header">
    </div>
    <div class="content">
      <div class="login-box">
        <h2>用户注册</h2>
        <div>
          <el-input style="width: 75%;">
            <template slot="prepend">&nbsp;账号&nbsp;</template>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
          <el-input style="width: 75%;">
            <template slot="prepend">&nbsp;密码&nbsp;</template>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
          <el-input style="width: 75%;">
            <template slot="prepend">手机号码</template>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
          <el-input style="width: 75%;">
            <template slot="prepend">用户名称</template>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
          <el-input style="width: 75%;">
            <template slot="prepend">邮箱</template>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
           <el-button type="primary" style="width: 75%;" round>注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
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
    /*调整颜色*/
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
