import { createApp } from 'vue'
import App from './Main.vue'
import router from '../../router'
import store from '../../store'
import ColorPicker from 'colorpicker-v3'  // 注册组件
import 'colorpicker-v3/dist/style.css' // 引入样式文件
import XButton from '@/components/XButton'


// 全局引入scss https://blog.csdn.net/cbb_2313/article/details/107330979
createApp(App)
.use(store)
.use(router)
.use(ColorPicker)
.use(XButton)
.mount('#app')
