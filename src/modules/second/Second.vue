<template>

<div class="content-manage no-drag">
  <router-view></router-view>
</div>
</template>
<script>
export default {
  setup() {
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

#app {
  user-select: none;
  -webkit-app-region: drag;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.absolute {
  position: absolute;
}

.drag {
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}

.content-manage {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}


</style>
