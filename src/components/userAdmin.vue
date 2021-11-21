<template>
  <div id="user-admin">
    <PageHeader></PageHeader>
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
                <span slot="title">系统管理</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="main-content">
        <UserAdminSystem v-if="panelIndex === 1"></UserAdminSystem>
        <UserAdminUser v-if="panelIndex === 2"></UserAdminUser>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './page_header'
import UserAdminUser from './userAdminUser'
import UserAdminSystem from './userAdminSystem'
export default {
  name: 'userAdmin',
  components: {UserAdminSystem, UserAdminUser, PageHeader},
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
