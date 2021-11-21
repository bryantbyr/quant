<template>
  <div id="user-admin-system">
    <div style="alignment: left;margin: 0;width: fit-content;">
      <el-button type="primary" style="alignment: left;margin: 0;" @click="dialogFactorVisible = true">新增因子</el-button>
    </div>
    <el-table
      :data="tableData1"
      style="margin: 0 auto;width: 80vw;">
      <el-table-column label="因子编号" prop="id"></el-table-column>
      <el-table-column label="因子名" prop="factorName"></el-table-column>
      <el-table-column label="因子含义" prop="factorInfo"></el-table-column>
      <el-table-column label="添加时间" prop="addTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" >编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="alignment: left;margin: 20px 0px;width: fit-content;">
      <el-button type="primary" style="alignment: left;margin: 0;" @click="dialogModelVisible = true">新增模型</el-button>
    </div>
    <el-table
      :data="tableData2"
      style="margin: 0 auto;width: 80vw;">
      <el-table-column label="模型编号" prop="id"></el-table-column>
      <el-table-column label="模型名" prop="modelName"></el-table-column>
      <el-table-column label="添加时间" prop="addTime"></el-table-column>
      <el-table-column label="更新时间" prop="modifyTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" >编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="因子添加" :visible.sync="dialogFactorVisible">
      <div class="add-factor-item">
        因子编号
        <el-input></el-input>
      </div>
      <div class="add-factor-item">
        因子名
        <el-input></el-input>
      </div>
      <div class="add-factor-item">
        因子含义
        <el-input></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFactorVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFactorVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="模型添加" :visible.sync="dialogModelVisible">
      <div class="add-factor-item">
        模型编号
        <el-input></el-input>
      </div>
      <div class="add-factor-item">
        模型名
        <el-input></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogModelVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogModelVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'userAdminSystem',
  data () {
    return {
      tableData1: [
        {id: 1, factorName: 'PE', factorInfo: '公司市值', addTime: '2020-01-01'},
        {id: 1, factorName: 'PE', factorInfo: '公司市值', addTime: '2020-01-01'},
        {id: 1, factorName: 'PE', factorInfo: '公司市值', addTime: '2020-01-01'},
        {id: 1, factorName: 'PE', factorInfo: '公司市值', addTime: '2020-01-01'}
      ],
      tableData2: [
        {id: 1, modelName: 'AF-TCAN', addTime: '2020-11-30', modifyTime: '2021-01-01'},
        {id: 1, modelName: 'AF-TCAN', addTime: '2020-11-30', modifyTime: '2021-01-01'},
        {id: 1, modelName: 'AF-TCAN', addTime: '2020-11-30', modifyTime: '2021-01-01'},
        {id: 1, modelName: 'AF-TCAN', addTime: '2020-11-30', modifyTime: '2021-01-01'},
        {id: 1, modelName: 'AF-TCAN', addTime: '2020-11-30', modifyTime: '2021-01-01'}
      ],
      dialogModelVisible: false,
      dialogFactorVisible: false
    }
  }
}
</script>

<style scoped>
.add-factor-item{
  margin-bottom: 20px;
}
</style>
