<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动期限" :label-width="width" >
        <el-date-picker
        
          type="daterange"
          :picker-options="pickerOptions"
          v-model="time"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-date-picker>
        </el-form-item>
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
        <el-form-item label="商品" :label-width="width">
          <el-select v-model="form.goodsid" placeholder="请选择">
            <el-option label="请选择" :value="0" disabled></el-option>
            <el-option
              :label="item.goodsname"
              v-for="item in gList"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
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
import { reKillAdd, reKillInfo, reKillEdit } from "../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      form: {
        begintime:'',
        endtime:'',
        first_cateid: "",
        second_cateid: "",
        title:'',
        img: null,
        status: 1,
        
      },
      secondList: [],
      gList: [],
      width: "130px",
      start:'',
      end:'',
      time:'',
      pickerOptions:{
          onPick:({ maxDate, minDate })=>{
              return this.changeTime({maxDate,minDate});
          }
      }
    };
  },
  computed: {
    ...mapGetters({
      clalist: "classify/list",
      goodsList:'goods/list',
      list: "seckill/list"
    })
  },
  methods: {
    ...mapActions({
      reqClaList: "classify/reqClaList",
      reqKillList: "seckill/reqKillList",
      reqGoodsList:'goods/reqGoodsList'
    }),
    hide() {
      this.info.isShow = false;
    },
    //清空
    empty() {
      this.form = {
        begintime : '',
        endtime:'',
        first_cateid: "",
        second_cateid: "",
        title: "",
        status: 1
      };
      this.secondList = [];
      this.gList = [],
      this.start = '',
      this.end='',
      this.time = ''
    },
    //添加
    add() {
        this.form.begintime = this.start;
        this.form.endtime = this.end
      reKillAdd(this.form).then(res => {
        console.log(this.form);
        this.hide();
        this.reqKillList();
        this.empty();
      });
    },
    changeTime({maxDate,minDate}){
        this.start = new Date(maxDate).getTime();
        this.end = new Date(minDate).getTime();
    },
    changeSecond() {
    //   console.log(this.form.first_cateid);
      this.secondList = this.clalist.find(item => {
        return item.id == this.form.first_cateid;
      }).children;
      this.gList = this.goodsList.filter(item => {
        return item.first_cateid == this.form.first_cateid;
      });
      console.log(this.gList);
    //   console.log(this.secondList);
    },
    //获取一条数据
    getone(id) {
      // this.editor.txt.html(this.form.description)
      reKillInfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        console.log(this.form);
      });
    },
   
    //修改
    updata(form) {
       
      reKillEdit(this.form).then(res => {
        this.hide();
        this.reqKillList();
        this.empty();
      });
    },
    //取消
    cancle() {
      this.hide();
      this.empty();
    },
  },
  mounted() {
    this.reqClaList();
    this.reqGoodsList();
    this.reqKillList();
  }
};
</script>

<style scoped>
</style>