<template>
    <div class="new-group">
        <h5>新建分类</h5>
        <!-- <input type="color"/> -->
        <br>
        标题：<input type="text" :value="groupName" @input="onTitleInput" maxlength="20" />
        <br>
        字体色：<color-picker @change="font_change" :defaultColor="font_color_default" v-model:hex="font_color">
        </color-picker>
        <br>
        背景色：<color-picker @change="bg_change" :defaultColor="bg_color_default" v-model:hex="bg_color"></color-picker>
        <br>
        边框色：<color-picker @change="border_change" :defaultColor="border_color_default" v-model:hex="border_color">
        </color-picker>
        <br>
        预览：
        <div :style="formatStyle" class="group-item transition-3 hover-scale-105">
            {{ groupName }}
        </div>
        <br>
        <x-button type="primary" @click="confirmNewGroup">确认</x-button>
        <x-button  @click="cancel">取消</x-button>
        
    </div>
</template>
<script>
import { computed, getCurrentInstance, ref } from 'vue'
import XButton from '../XButton/XButton.vue'

export default {
  components: { XButton },
    setup() {
        const { proxy } = getCurrentInstance()
        var groupName = ref("分类")
        const font_color_default = ref("#000000")
        const font_color = ref("");
        const bg_color_default = ref("#ffffff")
        const bg_color = ref("");
        const border_color_default = ref("#888888")
        const border_color = ref("");

        const font_change = (e) => {
            console.log(font_color.value, font_color_default.value); // {hex: '#ddd8c3', rgba: 'rgba(221,216,195,0.5849)'}
        }
        const bg_change = (e) => {
            console.log(font_color.value, font_color_default.value); // {hex: '#ddd8c3', rgba: 'rgba(221,216,195,0.5849)'}
        }
        const border_change = (e) => {
            console.log(font_color.value, font_color_default.value); // {hex: '#ddd8c3', rgba: 'rgba(221,216,195,0.5849)'}
        }
        const cancel = (e) => {
            var dialog = document.getElementById('xdialog')
            dialog.style.display = 'none'
        }
        function onTitleInput(e) {
            groupName.value = e.target.value
            console.log(groupName.value)
        }
        const formatStyle = computed(() => {
            var style = {}
            if (font_color.value) {
                style.color = font_color.value
            }
            if (bg_color.value) {
                style.backgroundColor = bg_color.value
            } else {
                style.border = `1px solid gray`
            }
            if (border_color.value) {
                style.border = `1px solid ${border_color.value}`
            }
            return style
        })
        return {
            groupName,
            font_color,
            bg_color,
            border_color,
            onTitleInput,
            formatStyle,
            font_change,
            bg_change,
            border_change,
            bg_color_default,
            font_color_default,
            border_color_default,
            cancel,
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" >
.new-group {
    width: 100%;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 15px #a0a0a0b7;
    overflow: hidden;
}

.group-item {
    display: inline-block;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    width: auto;
    border-radius: 5px;
}

input {
    display: inline-block;
    width: 100px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
</style>
