<template>
  <div id="user-admin-user">
    <el-table
      :data="tableData"
      style="margin: 0 auto;width: 80vw;">
      <el-table-column label="序号" prop="id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <el-table-column label="注册时间" prop="registerTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" >编辑</el-button>
          <el-button size="mini" type="warning">禁用</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'userAdminUser',
  data () {
    return {
      tableData: [
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'},
        {id: 1, username: 'qirui', phone: '110', registerTime: '1970-01-01'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
