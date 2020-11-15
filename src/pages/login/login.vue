<template>
    	<div class="container demo-1">
			<div class="content">
				<div id="large-header" class="large-header">
					<canvas id="demo-canvas"></canvas>
					
					<div class="logo_box">
						<h3>欢迎你</h3>
						<form action="#" name="f" method="post">
							<div class="input_outer">
								<span class="u_user"></span>
								<input name="logname" class="text"  v-model ='user.username' style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
							</div>
							<div class="input_outer">
								<span class="us_uer"></span>
								<input name="logpass" class="text" v-model ='user.password' style="color: #FFFFFF !important; position:absolute; z-index:100;" value="" type="password" placeholder="请输入密码">
							</div>
							<div class="mb2" @click="login"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import '../../assets/js/pack.mim.js';
import '../../assets/js/TweenLite.min.js';
import '../../assets/js/rflogin.js'
import '../../assets/js/demo.js';
import {reUserLogin} from '../../util/request';
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      user:
        {
          username:'',
          password:''
        }
    }
  },
  methods:{
      ...mapActions({
          reqUserLogin:'admin/reqUserLogin'
      }),
    login(){
       reUserLogin(this.user).then(res=>{
            //  console.log(res.data.list);
              this.reqUserLogin(res.data.list);
               this.$router.push('/index')
	  })
    }
  },
 
};


</script>

<style>

</style>