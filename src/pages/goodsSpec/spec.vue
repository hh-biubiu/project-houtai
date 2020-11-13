<template>
  <div>
    <el-button class="but" type="primary" @click="willAdd">添加</el-button>
    <v-list @edit="edit($event)"></v-list>
    <v-add :info="info" ref="one"></v-add>
  </div>
</template>

<script>
import vList from "./specList.vue";
import vAdd from "./specAdd.vue";
export default {
  components: {
    vList,
    vAdd
  },
  data(){
      return{
          info:{
              isShow:false,
              isAdd:true,
              title:'商品规格添加'
          }
      }
  },
  methods:{
      willAdd(){
          this.info.isShow = !this.info.isShow;
          this.info.isAdd = true;
           this.info.title = '商品规格添加'
      },
      edit(e){
            this.info.isShow = true;
          this.info.isAdd = false;
          this.info.title = '商品规格修改'
          this.$refs.one.getone(e)
      }
  }
};
</script>

<style>
    .but{
        margin-bottom: 20px;
    }
</style>