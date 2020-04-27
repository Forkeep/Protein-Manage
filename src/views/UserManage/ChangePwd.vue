<template>
  <div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item :validateStatus="userNameStatus" :help="userNameHelp">
        <a-input placeholder="Username" v-model="userName" disabled>
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
        <a-button
          type="primary"
          class="login-form-button"
          :disabled="hasErrors"
          @click="changePwd"
        >
          修改密码
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="js">
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
        currentUser: {},
        userList: [],
      };
    },
    mounted() {
      this.currentUser = JSON.parse(
        window.localStorage.getItem("currentUser") ||
        '{"userName":"admin","password":"123","admin":"1"}'
    );
    this.userName = this.currentUser.userName;
    this.userList = JSON.parse(window.localStorage.getItem("user"));
  },
  watch: {
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
        for (let i = 0; i < this.userList.length; i++) {
          if (this.userList[i].userName === this.currentUser.userName) {
            this.userList[i].password = this.currentUser.password;
          }
        }
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
    changePwd() {
      window.localStorage.setItem("user", JSON.stringify(this.userList));
      this.$router.push("/protein-manage")
    }
  }
};
</script>

<style lang="scss" scoped></style>
