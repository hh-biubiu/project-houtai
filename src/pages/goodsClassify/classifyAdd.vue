<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级菜单" :label-width="width">
          <el-select v-model="form.pid" placeholder="请选择">
            <!-- <el-option label="请选择" :value="0" disabled></el-option> -->
            <el-option label="顶级分类" :value='0'></el-option>
            <el-option
              :label="item.catename"
              v-for="item in list"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="width">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="width">
          <el-upload class="avatar-uploader" action="#" :on-change="changeImg">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import { reClaAdd, reClaInfo, reClaEdit } from "../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      form: {
        pid:0,
        catename: "",
        img: null,
        status: 1
      },
      width: "130px",
      imageUrl: ""
    };
  },
  computed: {
    ...mapGetters({
      list: "classify/list"
    })
  },
  methods: {
    ...mapActions({
      reqClaList: "classify/reqClaList"
    }),
    hide() {
      this.info.isShow = false;
    },
    //清空
    empty() {
      this.form = {
        pid: 0,
        catename: "",
        img: null,
        status: 1
      };
      this.imageUrl="";
    },
    //添加
    add() {
      reClaAdd(this.form).then(res => {
        console.log(this.form)
        this.hide();
        this.reqClaList();
        this.empty();
      });
    },
    //获取一条数据
    getone(id) {
      reClaInfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        // console.log(res.data.list.img);
        this.imageUrl = this.$preImg + this.form.img;
      });
    },
    //修改
    updata(form) {
      reClaEdit(this.form).then(res => {
        this.hide();
        this.reqClaList();
        this.empty();
      });
    },
    //取消
    cancle() {
      this.hide();
      this.empty();
    },
    //上传图片
    changeImg(e) {
      console.log(e);
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    }
  },
  mounted() {
    this.reqClaList();
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 2px dotted lightblue;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>