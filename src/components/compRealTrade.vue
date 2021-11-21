<template>
  <div id="comp-real-trade">
    <div id="select-components">
      <div class="selection">
        <div>
          选股模型
        </div>
        <el-select v-model="methodSelect" size="small">
          <el-option
            v-for="item in backTestMethods"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!--      选择回测日期-->
      <div class="selection">
        <div>
          结束时间
        </div>
        <el-date-picker
          style="width: 80%;"
          size="small"
          v-model="backTestDate"
          type="date"
          placeholder="结束日期">
        </el-date-picker>
      </div>
      <!--      调仓频率-->
      <div class="selection">
        <div>
          调仓频率
        </div>
        <div class="input-display">
          <el-input v-model="adjustRate" size="small"></el-input>
        </div>
      </div>
      <!--      持有股票数量-->
      <div class="selection">
        <div>
          持有股票
        </div>
        <div class="input-display">
          <el-input v-model="holdNum" size="small"></el-input>
        </div>
      </div>
    </div>
    <div id="charts" style="width: 1000px;height: 400px;"></div>
    <el-table
      :data="tableData"
      stripe
      style="width: 90%;margin: 0 auto;">
      <el-table-column
        prop="modelName"
        label="模型">
      </el-table-column>
      <el-table-column
        prop="accReturn"
        label="累计收益率">
      </el-table-column>
      <el-table-column
        prop="maxDrawDown"
        label="最大回撤">
      </el-table-column>
      <el-table-column
        prop="informationRatio"
        label="信息比率">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'compRealTrade',
  data () {
    return {
      backTestMethods: [{
        value: 'AF-TCAN',
        label: 'AF-TCAN'
      }, {
        value: 'Two-Branch',
        label: 'Two-Branch'
      }, {
        value: 'Linear',
        label: 'Linear'
      }],
      methodSelect: '',
      backTestDate: [],
      adjustRate: 30,
      holdNum: 8,

      charts: undefined,
      chartDataXAxis: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05'],
      chartData: [
        {
          type: 'AF-TCAN',
          data: [23, 123, 43, 234, 45]
        },
        {
          type: 'HS300',
          data: [123, 13, 3, 24, 4]
        }
      ],

      tableData: [
        {modelName: 'AF-TCAN', accReturn: '42%', maxDrawDown: '230%', informationRatio: '12%'},
        {modelName: '沪深300', accReturn: '42%', maxDrawDown: '230%', informationRatio: '12%'}
        // {modelName: 'AF-TCAN', accReturn: '42%', maxDrawDown: '230%', informationRatio: '12%'}
      ]
    }
  },
  methods: {
    setData (xAxisData, data) {
      let typeData = []
      let seriesData = []

      data.forEach(r => {
        typeData.push(r.type)

        // data process

        seriesData.push({
          name: r.type,
          type: 'line',
          stack: 'total',
          data: r.data
        })
      })
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: typeData
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      })
    }
  },
  watch: {
    backTestDate (val) {
      console.log(val)
    }
  },
  mounted () {
    this.charts = echarts.init(document.getElementById('charts'))
    this.setData(this.chartDataXAxis, this.chartData)
  }
}
</script>

<style scoped>
#select-components{
  display: flex;
  line-height: 40px;
  margin: 0 auto 20px;
  width: 70vw;
}
.input-display{
  width: 70%;
  margin: 0 auto;
}
.selection{
  width: 70%;

  margin: 0 auto;
}

#charts{
  margin: 0 auto 20px;
}
</style>
