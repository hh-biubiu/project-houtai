<template>
  <div>
    <el-button type="primary" @click="Wadd" class="but">添加</el-button>
    <v-list @edit="edit($event)"></v-list>
    <v-add :info="info" ref="one"></v-add>
  </div>
</template>

<script>
import vList from './manageList.vue';
import vAdd from './manageAdd.vue';
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
            this.info.title = '商品添加';
        },
        edit(id){
            this.info.isShow = true;
            this.info.isAdd = false;
            this.info.title = '商品修改';
            this.$refs.one.getone(id);
        }
    }
};
</script>

<style>
</style>