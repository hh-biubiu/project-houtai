import {reClaList} from '../../util/request';
//初始数据
const state = {
    list:[]
}
const mutations = {
    getList(state,arr){
        state.list = arr
    }
}
//异步操作
const actions = {
    reqClaList(context){
        reClaList({istree:true}).then(res=>{
            context.commit('getList',res.data.list)
            // console.log(res);
        })
    }
}
 //导出数据
 const getters = {
     list(state){
         return state.list
     }
 }
 export default {
    state,
    mutations,
    actions,
    getters,
    //如果需要导出给index使用，必须添加
    namespaced:true 
 }