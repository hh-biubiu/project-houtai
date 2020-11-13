<template>
    <div>
         <el-button type="primary" @click="Wadd" class="but">添加</el-button>
        <v-list @edit='edit($event)'></v-list>
        <v-add :info="info" ref="one"></v-add>
    </div>
</template>

<script>
import vList from './characterList.vue';
import vAdd from './characterAdd.vue';
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
                title:'角色添加'
            }
        }
    },
    methods:{
        Wadd(){
            this.info.isShow = !this.info.isShow
            this.info.isAdd = true
            this.info.title = '角色添加'
        },
        edit(id){
            this.info.isShow = true
            this.info.isAdd = false
            this.info.title = '角色修改'
            this.$refs.one.getone(id)
        }
    }
}
</script>

<style>
    .but{
        margin-bottom: 20px;
    }
</style>