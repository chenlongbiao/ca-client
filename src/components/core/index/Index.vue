<template>
  <div class="indexClass">
    <div class="com_message"><h4 class="index_title">公司新闻</h4></div>
    <div class="calendar_div"><h4 class="index_title">个人考勤情况  签到功能。日期记事（待办）</h4>
      <vue-event-calendar :events="demoEvents" @day-changed="aaa" @dayChanged="bbb">

      </vue-event-calendar>
    </div>
    <div class="per_message"><h4 class="index_title">知识库查看历史。流程审批，日报</h4></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        demoEvents: [{
          date: '2017/10/15',
          title: 'eat',
          desc: 'longlonglong description'
        }, {
          date: '2016/11/12',
          title: 'this is a title'
        }],
        breadcrumbs: ['首页']
      }
    },
    components: {
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    },
    methods: {
      aaa (data) {
        console.log(data)
      },
      bbb () {
        console.log(222)
      }
    }

  }
</script>
<style>
  .per_message {
    border: 1px darkorange solid;
    min-width: 1090px;
    height: 226px;
    float: left;
  }
  .com_message {
    border: 1px darkorange solid;
    width: 340px;
    /*max-width: 750px;*/
    height: 631px;
    margin-right:-1px;
    float: left;
  }
  .index_title {
    margin:-1px -1px 0px  -1px;
    text-align: center;
    border: 1px darkorange solid;
  }
  .calendar_div {
    /*width: 1200px;*/
    float: left;
    width: 750px;
    border: 1px darkorange solid;
  }
</style>
