<template>
  <div class="login">
    <div class="wrapper">
        用户登录
      <div class="input-data">
        <input type="text" required />
        <div class="underline"></div>
        <label>请输入账号</label>
      </div>
      <div class="input-data">
        <input type="password" required />
        <div class="underline"></div>
        <label>请输入密码</label>
      </div>

      <a href="#">登录</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置body高度为100%窗口高度 */
  height: 100vh;
  // background: #000;
  background: linear-gradient(200deg, #0c3483, #a2b6df);

  a {
    /* 相对定位 */
    position: relative;
    display: inline-block;
    width: 400px;
    height: 65px;
    line-height: 65px;
    text-align: center;
    margin-top: 45px;;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
    /* 渐变背景 */
    background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    z-index: 1;
  }
  /* 发光效果 */
  a::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    /* 渐变背景 */
    background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    /* 位于按钮之下 */
    z-index: -1;
    /* 设置模糊度 显示发光效果 */
    filter: blur(20px);
  }
  /* 鼠标移入执行动画 */
  a:hover {
    /* 动画：名称 时间 infinite是无限次播放 */
    animation: streamer 8s infinite;
  }
  a:hover::before {
    animation: streamer 8s infinite;
  }
  /* 接下来定义动画 */
  @keyframes streamer {
    100% {
      /* 背景位置 */
      background-position: -400% 0;
    }
  }

  .wrapper {
    width: 450px;
    background-color: #fff;
    /* 内边距（上下左右） */
    padding: 50px 40px;
    /* 盒子阴影 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* 圆角 */
    border-radius: 8px;
  }
  .wrapper .input-data {
    /* 相对定位 */
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    margin-top: 45px;
  }
  .wrapper .input-data input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    // border-bottom: 2px solid #c0c0c0;
  }
  .wrapper .input-data input:focus {
    outline: none;
  }
  /* 输入框获得焦点时 */
  .wrapper .input-data input:focus ~ label,
/* 输入框的值为合法时 */
.wrapper .input-data input:valid ~ label {
    /* label上移，同时改变字号、字体颜色 */
    transform: translateY(-25px);
    font-size: 15px;
    color: #2c6fdb;
  }
  .wrapper .input-data label {
    /* 绝对定位 */
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    /* 这个属性可以使点击label穿透到输入框 */
    pointer-events: none;
    /* 现在动画有点生硬，在这里需要给动画加个过渡 */
    transition: all 0.3s ease;
  }
  .wrapper .input-data .underline {
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #2c6fdb;
    /* 沿X轴缩小 */
    transform: scaleX(0);
    /* 这里同样给动画加个过渡 */
    transition: all 0.3s ease;
  }
  .wrapper .input-data input:focus ~ .underline,
  .wrapper .input-data input:valid ~ .underline {
    /* 沿X轴放大 */
    transform: scaleX(1);
  }
}
</style>
