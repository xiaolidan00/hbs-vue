<template>
  <div class="login-page">
    <div class="login-top">
      <img src="@/assets/logo.svg" class="login-logo">
      <div class="login-title">{{getLangText(label.loginTitle)}}</div>
    </div>
    <div class="login-center">
      <div class="login-input">
        <input type="text" class="login-no" :placeholder="getLangText(label.loginNo)">

        <input type="password" class="login-pwd" :placeholder="getLangText(label.loginPwd)">
      </div>
      <div class="login-btn">
        <button>{{getLangText(label.loginBtn)}}</button>
      </div>
      <div class="login-tip left-right-box">
        <span class="left-box">{{getLangText(label.register)}}</span>
        <span class="right-box">{{getLangText(label.forget)}}</span>
      </div>
    </div>
    <div class="login-bottom">{{new Date().getFullYear()+' '+getLangText(label.loginBottom)}}</div>
  </div>
</template>

<script>
import Label from "@/components/util/label.js";
export default {
  name: "Login",
  data() {
    return {
      label: Label.login
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  .login-top {
    text-align: center;
    .login-logo {
      height: 30vw;
      width: 30vw;
    }
    .login-title {
      font-size: 6vw;
      line-height: 12vw;
    }
  }
  .login-center {
    width: 80%;
    text-align: center;
    .login-input {
      margin-top: 10vw;
      border-radius: 2vw;
      background-color: white;
      padding: 2vw;
      display: block;
      > input {
        border: none;
        width: 90%;
        height: 10vw;
        line-height: 10vw;
        outline: none;
        font-size: 4vw;
        padding-left: 10%;
      }
      > input::placeholder,
      > input::-moz-placeholder,
      > input::-webkit-input-placeholder {
        color: lightgray;
      }
      .login-no {
        background: url("~@/assets/user.svg") no-repeat left;
        background-position: 0 50%;
        background-size: auto 50%;
      }

      .login-no:focus {
        background: url("~@/assets/user1.svg") no-repeat left;
        background-position: 0 50%;
        background-size: auto 50%;
      }
      .login-pwd {
        background: url("~@/assets/password.svg") no-repeat left;
        background-position: 0 50%;
        background-size: auto 50%;
      }
      .login-pwd:focus {
        background: url("~@/assets/password1.svg") no-repeat left;
        background-position: 0 50%;
        background-size: auto 50%;
      }
    }
    .login-btn {
      display: flex;
      flex-direction: row;
      margin-top: 6vw;
      button {
        flex: 1;
        line-height: 12vw;
        height: 12vw;
        border-radius: 12vw;
        border: none;
        color: white;
        font-size: 4vw;
        outline: none;
        background-color: #9400d3;
      }

      button:active {
        background-color: #9932cc;
      }
    }
    .login-tip {
      font-size: 3vw;
      padding: 0 4vw;
      color: dodgerblue;
      display: flex;
      flex-direction: row;

      line-height: 10vw;
      > span:first-child {
        flex: 1;
        display: inline-block;
        text-align: left;
      }
      > span:last-child {
        flex: 1;
        display: inline-block;
        text-align: right;
      }
    }
  }
  .login-bottom {
    position: static;
    margin-top: 30vw;
    color: lightgray;
    font-size: 4vw;
  }
}
</style>
