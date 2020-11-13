<template>
  <div>
      <el-button type="primary" @click="Wadd" class="but">添加</el-button>
      <menu-list @edit='edit($event)'></menu-list>
      <menu-add :info = 'info' ref='one'></menu-add>
  </div>
</template>

<script>
import menuList from './menuList.vue';
import menuAdd from './menuAdd.vue'
export default {
    components:{
        menuList,
        menuAdd,
    },
    data(){
        return {
           info:{
                isShow:false,
                isAdd:true
           }
        }
    },
    methods:{
        Wadd(){
            this.info.isShow = !this.info.isShow;
            this.info.isAdd = true
        },
        edit(e){
        // console.log(e);  //此时获取的是每一条数据的id
        this.info.isShow = true,
        this.info.isAdd = false
        // console.log(this.$refs);
        this.$refs.one.getone(e)
    }
    }
}
</script>

<style>
    .but{
        margin-bottom: 20px;
    }
</style>