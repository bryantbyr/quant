<template>
  <div id="comp-stock">
<!--    <iframe src="/static/chartiq/chartiq/technical-analysis-chart.html" style="width: 75vw;height: 80vh"></iframe>-->
    <iframe id="frame" src="http://stock.jrj.com.cn/share,sz399001.shtml" name="frame"></iframe>
  </div>
</template>

<script>
export default {
  name: 'compStock',
  mounted () {
    setTimeout(() => {
      let frame = window.frames['frame'].document
      console.log('???', frame)
      let ele = frame.getElementsByClassName('enter')
      console.log('???', ele)
    }, 5000)
  }
}
</script>

<style scoped>
iframe{
  width: 1000px;
  height: 500px;
}
</style>
