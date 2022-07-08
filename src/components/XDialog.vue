<template>
<div class="x-dialog">
    <slot></slot>
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
.x-dialog{
    position: absolute;
    z-index: 999;
    display: none;
}

</style>
