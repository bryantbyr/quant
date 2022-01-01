<template>
  <div id="comp-news">
    <div id="search-bar" style="width: 75vw;margin-bottom: 50px;">
      <el-select
        v-model="itemSelect"
        multiple
        collapse-tags
        style="margin: 0 30px"
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
        style="margin: 0 30px 0 0;"
      >
      </el-date-picker>

      <el-button type="primary" style="margin: 0 auto;">搜索</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 90%;margin: 0 30px;">
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="source"
          label="信息来源">
        </el-table-column>
        <el-table-column
          prop="link"
          label="链接">
        </el-table-column>
        <el-table-column
          prop="releaseDate"
          label="新闻发布日期">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compNews',
  data () {
    return {
      itemSelect: '',
      timeSelect: '',
      options: [{
        value: '茅台',
        label: '茅台'
      }, {
        value: '360',
        label: '360'
      }, {
        value: '小马',
        label: '小马'
      }],
      tableData: [
        {title: '小马上市了！！估值3000亿美元', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2018-01-01'},
        {title: '万科换届印象：王石求掌声求合影郁亮哽咽 深铁感谢一圈', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2019-01-01'},
        {title: '揭秘举牌股：野蛮人盯上卖壳重组  小市值股易遭举牌', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2019-01-01'},
        {title: 'xxxxxx！！xxxxxxxxxxxxxx', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2019-01-01'},
        {title: 'iiiiii, x x x x x x x x x x x', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2019-01-01'},
        {title: '1111111！！2 2 3 4  dqdqd  dwwe', source: '新浪财经', link: 'www.bytedance.net', releaseDate: '2019-01-01'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
