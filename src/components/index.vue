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
              active-text-color="#ffd04b"
              @select="panelChange"
            >
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
                <span slot="title">股票行情</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">模型管理</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-menu"></i>
                <span slot="title">模型预测</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">选股回测</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">实战模拟</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="main-content">
        <CompFactor v-if="panelIndex === 1"></CompFactor>
        <CompNews v-if="panelIndex === 2"></CompNews>
        <CompStock v-if="panelIndex === 3"></CompStock>
        <CompModel v-if="panelIndex === 4"></CompModel>
        <CompBackTest v-if="panelIndex === 5"></CompBackTest>
        <CompRealTrade v-if="panelIndex === 6"></CompRealTrade>
        <CompModelPrediction v-if="panelIndex === 7"></CompModelPrediction>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './page_header'
import CompFactor from './compFactor'
import CompStock from './compStock'
import CompBackTest from './compBacktest'
import CompRealTrade from './compRealTrade'
import CompModel from './compModel'
import CompNews from './compNews'
import CompModelPrediction from './compModelPrediction'
export default {
  name: 'index',
  components: {CompModelPrediction, CompNews, CompModel, CompRealTrade, CompBackTest, CompStock, CompFactor, PageHeader},
  data () {
    return {
      panelIndex: 1
    }
  },
  methods: {
    panelChange (ind) {
      this.panelIndex = parseInt(ind)
      console.log(this.panelIndex)
    }
  }
}
</script>

<style scoped>
  #index{
    margin: 0 0!important;
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
</style>
