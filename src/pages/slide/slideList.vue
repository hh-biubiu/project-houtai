<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="编号" sortable width="180"></el-table-column>
      <el-table-column prop="title" label="轮播图标题" sortable width="180"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="$preImg+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <!-- 作用域插槽 用来获取数据-->
        <template slot-scope="scope">
          <div>
            <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
            <el-button type="info" v-else disabled>禁用</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" @click="updata(scope.row.id)">修改</el-button>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { reSlideDel } from "../../util/request";
import {alertSuccess,alertwarning} from '../../util/alert'
export default {
  computed: {
    ...mapGetters({
      list: "slide/list"
    })
  },
  methods: {
    updata(id) {
      this.$emit("edit", id);
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        reSlideDel({ id: id }).then(res => {
          this.reqSlideList();
          alertSuccess(res.data.msg);
        });
      });
    },
    ...mapActions({
      reqSlideList: "slide/reqSlideList"
    })
  },
  mounted() {
    this.reqSlideList();
  }
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>