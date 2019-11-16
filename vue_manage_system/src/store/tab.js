export default {
  state: {
    menu: [],
    currentMenu: null,
    tagList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home'
      }
    ]
  },
  mutations: {
    selectTabMenu(state, val) {
      if (val.name == 'home') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        let result = state.tagList.findIndex(item => item.name === val.name)
        result === -1 ? state.tagList.push(val) : ''
      }
      // val === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    closeTag(state, val) {
      let result = state.tagList.findIndex(item => item.name === val.name)
      state.tagList.splice(result, 1)
    }
  },
  actions: {}
}
