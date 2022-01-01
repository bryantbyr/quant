<template>
  <div id="comp-model">
    <div class="params-set">
      训练集起始时间
      <el-date-picker
        v-model="timeSelect"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </div>
    <div class="params-set">
      是否热启动
      <el-switch v-model="boolHotStart"></el-switch>
    </div>
    <div class="params-set">
      是否启动GPU
      <el-switch v-model="boolUseGPU"></el-switch>
    </div>
    <div class="params-set">
      <el-button type="primary" v-if="!training" :disabled="trained" @click="trainHandler">训练</el-button>
      <el-progress v-else :text-inside="true" :stroke-width="26" :percentage="percentage"></el-progress>
    </div>
    <div class="params-set" style="padding-top: 40px;">
      <el-table
        :data="tableData"
        style="width: 60%;margin: 0 auto;">
        <el-table-column
          label="日期">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="模型名称">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>模型名称: {{ scope.row.name }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="warning">上线</el-button>
            <el-button
              size="mini"
              type="danger"
            >下线</el-button>
          </template>
        </el-table-column>
      </el-table>

<!--      <el-button type="danger">上线</el-button>-->
<!--      <el-button type="warning">下线</el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'compModel',
  data () {
    return {
      timeSelect: [],
      boolHotStart: true,
      boolUseGPU: true,

      trained: false,

      training: false,
      percentage: 0,

      tableData: [{
        date: '2022-01-02',
        name: 'AF-TCAN'
      }, {
        date: '2021-05-04',
        name: 'Two-Branch'
      }, {
        date: '2021-08-01',
        name: 'Linear'
      }]
    }
  },
  methods: {
    trainHandler () {
      let me = this
      this.training = true
      let timer = setInterval(() => {
        me.percentage += 1
        if (me.percentage >= 100) {
          me.training = false
          me.percentage = 0
          me.trained = true
          clearInterval(timer)
        }
      }, 50)
    }
  }
}
</script>

<style scoped>
.params-set{
  margin: 0 auto 40px;
  width: 75vw;
}
</style>
