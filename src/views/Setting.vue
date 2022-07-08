<template>
<div class="setting">
</div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue'
import { useTitle } from '../utils/useData.js'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const { updateTitle } = useTitle(proxy)
    updateTitle("应用设置")
    onMounted(() => {
      console.log("666")
    })
    return {
    }
  },
}
</script>
<style lang="scss" >
.card{
  width: 100%;
  -webkit-app-region: no-drag;
}

</style>
