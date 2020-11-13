<template>
  <div>
      <el-button type="primary" @click="Wadd" class="but">添加</el-button>
      <v-list  @edit='edit($event)'></v-list>
      <v-add :info = 'info' ref ="one"></v-add>
  </div>
</template>

<script>
import vList from './classifyList.vue';
import vAdd from './classifyAdd.vue'
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
                title:'商品分类添加'
            }
        }
    },
    methods:{
        Wadd(){
            this.info.isShow = !this.info.isShow;
            this.info.isAdd = true;
            this.info.title = '商品分类添加';
        },
        edit(e){
            this.info.isShow = true;
            this.info.isAdd = false;
            this.info.title = '商品分类修改';
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