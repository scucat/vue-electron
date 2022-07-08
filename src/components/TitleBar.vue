<template>
<div class="title-bar">
  <span class="title">{{ title }}</span>
  <div class="control">
    <span class="close no-drag" @click="closeMain" title="关闭">×</span>
    <span class="min no-drag" @click="minimizeMain" title="最小化">_</span>
  </div>
</div>
</template>
<script>
import { closeMain,minimizeMain } from '@/utils/useIPC.js'
import { getCurrentInstance } from 'vue'
import { useTitle } from '@/utils/useData.js'

export default {
  setup() {
    const { proxy } = getCurrentInstance()
    const { title } = useTitle(proxy)
    return {
      closeMain,
      minimizeMain,
      title
    }
  }
}
</script>
<style lang="scss" scoped>
.title-bar{
  position: absolute;
  top: 0;
  left: 200px;
  right: 0;
  height: 30px;
  text-align: center;
}
.title{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: .9rem;
  margin-top: 5px;
  margin-left: 10px;
}
.control {
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  .min{
    font-size: 26px;
    float: right;
    cursor: pointer;
    margin-top: -14px;
    margin-right: 20px;
    padding-bottom: 10px;
  }
  .min:hover{
    color: gray;
  }

  .close {
    text-align: center;
    font-size: 26px;
    float: right;
    margin-right: 16px;
    cursor: pointer;
  }

  .close:hover {
    color: red;
  }
}

</style>
