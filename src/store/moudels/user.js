import {reUserList,reUserCount} from '../../util/request';
//初始数据
const state = {
    list:[],//请求回来到数据,
    total:0,//管理员总数,
    size:2, //每页展示几条
    page:1 //当前页码数
}
const mutations = {
    getList(state,arr){
        state.list = arr
    },
    getTotal(state,num){
        state.total = num
    },
    getPage(state,page){
        state.page = page
    }
}
//异步操作
const actions = {
    reqUserList(context){
        reUserList({
            size:context.state.size,
            page:context.state.page
        }).then(res=>{
            context.commit('getList',res.data.list)
            // console.log(res);
        })
    },
    //请求总数
    reqUserCount(context,res){
        reUserCount().then(res=>{
            context.commit('getTotal',res.data.list[0].total)
            // console.log(res);
        })
    },
    // 获取当前页码数
    getCurrentPage(context,page){
        context.commit('getPage',page)
        // 目的是为了根据page的不同发送axios请求，那么这个请求的数据在mutations中，那么mutations不能修改actions，所以需要用下面方法
        context.dispatch('reqUserList')
    }
}
 //导出数据
 const getters = {
     list(state){
         return state.list
     },
     page(state){
        return state.page
     },
     total(state){
        return state.total
     },
 }
 export default {
    state,
    mutations,
    actions,
    getters,
    //如果需要导出给index使用，必须添加
    namespaced:true 
 }