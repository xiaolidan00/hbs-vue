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
        <button class="login-btn-blue">{{getLangText(label.loginBtn)}}</button>
        <button class="login-btn-orange">{{getLangText(label.register)}}</button>
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
  background-color: #eeeeee;
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
        padding-left:10%;
      }
      >input::placeholder,>input::-moz-placeholder,>input::-webkit-input-placeholder{
        color:lightgray;
      }
      .login-no{
        background: url('~@/assets/user.svg') no-repeat left;
        background-position:0 50%; 
        background-size: auto 50%;
      }
      .login-pwd{
        background: url('~@/assets/password.svg') no-repeat left;
        background-position:0 50%; 
        background-size: auto 50%;
      }
      
    }
    .login-btn{
      display: flex;
      flex-direction: row;
     margin-top:6vw;
      button{
        flex:1;
        line-height:12vw;
        height:12vw;
        border-radius: 12vw;
        border:none;      
        margin-right:8vw;
        color:white;
        font-size: 4vw;
        outline:none;
        
      }
      button:last-child{
        margin-right:0;
      }
      button.login-btn-blue{
        background-color: DodgerBlue;
      }
      button.login-btn-blue:active{
        background-color: DeepSkyBlue;
      }
      button.login-btn-orange{
        background-color: Darkorange;
      }
      button.login-btn-orange:active{
      background-color:Gold;
      }
    }
  }
  .login-bottom {
    position: fixed;
    bottom: 0;
    color: lightgray;
    font-size: 4vw;
  }
}
</style>
