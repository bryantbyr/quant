<template>
  <div id="comp_factor">
    <div id="search-bar">
      <el-select
        v-model="itemSelect"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-date-picker
        v-model="timeSelect"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <div id="charts" style="width: 1000px;height: 600px;">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'comp_factor',
  data () {
    return {
      itemSelect: [],
      timeSelect: '',
      options: [{
        value: 'PE',
        label: 'PE'
      }, {
        value: 'PB',
        label: 'PB'
      }, {
        value: 'PCF',
        label: 'PCF'
      }, {
        value: '20日收益方差',
        label: '20日收益方差'
      }, {
        value: '个股收益的20日峰度',
        label: '个股收益的20日峰度'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      charts: undefined,
      chartDataXAxis: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05'],
      chartData: [
        {
          type: 'PB',
          data: [23, 123, 43, 234, 45]
        },
        {
          type: 'PE',
          data: [123, 13, 3, 24, 4]
        }
      ]
    }
  },
  methods: {
    handleClick (v) {
      console.log(v)
    },
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
  mounted () {
    this.charts = echarts.init(document.getElementById('charts'))
    this.setData(this.chartDataXAxis, this.chartData)
  }
}
</script>

<style scoped>

</style>
