<template>
  <div>
    <button @click="show">To Validate Img Code</button>

    <!--  -->
    <mulo-imgcode ref="imgcode" @success="success" :showerr="showerr"></mulo-imgcode>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created() {},
  methods: {
    // open imgcode validate
    show() {
      this.$refs.imgcode.show();
    },
    //validate successed action
    success() {
      alert('验证成功');
    },
    showerr(msg) {
      alert(msg);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>