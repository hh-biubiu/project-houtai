<template>
  <div>
      <el-button type="primary" @click="Wadd" class="but">添加</el-button>
      <v-list  @edit='edit($event)'></v-list>
      <v-add :info = 'info' ref ="one"></v-add>
  </div>
</template>

<script>
import vList from './slideList.vue';
import vAdd from './slideAdd.vue'
export default {
    components:{
        vList,
        vAdd
    },
    data(){
        return {
            info:{
                isShow:false,
                isAdd:true,
                title:''
            }
        }
    },
    methods:{
        Wadd(){
            this.info.isShow = !this.info.isShow;
            this.info.isAdd = true;
            this.info.title = '轮播图添加';
        },
        edit(e){
            this.info.isShow = true;
            this.info.isAdd = false;
            this.info.title = '轮播图修改';
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