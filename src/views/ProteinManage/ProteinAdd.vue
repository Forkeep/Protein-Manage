<template>
  <div>
    <a-page-header>添加蛋白质</a-page-header>
    <div class="addProteinWrapper">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
      >
        <a-form-item>
          <a-input placeholder="蛋白质名称" v-model="name">
            <a-icon
              slot="prefix"
              type="plus-circle"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="PDB ID" v-model="pdb_id">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="分类" v-model="class_type">
            <a-icon
              slot="prefix"
              type="appstore"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="表达系统" v-model="express">
            <a-icon
              slot="prefix"
              type="deployment-unit"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="最长链" v-model="max">
            <a-icon
              slot="prefix"
              type="deployment-unit"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input type="date" placeholder="发行时间" v-model="datetime">
            <a-icon slot="prefix" type="table" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="addProtein"
        >
          添加
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      proteinList: [],
      name: '',
      pdb_id: '',
      class_type: '',
      express: '',
      datetime: '',
      max: '',
      newProtein: []
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  mounted() {
    this.proteinList = JSON.parse(window.localStorage.getItem('proteinItem'));
  },
  methods: {
    addProtein() {
      if (this.name === '' || this.pdb_id === '' || this.class_type === '' || this.express === '' || this.datetime === '' || this.max === '') {
        alert('请确保信息完整！');
      } else {
        this.datetime = this.datetime.replace(/-/g, '/');
        this.newProtein.push(this.name);
        this.newProtein.push(this.pdb_id);
        this.newProtein.push(this.class_type);
        this.newProtein.push(this.express);
        this.newProtein.push(this.datetime);
        this.newProtein.push(this.max);
        this.proteinList.push(this.newProtein);
        window.localStorage.setItem('proteinItem',JSON.stringify(this.proteinList));
        this.$router.push('/protein-manage/chain');
      }
    }
  },
};
</script>

<style lang="less" scoped>
.addProteinWrapper {
  width: 40vw;
  transform: translateX(50%) translateY(10%);
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
