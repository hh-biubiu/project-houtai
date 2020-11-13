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
      <el-table-column prop="id" label="用户编号" sortable width="120">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" sortable width="130">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" sortable width="140">
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="info" disabled v-else>禁用</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" @click="updata(scope.row.uid)"
              >修改</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "member/list",
    }),
  },
  methods: {
    //   更新数据
    updata(id) {
      this.$emit('edit',id)
    },
    ...mapActions({
        reqMemberList:'member/reqMemberList'
    }),
  },
  mounted() {
      this.reqMemberList();
  },
};
</script>
<style>

</style>