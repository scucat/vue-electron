import btn from './XButton.vue'
const XButton = {
  // install 为Vue实例上的一个方法
  install: function (Vue) {
    // 注册全局组件，此时MyBreadcrumb为使用的组件名称
    Vue.component('XButton', btn)
  }
}
// 导出组件
export default XButton

