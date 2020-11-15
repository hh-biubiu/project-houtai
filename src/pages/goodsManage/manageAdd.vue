<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow" @opened="creatEdit">
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="width">
          <el-select v-model="form.first_cateid" placeholder="请选择" @change="changeSecond">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              :label="item.catename"
              v-for="item in clalist"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="width">
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              :label="item.catename"
              v-for="item in secondList"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="width">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="width">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" :label-width="width">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="width">
          <el-upload class="avatar-uploader" action="#" :on-change="changeImg">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品规格" :label-width="width">
          <el-select v-model="form.specsid" placeholder="请选择" @change="changeSpec">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              :label="item.specsname"
              v-for="item in specList"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格属性" :label-width="width">
          <el-select v-model="form.specsattr" placeholder="请选择" multiple>
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option :label="item" v-for="item in secondSpec" :value="item" :key="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否新品" :label-width="width">
          <el-radio v-model="form.isnew" :label="1">是</el-radio>
          <el-radio v-model="form.isnew" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否热卖" :label-width="width">
          <el-radio v-model="form.ishot" :label="1">是</el-radio>
          <el-radio v-model="form.ishot" :label="2">否</el-radio>
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
        <el-form-item label="商品描述">
          <div id="div1" v-if = 'info.isShow'></div>
          <!-- <el-input type="textarea" v-model="form.description"></el-input> -->
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
import { reGoodsAdd, reGoodsInfo, reGoodsEdit } from "../../util/request";
import E from 'wangeditor';
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsattr: [],
        specsid: "",
        isnew: 1,
        ishot: 1,
        status: 1
      },
      secondList: [],
      secondSpec: [],
      width: "130px",
      imageUrl: ""
    };
  },
  computed: {
    ...mapGetters({
      clalist: "classify/list",
      specList: "spec/list",
      list: "goods/list"
    })
  },
  methods: {
    ...mapActions({
      reqClaList: "classify/reqClaList",
      reqGoodsList: "goods/reqGoodsList",
      reqSpecList: "spec/reqSpecList"
    }),
    hide() {
      this.info.isShow = false;
    },
    //清空
    empty() {
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsattr: [],
        specsid: "",
        isnew: 1,
        ishot: 1,
        status: 1
      };
      this.imageUrl = "";
      this.secondList = [];
      this.secondSpec = [];
    },
    //添加
    add() {
      this.form.description = this.editor.txt.html();
      console.log(this.form.description);
      this.form.specsattr = JSON.stringify(this.form.specsattr);
      // console.log(this.form.specsattr);
      reGoodsAdd(this.form).then(res => {
        console.log(this.form);
        this.hide();
        this.reqGoodsList();
        this.empty();
      });
    },
    changeSecond() {
      // console.log(this.clalist[0].id);
      console.log(this.form.first_cateid);
      this.secondList = this.clalist.find(item => {
        return item.id == this.form.first_cateid;
      }).children;
      console.log(this.secondList);
    },
    changeSpec() {
      // console.log(this.form.specsid);
      this.secondSpec = this.specList.find(item => {
        return item.id == this.form.specsid;
      }).attrs;
      // console.log(this.secondSpec);
    },
    //获取一条数据
    getone(id) {
      // this.editor.txt.html(this.form.description)
      reGoodsInfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        // console.log(res.data.list.img);
        this.imageUrl = this.$preImg + this.form.img;
        this.form.specsattr = this.form.specsattr.split(',')
        console.log(this.form);
      });
    },
    //富文本
    creatEdit() {
      this.editor = new E("#div1");
      this.editor.create();
      this.editor.txt.html(this.form.description)
    },
    //修改
    updata(form) {
      reGoodsEdit(this.form).then(res => {
        this.hide();
        this.reqGoodsList();
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
    this.reqSpecList();
    this.reqGoodsList();
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