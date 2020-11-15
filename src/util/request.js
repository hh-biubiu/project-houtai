import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'
axios.interceptors.response.use(res=>{
    console.log(res);
    return res
})
//菜单添加
export const reMenuAdd = (form)=>{
    return axios({
        url:baseUrl + "/api/menuadd",
        method:"post",
        data:qs.stringify(form)
    })
}
//菜单列表
export const reMenuList = (params)=>{
    return axios({
        url:baseUrl +"/api/menulist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reMenuInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/menuinfo",
        method:"get",
        params:id
    })
}
//更新数据
export const reMenuEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/menuedit",
        method:"post",
        data:form
    })
}
//菜单删除
export const reMenuDel = (id)=>{
    return axios({
        url:baseUrl +"/api/menudelete",
        method:"post",
        data:id
    })
}


//角色添加
export const reRoleAdd = (form)=>{
    return axios({
        url:baseUrl + "/api/roleadd",
        method:"post",
        data:qs.stringify(form)
    })
}
//角色列表
export const reRoleList = ()=>{
    return axios({
        url:baseUrl +"/api/rolelist",
        method:"get",
    })
}
//修改获取一条数据
export const reRoleInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/roleinfo",
        method:"get",
        params:id
    })
}
//更新数据
export const reRoleEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/roleedit",
        method:"post",
        data:form
    })
}
//角色删除
export const reRoleDel = (id)=>{
    return axios({
        url:baseUrl +"/api/roledelete",
        method:"post",
        data:id
    })
}


//管理员添加
export const reUserAdd = (form)=>{
    return axios({
        url:baseUrl + "/api/useradd",
        method:"post",
        data:qs.stringify(form)
    })
}
//管理员总数
export const reUserCount = ()=>{
    return axios({
        url:baseUrl + "/api/usercount",
        method:"get",
    })
}
//管理员列表
export const reUserList = (params)=>{
    return axios({
        url:baseUrl +"/api/userlist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reUserInfo = (params)=>{
    return axios({
        url:baseUrl +"/api/userinfo",
        method:"get",
        params:params
    })
}
//更新数据
export const reUserEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/useredit",
        method:"post",
        data:form
    })
}
//管理员删除
export const reUserDel = (id)=>{
    return axios({
        url:baseUrl +"/api/userdelete",
        method:"post",
        data:id
    })
}
//管理员登录
export const reUserLogin = (user)=>{
    return axios({
        url:baseUrl +"/api/userlogin",
        method:"post",
        data:user
    })
}

//商品分类添加
export const reClaAdd = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl + "/api/cateadd",
        method:"post",
        data:data
    })
}

//商品分类列表
export const reClaList = (params)=>{
    return axios({
        url:baseUrl +"/api/catelist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reClaInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/cateinfo",
        method:"get",
        params:id
    })
}
//商品分类更新数据
export const reClaEdit = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl +"/api/cateedit",
        method:"post",
        data:data
    })
}
//商品分类删除
export const reClaDel = (id)=>{
    return axios({
        url:baseUrl +"/api/catedelete",
        method:"post",
        data:id
    })
}


//商品规格添加
export const reSpecAdd = (form)=>{
    return axios({
        url:baseUrl + "/api/specsadd",
        method:"post",
        data:qs.stringify(form)
    })
}

//商品规格总数
export const reSpecCount = ()=>{
    return axios({
        url:baseUrl + "/api/specscount",
        method:"get",
    })
}
//商品规格列表
export const reSpecList = (params)=>{
    return axios({
        url:baseUrl +"/api/specslist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reSpecInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/specsinfo",
        method:"get",
        params:id
    })
}
//商品规格更新数据
export const reSpecEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/specsedit",
        method:"post",
        data:qs.stringify(form)
    })
}
//商品规格删除
export const reSpecDel = (id)=>{
    return axios({
        url:baseUrl +"/api/specsdelete",
        method:"post",
        data:id
    })
}


//商品添加
export const reGoodsAdd = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl + "/api/goodsadd",
        method:"post",
        data:data
    })
}

//商品列表
export const reGoodsList = (params)=>{
    return axios({
        url:baseUrl +"/api/goodslist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reGoodsInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/goodsinfo",
        method:"get",
        params:id
    })
}
//商品更新数据
export const reGoodsEdit = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl +"/api/goodsedit",
        method:"post",
        data:data
    })
}
//商品删除
export const reGoodsDel = (id)=>{
    return axios({
        url:baseUrl +"/api/goodsdelete",
        method:"post",
        data:id
    })
}



//会员列表
export const reMemberList = ()=>{
    return axios({
        url:baseUrl +"/api/memberlist",
        method:"get",
    })
}
//修改获取一条数据
export const reMemberInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/memberinfo",
        method:"get",
        params:id
    })
}
//会员修改数据
export const reMemberEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/memberedit",
        method:"post",
        data:qs.stringify(form)
    })
}

//轮播图添加
export const reSlideAdd = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl + "/api/banneradd",
        method:"post",
        data:data
    })
}

//轮播图列表
export const reSlideList = (params)=>{
    return axios({
        url:baseUrl +"/api/bannerlist",
        method:"get",
        params:params
    })
}
//修改获取一条数据
export const reSlideInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/bannerinfo",
        method:"get",
        params:id
    })
}
//轮播图修改数据
export const reSlideEdit = (form)=>{
    var data = new FormData();
    for(var i in form){
        data.append(i,form[i])
    }
    return axios({
        url:baseUrl +"/api/banneredit",
        method:"post",
        data:data
    })
}
//轮播图删除
export const reSlideDel = (id)=>{
    return axios({
        url:baseUrl +"/api/bannerdelete",
        method:"post",
        data:id
    })
}

//秒杀活动添加
export const reKillAdd = (form)=>{
    return axios({
        url:baseUrl + "/api/seckadd",
        method:"post",
        data:qs.stringify(form)
    })
}

//秒杀列表
export const reKillList = ()=>{
    return axios({
        url:baseUrl +"/api/secklist",
        method:"get",
    })
}
//修改获取一条数据
export const reKillInfo = (id)=>{
    return axios({
        url:baseUrl +"/api/seckinfo",
        method:"get",
        params:id
    })
}
//秒杀修改数据
export const reKillEdit = (form)=>{
    return axios({
        url:baseUrl +"/api/seckedit",
        method:"post",
        data:qs.stringify(form)
    })
}
//商品分类删除
export const reKillDel = (id)=>{
    return axios({
        url:baseUrl +"/api/seckdelete",
        method:"post",
        data:id
    })
}

