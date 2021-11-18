<template>
  <div id="index">
    <page-header></page-header>
    <div class="content">
      <div class="side-bar">
        <el-row class="tac" :span="20">
          <el-col class="tac">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">因子库</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">新闻信息库</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">模型管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">选股回测</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">实战模拟</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="main-content">
        <CompFactor></CompFactor>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './page_header'
import CompFactor from './compFactor'
export default {
  name: 'index',
  components: {CompFactor, PageHeader}
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
    display: flex;

  }
  .side-bar{
    width: 20%;
    height: calc(100vh - 50px);
    background: rgb(84, 92, 100);
  }
  .tac{
    height: 100%;
  }
  .main-content{
    padding: 30px;
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
