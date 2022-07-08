<template>
<div class="x-view">
  <div id="view-nav">
    <div class="group">组件</div>
    <div class="nav-text no-drag">
      <router-link to="/xview/button-view">Button 按钮</router-link>
    </div>
  </div>
  <div class="view-content">
    <div class="view-content-manage">
      <router-view></router-view>
    </div>
  </div>
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
<style lang="scss" scoped>
#view-nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px 10px;
  width: 150px;
  border-right: 1px solid rgba(128, 128, 128, 0.404);
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: left;
  

  a {
    text-decoration: none;
    color: #333;
    padding: 4px 10px;
    border-radius: 5px;
    font-size: 13px;

    &.router-link-exact-active {
      //background-color: #3175c2;
      //color: #fff;
      color:#3175c2;
    }
  }

  .group {
    font-weight: bold;
    margin: 10px 0 10px 10px;

  }
  .nav-text {
    flex: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}

.view-content {
  position: absolute;
  top: 0px;
  left: 150px;
  padding: 20px;
  bottom: 0;
  right: 0;
  overflow: auto;

  .view-content-manage {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
}

</style>
