<template>
  <div>
    <el-dialog title="菜单添加" :visible.sync="info.isShow">
      <el-form :model="form">

        <el-form-item label="规格名称" :label-width="width" >
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="规格属性" :label-width="width" v-for ='(item,index) in arrAttr' :key='index'>
          <el-row>
            <el-col :span="16">
              <el-input v-model="item.value" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" v-if='index==0' @click = 'addAttr'>新增属性</el-button>
               <el-button type="danger" v-else @click="del(index)">删除</el-button>
            </el-col>
          </el-row>
        </el-form-item>

       

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添加</el-button
        >
        <el-button type="primary" @click="updata(form)" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reSpecAdd, reSpecInfo, reSpecEdit } from "../../util/request";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      list: "spec/list",
    }),
  },
  components: {},
  data() {
    return {
      // isShow:true,
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      width: "140px",
      arrAttr:[{
        value:''
      }],
    };
  },
  methods: {
    // 新增属性
    addAttr(){
        this.arrAttr.push({
          value:''
        })
    },
    // 删除属性
    del(index){
        this.arrAttr.splice(index,1)
    },
    //  让弹框隐藏
    hide() {
      this.info.isShow = false;
    },
    cancle(){
      this.hide();
      this.empty()
    },
    // 重置数据
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
       this.arrAttr=[{
        value:''
      }];
    },

    //   添加数据到数据库
    add() {
      this.form.attrs = JSON.stringify(this.arrAttr.map(item=>{return item.value})) 
      // console.log(this.arrAttr.map(item=>{ return item.value}));
      
      reSpecAdd(this.form).then((res) => {
        this.hide();
        this.reqSpecList();
        // 数据重置
        this.empty();
      });
    },
    ...mapActions({
      reqSpecList: "spec/reqSpecList",
    }),
    // 获取一条数据
    getone(id) {
      reSpecInfo({ id: id }).then((res) => {
        this.form = res.data.list[0];
        // 目的就是为了更新数据的时候获取id
        this.form.id = id;
        // 修改拿回来的数据 
        this.arrAttr = JSON.parse(this.form.attrs).map(item=>{return {value:item}})
        console.log(this.arrAttr);
        
      });
    },
    updata(form) {
       this.form.attrs = JSON.stringify(this.arrAttr.map(item=>{return item.value}))
      reSpecEdit(this.form).then((res) => {
        this.hide();
        this.reqSpecList();
        // 重置数据
        this.empty();
      });
    },
  },
  mounted() {
    this.reqSpecList();
  },
};
</script>

<style>
</style>