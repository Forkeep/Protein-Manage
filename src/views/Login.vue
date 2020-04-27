<template>
  <div class="login-wrapper">
    <div class="login">
      <h1>蛋白质管理系统</h1>
      <a-form layout="vertical" :form="form" @submit="handleSubmit">
        <a-form-item :validateStatus="userNameStatus" :help="userNameHelp">
          <a-input placeholder="Username" v-model="userName">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validateStatus="passwordStatus" :help="passwordHelp">
          <a-input type="password" placeholder="Password" v-model="password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="login-or-register">
            <div>
              <router-link class="to-login" to="/system-introduce">
                <a-button
                  type="primary"
                  html-type="submit"
                  :disabled="hasErrors"
                >
                  登录
                </a-button>
              </router-link>
            </div>
            <div>
              <router-link class="to-register" to="/user/register">
                <a-button>
                  注册
                </a-button>
              </router-link>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      userName: '',
      password: '',
      hasErrors: true,
      userNameStatus: '',
      passwordStatus: '',
      userNameHelp: '',
      passwordHelp: '',
      form: this.$form.createForm(this, {name: 'horizontal_login'}),
    };
  },
  created() {
  },
  watch: {
    userName(val) {
      if (val !== 'admin') {
        this.userNameStatus = 'error';
        this.userNameHelp = '没有此用户';
        this.hasErrors = true
      } else {
        this.userNameStatus = '';
        this.userNameHelp = '';
        if (this.password === '123') {
          this.hasErrors = false
        }
      }
    },
    password(val) {
      if (val !== '123') {
        this.passwordStatus = 'error';
        this.passwordHelp = '密码错误';
        this.hasErrors = true
      } else {
        this.passwordStatus = '';
        this.passwordHelp = '';
        if (this.userName === 'admin') {
          this.hasErrors = false
        }
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrapper {
  min-height: 100vh;
  background-image: url("https://raw.githubusercontent.com/Forkeep/Image_repo/master/img/protein.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  border-radius: 20px;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
  background: white;
  min-height: 50vh;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-or-register {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .to-login {
    background-color: aqua;
  }
}
</style>
