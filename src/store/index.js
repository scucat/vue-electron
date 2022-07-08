import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    todoArray: [],
    finishedArray: [],
    keepTimes: 0,
    title:"坚持就是胜利"
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_TODO_ARRAY: (state, todoArray) => {
      state.todoArray = todoArray
    },
    SET_FINISHED_ARRAY: (state, finishedArray) => {
      state.finishedArray = finishedArray
    },
    SET_KEEP_TIMES: (state, keepTimes) => {
      state.keepTimes = keepTimes
    }
  }
})
