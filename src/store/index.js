import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import menu from './moudels/menu';
import role from './moudels/role';
import user from './moudels/user';
import classify from './moudels/classify';
import spec from './moudels/spec';
import goods from './moudels/goods';
import member from './moudels/member';
export default new Vuex.Store({
    modules:{
        menu,
        role,
        user,
        classify,
        spec,
        goods,
        member
    }
})