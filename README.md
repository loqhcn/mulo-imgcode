## vue移动端图片验证码弹出层插件

<img alt="img" src="http://qiniu1.loqh.cn/mulo-imgcode-view.png">


## 使用

```cmd

npm i mulo-imgcode -S

```

```html
<template>
  <div>
    <button @click="show">To Validate Img Code</button>
    <mulo-imgcode ref="imgcode" @success="success" :showerr="showerr"></mulo-imgcode>
  </div>
</template>

<script>
/* eslint-disable */
import ImgCode from 'mulo-imgcode'
import "mulo-imgcode/lib/index.css";

export default {
  components: {
    [ImgCode.name]:ImgCode
  },
  created() {},
  methods: {
    //显示图片验证码 , 在需要图形验证码的时候进行这个处理
    show() {
      this.$refs.imgcode.show();
    },
    //validate successed action
    success() {
      alert('验证成功');
    },
    //show error msg
    showerr(msg) {
      alert(msg);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
```

## cdn使用示例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试</title>
</head>

<body>
    <div id="app">
        <button @click="show">打开</button>
        <mulo-imgcode ref="imgcode" @success="success" :showerr="showerr"></mulo-imgcode>
    </div>
    <link rel="stylesheet" href="https://unpkg.com/mulo-imgcode/lib/index.css">
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.js"></script>
    <script src="https://unpkg.com/mulo-imgcode"></script>
    
    <script>
        var vm = new Vue({
            el: '#app',
            methods: {
                //显示图片验证码 , 在需要图形验证码的时候进行这个处理
                show() {
                    this.$refs.imgcode.show();
                },
                //validate successed action
                success() {
                    alert('验证成功');
                },
                //show error msg
                showerr(msg) {
                    alert(msg);
                }
            }
        })
    </script>
</body>

</html>
```

## 样式

目前基于rem 100%=18.75的标准;
