<template>
  <div class="login-wrapper">
    <div class="login">
      <h1>蛋白质管理系统</h1>

      <a-form layout="vertical" :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              }
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              }
            ]"
            type="password"
            placeholder="Password"
          >
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
                  :disabled="hasErrors(form.getFieldsError())"
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
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: 'horizontal_login'}),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
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
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
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
