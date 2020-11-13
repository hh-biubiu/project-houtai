<template>
  <div>
    
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="菜单编号" width="180"></el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="icon" label="菜单图标"></el-table-column>
      <el-table-column prop="url" label="菜单地址"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <div>
               <el-button type='primary' v-if="scope.row.status==1">启用</el-button>
               <el-button type='info' v-else disabled>禁用</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">


         <template slot-scope="scope">
          <div>
               <el-button type='primary' @click="updata(scope.row.id)">修改</el-button>
               <el-button type='danger' @click="del(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import {reMenuDel} from '../../util/request'
export default {
   computed: {
    ...mapGetters({
      list:'menu/list'
    })
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      reqMenuList:'menu/reqMenuList'
    }),
    del(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            reMenuDel({id:id}).then(res=>{
        this.reqMenuList()
      })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }) 
    },
    //修改
    updata(id){
      this.$emit('edit',id)
    }
  },
  mounted(){
    this.reqMenuList();
  }
};
</script>

<style>
</style>