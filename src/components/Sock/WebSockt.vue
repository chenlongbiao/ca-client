<template>
  <div>
    <input/>
   <button @click="connectSrv">链接</button>
   <button @click="subone">订阅点对点</button>
   <button @click="submore">订阅广播</button>
   <button @click="sendone">发送点对点</button>
   <button @click="sendmore">发送广播消息</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        invokeIdCnt: 0
      }
    },
    methods: {
      subone () {
        this.$stompClient.subscribe('/user/1/one', this.responseCallback, this.onFailed)
      },
      submore () {
        this.$stompClient.subscribe('/topic/getResponse', this.responseCallback, this.onFailed)
      },
      onConnected (frame) {
        console.log('Connected: ' + frame)
      },
      onFailed (frame) {
        console.log('Failed: ' + frame)
      },
      connectSrv () {
        var headers = {
          'login': 'guest',
          'passcode': 'guest'
          // additional header
        }
        this.connetWM('http://localhost:8081/webSocketServer', headers, this.onConnected, this.onFailed)
      },
      getInvokeId () {
        let hex = (this.invokeIdCnt++).toString(16)
        var zero = '0000'
        var tmp = 4 - hex.length
        return zero.substr(0, tmp) + hex
      },
      sendmore () {
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
      monitorIntervalTime: 100,
      stompReconnect: true,
      timeout (orgCmd) {
        // console.log(orgCmd)
      }
    }
  }
</script>

<style scoped>

</style>
