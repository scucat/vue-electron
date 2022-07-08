<template>
<div class="btn-view">
  <div>  
    <x-button>默认按钮</x-button>
    <x-button type="primary">主要按钮</x-button>
    <x-button type="success">成功按钮</x-button>
    <x-button type="info">信息按钮</x-button>
    <x-button type="warning">警告按钮</x-button>
    <x-button type="danger">危险按钮</x-button>
  </div>
  <div>  
    <x-button plain>朴素按钮</x-button>
    <x-button type="primary" plain>主要按钮</x-button>
    <x-button type="success" plain>成功按钮</x-button>
    <x-button type="info" plain>信息按钮</x-button>
    <x-button type="warning" plain>警告按钮</x-button>
    <x-button type="danger" plain>危险按钮</x-button>
  </div>
  <div>  
    <x-button plain dashed>虚线按钮</x-button>
    <x-button type="primary" plain dashed>主要按钮</x-button>
    <x-button type="success" plain dashed>成功按钮</x-button>
    <x-button type="info" plain dashed>信息按钮</x-button>
    <x-button type="warning" plain dashed>警告按钮</x-button>
    <x-button type="danger" plain dashed>危险按钮</x-button>
  </div>
  <div> 
    <x-button round>圆角按钮</x-button>
    <x-button type="primary" round>主要按钮</x-button>
    <x-button type="success" round>成功按钮</x-button>
    <x-button type="info" round>信息按钮</x-button>
    <x-button type="warning" round>警告按钮</x-button>
    <x-button type="danger" round>危险按钮</x-button>
  </div>
  <div> 
    <x-button text>文本按钮</x-button>
    <x-button type="primary" text>主要按钮</x-button>
    <x-button type="success" text>成功按钮</x-button>
    <x-button type="info" text>信息按钮</x-button>
    <x-button type="warning" text>警告按钮</x-button>
    <x-button type="danger" text>危险按钮</x-button>
  </div>
  <div> 
    <x-button circle>+</x-button>
    <x-button type="primary"  circle>-</x-button>
    <x-button type="success"  circle>c</x-button>
    <x-button type="info" circle>d</x-button>
    <x-button type="warning" circle>e</x-button>
    <x-button type="danger" circle>f</x-button>
  </div>
</div>
</template>
<script>
import { getCurrentInstance } from 'vue'
import XButton from '../components/XButton/XButton.vue'
export default {
  components: { XButton },
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
  components: { 
    XButton,
  }
}
</script>
<style lang="scss" scoped>
.btn-view{
  width: 100%;
}

</style>
