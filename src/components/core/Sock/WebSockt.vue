<template>
  <div class="chat">
    <div class="chat_left">
      <span class="chat_left_top">
        <img  class="chat_img" src=""/>
        <div class="chat_friend_div ">
              <p>昵称</p>
              <p>个性签名</p>
        </div>
      </span>
      <span class="chat_left_mid"><input placeholder="搜索"/></span>
      <span class="chat_left_bottom">
        <span class="chat_left_friend  active">
          <img  class="chat_friend_img" src=""/>
          <div class="chat_friend_div">
              <p>人名</p>
              <p>聊天记录</p>
          </div>
        </span>
        <span class="chat_left_friend">
          <img  class="chat_friend_img" src=""/>
          <div class="chat_friend_div">
              <p>人名</p>
              <p>聊天记录</p>
          </div>
        </span>
        <span class="chat_left_friend">
          <img  class="chat_friend_img" src=""/>
                    <div class="chat_friend_div">
              <p>人名</p>
              <p>聊天记录</p>
          </div>
        </span>
        <span class="chat_left_friend">
          <img  class="chat_friend_img" src=""/>
                    <div class="chat_friend_div">
              <p>人名</p>
              <p>聊天记录</p>
          </div>
        </span>
        <span class="chat_left_friend">
          <img  class="chat_friend_img" src=""/>
                    <div class="chat_friend_div">
              <p>人名</p>
              <p>聊天记录</p>
          </div>
        </span>
      </span>
    </div>
    <div class="chat_right">
      <div class="chat_head">
        好友名
      </div>
      <div class="chat_right_top">
        <div class="msg" v-for="msg in msgs">
        <div class="time">
          {{msg.time}}
        </div>
        <img :class = msg.img_class :src=msg.src />
        <div :class=msg.msg_class>
          {{msg.chat}}
        </div>
      </div>
  </div>
      <div class="chat_right_mid">
        功能框
      </div>
      <div class="chat_right_bottom">
        <textarea style="height: 80px;width: 100%;resize: none;border:0 "/>
        <div class="chat_right_bottom_btt">
          <button style="width:120px;height: 100%;float: right" @click="send()">发送</button>
        </div>
      </div>
    </div>
    <!--<input/>-->
   <!--<button @click="connectSrv">链接</button>-->
   <!--<button @click="subone">订阅点对点</button>-->
   <!--<button @click="submore">订阅广播</button>-->
   <!--<button @click="sendone">发送点对点</button>-->
   <!--<button @click="sendmore">发送广播消息</button>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        invokeIdCnt: 0,
        flag: false,
        msgs: [
          {
            time: '23:44',
            src: '123',
            img_class: 'msg_img_me',
            msg_class: 'msg_me',
            chat: '二货'
          },
          {
            time: '23:45',
            src: '123',
            img_class: 'msg_img_he',
            msg_class: 'msg_he',
            chat: '你好'
          }
        ]
      }
    },
    watch: {
      'msgs': 'scrollToBottom'
    },
    methods: {
      scrollToBottom: function () {
        this.$nextTick(() => {
          var div = document.getElementsByClassName('chat_right_top')[0]
          console.log(123)
          div.scrollTop = div.scrollHeight
        })
      },
      send () {
        let msgs = this.msgs
        var msg1 = {
          time: new Date().getHours() + ':' + new Date().getMinutes(),
          src: '123',
          img_class: 'msg_img_me',
          msg_class: 'msg_me',
          chat: '不好'
        }
        var msg2 = {
          time: new Date().getHours() + ':' + new Date().getMinutes(),
          src: '123',
          img_class: 'msg_img_he',
          msg_class: 'msg_he',
          chat: '不好拉倒'
        }
        msgs.push(msg1)
        setTimeout(function () { msgs.push(msg2) }, 1000)
      },
      subone (str) {
        this.$stompClient.subscribe('/resp/' + str + '/one', this.responseCallback, this.onFailed)
      },
      submore () {
        console.log('订阅了群聊')
        this.$stompClient.subscribe('/resp/getResponse', this.responseCallback, this.onFailed)
      },
      onConnected (frame) {
        console.log('Connected: ' + frame)
        let signInstate = this.$store.state.logins.signInstate
        let userid = signInstate.msg.id
        this.subone(userid)
        this.submore()
      },
      onFailed (frame) {
        console.log('Failed: ' + frame)
        this.flag = false
      },
      connectSrv () {
        var headers = {
          'login': 'guest',
          'passcode': 'guest'
          // additional header
        }
        this.connetWM('http://localhost:8081/chat', headers, this.onConnected, this.onFailed)
      },
      getInvokeId () {
        let hex = (this.invokeIdCnt++).toString(16)
        var zero = '0000'
        var tmp = 4 - hex.length
        return zero.substr(0, tmp) + hex
      },
      sendmore () {
        console.log(123)
        let destination = '/more'
        let invokeId = this.getInvokeId()
        let body = '广播来了'
        let parse = JSON.stringify({'name': body})
        this.sendWM(destination, parse, invokeId, this.responseCallback, 3000)
      },
      sendone () {
        let destination = '/one'
        let invokeId = this.getInvokeId()
        alert(invokeId)
        let body = '点对点来啦'
        let parse = JSON.stringify({'name': body})
        this.sendWM(destination, parse, invokeId, this.responseCallback, 3000)
      },
      responseCallback (frame) {
        console.log('responseCallback msg=>' + frame.body)
        console.log('responseCallback msg=>' + 111)
        // let invokeId = frame.body.substr(invokeIdIndex, 4)
        // this.removeStompMonitor(invokeId)
      },
      disconnect () {
        this.disconnetWM()
      }
    },
    stompClient: {
      monitorIntervalTime: 10000,
      stompReconnect: false,
      timeout (orgCmd) {
        // console.log(orgCmd)
      }
    },
    mounted () {
      this.connectSrv()
    }
  }
</script>

<style scoped>
  .chat {
    height: 750px;
    margin: 100px auto;
    width: 1100px;
  }
  .chat_left {
    cursor:pointer;
    height: 100%;
    width: 280px;
    /*border: #1c8de0 1px solid;*/
    float: left;
    background-color: #2e3238;
    color: #fff;
    font-family: "Microsoft YaHei UI";
  }
  .chat_right {
    height: 748px;
    float: left;
    width: 800px;
    /*border: #47cb89 1px solid;*/
    border: #8c939d 1px solid;
  }
  .chat_head {
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: #8c939d solid 1px;
  }
  .chat_right_top {
    height: 510px;
    overflow-y: scroll;
    overflow-x: hidden;
    border-bottom: #8c939d 1px solid;
  }
  .chat_right_mid {
    height: 40px;
    /*border: #47cb89 1px solid;*/
    margin: 2px 0px;
  }
  .chat_right_bottom {
    height: 85px;
    /*border: #47cb89 1px solid;*/
  }
  .chat_right_bottom_btt {
    /*border: red 1px solid;*/
    height:30px;
    cursor:pointer;
    margin-top: 10px;
  }

  .chat_left_top {
    display: inline-block;
    height: 80px;
    width: 100%;
    /*border: red 1px solid;*/
  }
  .chat_left_mid {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 30px;
    /*border: red 1px solid;*/
  }
  .chat_left_bottom {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 625px;
    /*border: red 1px solid;*/
  }
  .chat_img {
    height: 80px;
    width: 80px;
    float: left;
  }
  .msg {
    height: 110px;
    width: 100%;
    /*border: red 1px solid;*/
  }
  .time {
    height: 30px;
    /*border: blue 1px solid;*/
    width: 50%;
    margin: 15px auto;
    text-align: center;
    font-size: 13px;
  }
  .msg_me {
    text-align: right;
    width: 730px;
    height: 40px;
    padding: 9px 13px;
  }
  .msg_img_me{
    float: right;
    width: 40px;
    height: 40px;
  }
  .msg_he {
    text-align: left;
    width: 730px;
    height: 40px;
    padding: 9px 50px;
  }
  .msg_img_he{
    float: left;
    width: 40px;
    height: 40px;
  }
  .chat_left_friend {
    display: inline-block;
    height: 80px;
    width: 100%;
    margin: 2px;
    border-bottom: 1px solid #292c33;
    text-align: left;
  }
  .chat_left_friend .active {
    background-color: #3a3f45;
  }
  .chat_friend_img {
    height: 80px;
    width: 80px;
    float: left;
    margin-left: 5px;
  }
  .chat_friend_div {
    margin-left: 95px;
    margin-top: 30px;
  }
  .chat_friend_div p {
    margin-top: 5px;
  }
</style>
