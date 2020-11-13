<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="width">
          <el-tree
            :data="list"
            show-checkbox
            node-key="id"
            ref="tree"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          ></el-tree>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reRoleAdd, reRoleInfo, reRoleEdit } from "../../util/request";
import { mapActions,mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters({
             list:'menu/list'
        })
    },
  props: ["info"],
  data() {
    return {
      form: {
       rolename:'',
       menus:[],
        status: 1
      },
      width: "140px",
      defaultProps: {
          children: 'children',
          label: 'title'
        }
    };
  },
  methods: {
    //弹框隐藏
    hide() {
      this.info.isShow = !this.info.isShow;
    },
    empty(){
        this.form={
            rolename:'',
            menus:[],
            status: 1
        };
        this.form.menus = this.$refs.tree.setCheckedKeys([5])
    },
    ...mapActions({
      reqMenuList: "menu/reqMenuList",
      reqRoleList:'role/reqRoleList'
    }),
    add() {
        // console.log(this.$refs.tree.getCheckedKeys());
        // 由于要的menus是字符串数组，所以需要把数据通过stringify转为字符串
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      console.log(this.form.menus);
      reRoleAdd(this.form).then(res => {
        this.hide();
        this.reqRoleList();
        this.empty();
      });
    },
    //取消
    cancle() {
      this.info.isShow = false;
      this.empty();
    },
    //获取一条数据
    getone(id) {
      reRoleInfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.menus =  this.$refs.tree.setCheckedKeys(JSON.parse(res.data.list.menus))
        //  console.log(this.form);
        //  console.log(res);
        // 目的就是为了更新数据的时候获取id
        this.form.id = id;
      });
    },
    updata(form) {
         this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reRoleEdit(this.form).then(res => {
        this.hide();
        this.reqRoleList();
        this.empty();
      });
    }
  },
  mounted() {
    this.reqMenuList();
  }
};
</script>

<style>
</style>