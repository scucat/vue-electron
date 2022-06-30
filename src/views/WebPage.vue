<template>
<div class="web-page">
  <iframe
        width="100%"
        height="100%"
        style="border: 0"
        :src="iframeSrc"
        ref="iframeRef"
        id="iframeRef"
      ></iframe>
</div>
</template>
<script>
import { getCurrentInstance,ref,onMounted } from 'vue'

export default {
  setup () {
    const { proxy } = getCurrentInstance()
    let iframeSrc = ref(String)
    let iframeRef;
    let iframeWindow;
    onMounted(() => {
      let newSrc = proxy.$router.currentRoute.value.query.url
      let oldSrc = iframeSrc.value
      if (oldSrc!=newSrc) {
        iframeSrc.value = newSrc
        console.log(newSrc)
      }
    });

    function finishFunc (index) {


      proxy.$router.push({
        path: '/finished'
      })
    }
    function deleteFunc (index) {
    }
    return {
      iframeSrc,
      deleteFunc
    }
  },
}
</script>
<style lang="scss" >
.web-page{
  width: 100%;
  height: 100%;
}

</style>
