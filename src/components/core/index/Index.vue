<template>
  <div class="indexClass">
    <div class="com_message"><h4 class="index_title">公司新闻</h4></div>
    <div class="calendar_div"><h4 class="index_title">个人考勤情况  签到功能。日期记事（待办）</h4>
      <vue-event-calendar :events="demoEvents" @day-changed="aaa" @dayChanged="bbb">
        <template scope="props">
          <div v-for="(event, index) in activeEven.events" class="event-item">
            <div class="wrapper">
              <h3 class="title">
                {{index + 1}}. {{event.title}}
                <!--{{activeEven.events[0].title}}-->
              </h3>
              <p class="time">
                {{event.date.toLocaleString()}}
              </p>
              <p class="desc">
                {{event.desc}}
              </p>
            </div>
            <!--<div>111</div>-->
          </div>
          <div  v-for="(event, index) in demoEvents" v-if="(!activeEven.events || !activeEven.events[0]) && event.title === '签到'"
               class="event-item">
              <div class="wrapper">
                <h3 class="title">
                  {{index + 1}}. {{event.title}}
                  <!--{{activeEven.events[0].title}}-->
                </h3>
                <p class="time">
                  {{event.date.toLocaleString()}}
                </p>
                <p class="desc">
                  {{event.desc}}
                </p>
              </div>
            </div>
        </template>
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
          title: '签到',
          desc: '已签'
        }, {
          date: '2017/10/16',
          title: '签到',
          desc: '已签'
        }, {
          date: '2017/10/16',
          title: 'eat',
          desc: 'longlonglong description'
        }, {
          date: '2017/10/16',
          title: 'eat',
          desc: 'longlonglong description'
        }, {
          date: '2017/10/27',
          title: 'this is a title'
        }],
        activeFlag: false,
        activeEven: {},
        breadcrumbs: ['首页']
      }
    },
    components: {},
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
      console.log(this.activeEven)
//      this.initDate()
//      console.log('2017/10/27'.split('/')[0])
    },
    methods: {
//      initDate () {
//        this.aaa()
//      },
      aaa (data) {
        console.log(data)
        this.activeFlag = true
        this.activeEven = data
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
    margin-right: -1px;
    float: left;
  }

  .index_title {
    margin: -1px -1px 0px -1px;
    text-align: center;
    border: 1px darkorange solid;
  }

  .calendar_div {
    /*width: 1200px;*/
    float: left;
    width: 750px;
    border: 1px darkorange solid;
  }

  .indexClass {
    min-width: 1098px;
  }
</style>
