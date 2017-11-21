<template>
  <div class="indexClass">
    <div class="com_message"><h4 class="index_title">公司新闻</h4>
        <ul style="height: 90%;">
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
          <li>新闻1</li>
        </ul>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <div class="calendar_div"><h4 class="index_title">个人考勤情况  签到功能。日期记事（待办）</h4>
      <vue-event-calendar :events="demoEvents" @day-changed="aaa" @dayChanged="bbb">
        <template>
          <div v-for="(event, index) in activeEven.events" class="event-item">
            <div class="wrapper">
              <h3 class="title">
                {{index + 1}}. {{event.title}}
                <!--{{activeEven.events[0].title}}-->
              </h3>
              <p class="time">
                {{event.date}}
              </p>
              <p class="desc">
                <el-button type="success" disabled v-if="event.desc === '已签'" class="btdesc" >{{event.desc}} {{event.date}}</el-button>
                <el-button type="danger" v-if="event.desc === '未签'" class="btdesc" @click="signed(event)">{{event.desc}}</el-button>
                <span v-if="event.desc != '未签'&&event.desc != '已签'">{{event.desc}}</span>
              </p>
            </div>
            <!--<div>111</div>-->
          </div>
          <div  v-for="(event, index) in demoEvents" v-if="(!activeEven.events || !activeEven.events[0]) && event.title === '签到'"
               >
              <!--<div class="wrapper">-->
                <!--<h3 class="title">-->
                  <!--{{index + 1}}. {{event.title}}-->
                  <!--&lt;!&ndash;{{activeEven.events[0].title}}&ndash;&gt;-->
                <!--</h3>-->
                <!--<p class="time">-->
                  <!--{{event.date}}-->
                <!--</p>-->
                <!--<p class="desc">-->
                  <!--<el-button type="success" disabled v-if="event.desc === '已签'" class="btdesc" >{{event.desc}} </el-button>-->
                  <!--<el-button type="danger" v-if="event.desc === '未签'" class="btdesc" @click="signed(event)">{{event.desc}}</el-button>-->
                <!--</p>-->
              <!--</div>-->
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
          desc: '未签'
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
      signed (evevt) {
        let date = evevt.date
        let demoEvents = this.demoEvents
        for (let i = 0; i < demoEvents.length; i++) {
          console.log(demoEvents[i].date === date)
          if (demoEvents[i].date === date && demoEvents[i].desc === '未签') {
            demoEvents[i].desc = '已签'
          }
        }
        this.demoEvents = demoEvents
      },
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
  .btdesc {
    width: 100%;
  }
  .per_message {
    border: 1px darkorange solid;
    width: 100%;
    height: 226px;
    float: left;
  }

  .com_message {
    border: 1px darkorange solid;
    /*min-width: 420px;*/
    width: 39.5%;
    height: 631px;
    margin-right: -1px;
    float: left;
  }

  .index_title {
    margin: -1px -1px 0px -1px;
    text-align: left;
    border: 1px darkorange solid;
  }

  .calendar_div {
    /*width: 1200px;*/
    float: left;
    min-width: 635px;
    width: 60%;
    border: 1px darkorange solid;
  }

  .indexClass {
    min-width: 1090px;
  }
</style>
