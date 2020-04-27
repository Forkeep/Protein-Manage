<template>
  <div class="register-wrapper">
    <div class="register">
      <h1>欢迎注册</h1>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item :validateStatus="userNameStatus" :help="userNameHelp">
          <a-input placeholder="Username" v-model="userName">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validateStatus="passwordStatus" :help="passwordHelp">
          <a-input type="password" placeholder="Password" v-model="password">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validateStatus="confirmStatus" :help="confirmHelp">
          <a-input
            type="password"
            placeholder="Confirm Password"
            v-model="confirmPwd"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            Remember me
          </a-checkbox>

          <a-button
            type="primary"
            class="login-form-button"
            :disabled="hasErrors"
            @click="registerUser"
          >
            注册
          </a-button>
          Or
          <router-link to="/user">
            现在登录
          </router-link>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userNameStatus: "",
      userNameHelp: "",
      passwordStatus: "",
      passwordHelp: "",
      confirmStatus: "",
      confirmHelp: "",
      hasErrors: true,
      userName: "",
      password: "",
      confirmPwd: "",
      userList: [],
      userNameList: [],
      currentUser: {}
    };
  },
  mounted() {
    this.userList = JSON.parse(
      window.localStorage.getItem("user") ||
        '[{"userName":"admin","password":123},{"userName":"xiaoming","password":123}]'
    );
    for (let i = 0; i < this.userList.length; i++) {
      this.userNameList.push(this.userList[i].userName);
    }
  },
  watch: {
    userName(val) {
      if (this.userNameList.indexOf(val) >= 0) {
        this.userNameStatus = "error";
        this.userNameHelp = "用户已存在";
        this.hasErrors = true;
      } else {
        this.userNameStatus = "";
        this.userNameHelp = "";
        this.currentUser.userName = val;
      }
    },
    password() {
      this.hasErrors = true;
    },
    confirmPwd(val) {
      if (val !== this.password.toString()) {
        this.confirmStatus = "error";
        this.confirmHelp = "请确认密码两次相同";
        this.hasErrors = true;
      } else {
        this.confirmStatus = "";
        this.confirmHelp = "";
        if (
          this.passwordStatus === "" &&
          this.userNameStatus === "" &&
          this.confirmStatus === ""
        ) {
          this.hasErrors = false;
        }
        this.currentUser.password = val;
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    registerUser() {
      this.userList.push(this.currentUser);
      console.log(this.currentUser);
      window.localStorage.setItem("user", JSON.stringify(this.userList));
      this.confirmPwd = "";
      this.password = "";
      this.userName = "";
      this.$router.push("/user");
    }
  }
};
</script>

<style lang="less" scoped>
.register-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
