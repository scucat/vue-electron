<template>
<div class="">

</div>
</template>
<script>
import { getCurrentInstance } from 'vue'

export default {
  setup () {
    const { proxy } = getCurrentInstance()

    function finishFunc (index) {


      proxy.$router.push({
        path: '/finished'
      })
    }
    function deleteFunc (index) {
    }
    return {
      finishFunc,
      deleteFunc
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
