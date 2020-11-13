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
      <el-table-column prop="id" label="角色编号" width="180"></el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180"></el-table-column>
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
import {reRoleDel} from '../../util/request'
export default {
   computed: {
    ...mapGetters({
      list:'role/list'
    })
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      reqRoleList:'role/reqRoleList'
    }),
    del(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            reRoleDel({id:id}).then(res=>{
        this.reqRoleList()
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
    this.reqRoleList();
  }
};
</script>

<style>

</style>