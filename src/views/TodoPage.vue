<template>
<div class="todo-page">
  <x-dialog id="xdialog">
    <new-group></new-group>
  </x-dialog>


  <div id="addGroup">
    <x-button @click="addGroup" plain>新建分类</x-button>
  </div>
  <div v-for="(group,index) in groups" :key="'group-'+index" class="group-wrapper">
    <div 
      :title="group['description']"
      :style="formatStyle(group)" 
      class="group-item transition-3 hover-scale-105">
      {{ group["title"] }}
    </div>
  </div>
</div>
</template>
<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
import { useTitle } from '@/utils/useData.js'
import axios from 'axios'
import NewGroup from '@/components/Todo/NewGroup.vue'
import XDialog from '@/components/XDialog.vue'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const { updateTitle } = useTitle(proxy)
    updateTitle("TODO")
    var groups = ref([])

    function getGroups () {
      axios.get('/todo/groups').then((res) => {
        if(res.data.status){
          console.log(res.data)
          groups.value = res.data.data
        }
        
      }).catch((e)=>{
        console.log(e)
      })
    }

    function formatStyle(group){
      var style = {}
      if (group['background_color']) {
        style.backgroundColor = group['background_color']
      } else {
        style.border = `1px solid gray`
      }
      if (group['font_color']) {
        style.color = group['font_color']
      }
      if (group['border_color']) {
        style.border = `1px solid ${group['border_color']}`
      }
      return style
    }

    function addGroup (e) {
      var dialog = document.getElementById('xdialog')
      dialog.style.left = `${e.offsetX + 40}px`
      dialog.style.top = `${e.offsetY + 40}px`
      dialog.style.display = 'block'
      console.log(e)
    }
    onMounted(() => {
      getGroups()
    })
    return {
      groups,
      formatStyle,
      addGroup
    }
  },
  components: { 
    NewGroup,
    XDialog
  }
}
</script>
<style lang="scss" >
.todo-page{
  width: 100%;
  height: 100%;
  padding: 20px;
}
.group-wrapper{
  position: relative;
  float: left;
  cursor: pointer;
}
.group-item{
  margin: 10px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  width: auto;
  border-radius: 5px;
}
</style>
