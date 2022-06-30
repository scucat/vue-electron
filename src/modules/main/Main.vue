<template>
  <div id="nav">
    <div class="date">{{ dateStr }}</div>
    <div class="nav-text no-drag">
      <router-link :to="{path:'/webpage',query: {url: blog_url}}">博客</router-link>
      <router-link to="/preview">文件预览</router-link>
      <router-link to="/">渐变卡片</router-link>
      <router-link to="/todo">待办事项</router-link>
      <router-link to="/finished">已完成</router-link>
    </div>
    <router-link to="/add" class=" no-drag"><span>新建</span></router-link>
  </div>

  <div class="control">
    <span class="close no-drag" @click="closeMain" title="关闭">×</span>
    <span class="min no-drag" @click="minimizeMain" title="最小化">_</span>
  </div>
  <div class="content  no-drag">
    <div class="content-manage">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>

</template>
<script>
import { closeMain,minimizeMain } from '../../utils/useIPC.js'
export default {
  setup() {
    const date = new Date()
    const blog_url = 'https://scucat.github.io/blog/'
    const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    return {
      closeMain,
      minimizeMain,
      dateStr,
      blog_url
    }
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

#nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 30px 0;
  width: 200px;
  background-color: #f8f8f8;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;

  a {
    text-decoration: none;
    color: #333;
    padding: 8px 20px;
    border-radius: 5px;

    &.router-link-exact-active {
      background-color: #31c27c;
      color: #fff;
    }
  }

  .date {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #31c27c;
  }

  .nav-text {
    flex: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}

.control {
  position: absolute;
  top: 0;
  left: 200px;
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

.content {
  position: absolute;
  top: 30px;
  left: 200px;
  bottom: 0;
  right: 0;
  overflow: auto;

  .content-manage {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

}
</style>
