<template>
<div class="preview">
  <div class="dropper" id="drop">
    <input type="file" id="avatar" name="avatar" multiple required @change="changeFile($event)">
    <span class="add">+</span>
    <br>
    选择文件/拖放文件
  </div>
  <span v-show="isUpload" class="tip"></span>
</div>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { nextTick, onMounted, ref } from '@vue/runtime-core';

export default {
  setup () {
    const { proxy } = getCurrentInstance()
    function finishFunc (index) {
      proxy.$router.push({
        path: '/finished'
      })
    }

    let isUpload = ref(true);
     // 当拖拽元素第一次进入触发
    function dragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
//持续触发 当元素或者选择的文本被拖拽到一个有效的放置目标上时
//，触发 dragover 事件(每几百毫秒触发一次)；这个事件在可被放置元素的节点上触发。
    function dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    function changeFile(e){
      console.log(e.target.files)
    }

    function drop(e) {
      e.preventDefault();
      // 当文件拖拽到dropBox区域时,可以在该事件取到file
      // 根据自己情况 在这里写网络请求
      var file = e.dataTransfer.files[0];
      var _type = file.type;
      console.log(_type);
      //file.type; 文件类型
      //file.name;文件名
      //file.size; 文件大小 btye
      var img = document.getElementsByTagName('img')[0];
      const tip = document.querySelector('.tip');
      const dropBox = document.querySelector('#drop');

      //如果是图片 粗略判断
      if (_type.indexOf('image') > -1) {
        var dataURL = URL.createObjectURL(file);
        img.src = dataURL;
        isUpload.value = false;
      } else {
        // 粗略处理
        tip.innerText = file.name;
        isUpload.value = true;
      }

      var formData = new FormData();
      formData.append('file', file);
      // 隐藏加号
      dropBox.classList.add('hide');
      console.log(file);
    }

    onMounted(() => {
      nextTick();
      // 此处定义一个drop容器(省略),并取到该元素;
      //参数三默认为false，表示在事件冒泡阶段调用；当该值为true时，表示在事件捕获阶段调用。
      const dropBox = document.querySelector('#drop');
      //拖动后首次在进入某个控件内发生
      dropBox.addEventListener('dragenter', dragEnter, false); 
      // 拖放对象悬浮拖放区域，在拖放区域移动会多次触发
      dropBox.addEventListener('dragover', dragOver, false); 
      // 源对象落在目标对象上
      dropBox.addEventListener('drop', drop, false); 
    });
    return {
      isUpload,
      changeFile
    };
  },

}
</script>
<style lang="scss" >
.preview{
  width: 100%;
  height: 100%;
  
}
.dropper{
  display:table-cell;
  width: 200px;
  height: 200px;
  vertical-align: middle;
  text-align: center;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: 2px dashed rgb(122, 122, 122);
  cursor: pointer;
  input{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
    font-size: 100px;
  }
  .add{
    font-size: 3rem;
    font-weight: 100;
  }
}

.dropper:hover{
  color: rgb(122, 122, 122);
  border: 2px dashed rgb(194, 194, 194);
}


</style>
