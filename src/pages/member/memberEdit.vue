<template>
  <div>
    <el-dialog title="会员修改" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="width">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="width">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="状态" :label-width="width">
          <el-switch  v-model="form.status"  active-color="#13ce66" inactive-color="#ff4949" :active-value="1"   :inactive-value="2">
        </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="updata" >修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {  reMemberInfo, reMemberEdit } from "../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
 props:["info"],
  computed: {
    ...mapGetters({
      list: "role/list",
    }),
  },
  components: {},
  data() {
    return {
      width: "130px",
      form: {
        phone:'',
        nickname: "",
        password: "",
        status: 1,
      },
    };
  },
  methods: {
    // 关闭弹出
    hide() {
      this.info.isShow = false;
    },
    // 初始化
    empty() {
      this.form = {
        phone:'',
        nickname: "",
        password: "",
        status: 1,
      };
    },
    cancle(){
        this.empty();
        this.hide();
    },

    ...mapActions({
      reqMemberList: "member/reqMemberList",
    }),
    // 获取一条数据的方法
    getone(id) {
      reMemberInfo({ uid: id }).then((res) => {
        this.form = res.data.list;
        this.form.password = ''
      });
    },
    // 数据更改
    updata(form) {
      reMemberEdit(this.form).then((res) => {
        this.hide();
        this.reqMemberList();
        this.empty()
      });
    },
  },
  mounted() {
    this.reqMemberList();
  },
};
</script>

<style>
</style>