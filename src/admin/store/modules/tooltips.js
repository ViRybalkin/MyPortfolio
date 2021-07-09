export default {
  namespaced:true,
  state:{
    isShown:false,
    text:"",
    type:"success"
  },
  mutations:{
    SET_TOOLTIP:(state,tooltip) =>{
      state.isShown = tooltip.isShown
      state.text = tooltip.text
      state.type = tooltip.type
    }
  },
  actions:{
    show({commit,dispatch},tooltip) {
      let timeOut = null;
      commit("SET_TOOLTIP",{
        isShown:true,
        text:tooltip.text,
        type:tooltip.type
      })

      if(timeOut){
        clearTimeout(timeOut)
      }

      timeOut = setTimeout(() => {
        dispatch('hide')
      }, 2000);
    },
    hide({commit,state}){
      commit("SET_TOOLTIP",{
        ...state,
        isShown:false
      })
    }
  }
}