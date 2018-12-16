<template>
  <div id="login">
      <div class="inputBox">
      <div>
          <h2 style="text-align: center; color: #fff;">登录</h2>
          <Input class="username" prefix="md-person" size="large" placeholder="请输入你的姓名" style="width: 100%" /><br>
          <Input @keyup.native.enter='Login' class="password" type='password' prefix="ios-lock" size="large" placeholder="请输入您的密码" style="width: 100%" />
          <Button @click="Login" type="primary" :loading="loading2" icon="ios-power" style='width:100%;'>
              <span v-if="!loading2">登录!</span>
              <span v-else>登录中...</span>
          </Button>
          <a style="float:right; margin-top:20px;" href="javascript:;">忘记密码？</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading2: false
    }
  },
  methods: {
    Login () {
      this.loading2 = true
      this.$router.push('/User')
      this.$Message.success('登录成功！')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  #login{
      width: 100%;
      height: 100%;
      position: relative;
      background-color:#2d3a4b;
    .inputBox{
      width: 400px;
      height: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: transparent;
      transform: translate(-50%,-100%);
      .username{
        margin-bottom: 20px;
        margin-top: 20px;
      }
      .password{
        margin-bottom: 20px;
        height: 60px;
      }
      .login{
        width: 100%;
        height: 40px;
      }
    }
  }
</style>
