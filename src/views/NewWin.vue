<template>
<div class="">
    <button @click="openWin('/card')">打开新窗口</button>
</div>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { openWindow } from '../utils/useIPC.js'

export default {
  setup () {
    const { proxy } = getCurrentInstance()

    function finishFunc (index) {


      proxy.$router.push({
        path: '/finished'
      })
    }
    function openWin (path) {
        var op = {
            path:path,
            x:null,
            y:null,
            w:null,
            h:null,
            position:null,// top bottom left right
        }
        openWindow(op)
    }
    return {
      finishFunc,
      openWin
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" >
.card{
  width: 100%;
  -webkit-app-region: no-drag;
}

</style>
