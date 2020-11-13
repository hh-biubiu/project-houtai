<template>
  <div>
    <el-dialog title="用户添加" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="所属角色" :label-width="width">
          <el-select v-model="form.roleid" placeholder="请选择">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" :label-width="width">
          <el-input v-model="form.username" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="add" v-if = 'info.isAdd'>添 加</el-button>
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reUserAdd, reUserInfo, reUserEdit } from "../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "role/list",
      page: "user/page",
      total: "user/total",
    }),
  },
  props: ["info"],
  components: {},
  data() {
    return {
      width: "130px",
      form: {
        roleid: 0,
        username: "",
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
        roleid: 0,
        username: "",
        password: "",
        status: 1,
      };
    },
    cancle(){
        this.empty()
    },
    //添加数据到数据库
    add() {
      reUserAdd(this.form).then((res) => {
        this.reqRoleList()
        this.hide();    
        this.reqUserCount();
        this.getCurrentPage(Math.floor((this.total)/2)+1);
        this.reqRoleList();
        this.empty()
      });
        this.getCurrentPage(Math.ceil((this.total)/2)+1);
    },
    ...mapActions({
      reqRoleList: "role/reqRoleList",
      reqUserList: "user/reqUserList",
      reqUserCount: "user/reqUserCount",
      getCurrentPage: "user/getCurrentPage",
    }),
    // 获取一条数据的方法
    getone(id) {
      reUserInfo({ uid: id }).then((res) => {
        this.form = res.data.list;
        this.form.password = ''
      });
    },
    // 数据更改
    updata(form) {
      reUserEdit(this.form).then((res) => {
        this.hide();
        this.reqUserList();
        this.empty()
      });
    },
  },
  mounted() {
    this.reqUserList();
    this.reqUserCount();
    this.reqUserList();
  },
};
</script>

<style>
</style>