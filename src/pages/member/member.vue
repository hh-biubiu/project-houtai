<template>
  <div>
    <v-list @edit="edit($event)"></v-list>
    <v-add :info="info" ref="one"></v-add>
  </div>
</template>

<script>
import vList from "./memberList.vue";
import vAdd from "./memberEdit.vue";
export default {
  components: {
    vList,
    vAdd
  },
  data() {
    return {
      info: {
        isShow: false
      }
    };
  },
  methods: {
    edit(e) {
        // console.log(e);
      this.info.isShow = true;
      this.$refs.one.getone(e);
    }
  }
};
</script>

<style>
</style>