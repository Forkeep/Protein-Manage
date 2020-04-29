<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div
        v-show="!collapsed"
        class="logo"
        style="color: white;display: flex;align-items: center;justify-content: center"
      >
        蛋白质管理系统
      </div>
      <div
        v-show="collapsed"
        class="logo"
        style="color: white;display: flex;align-items: center;justify-content: center"
      >
        蛋白质
      </div>
      <a-menu theme="dark" :defaultSelectedKeys="defaultSelected" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="bulb" /><span>蛋白质管理</span></span
          >
          <a-menu-item key="1">
            <router-link to="/protein-manage/chain">蛋白质信息</router-link>
          </a-menu-item>
          <a-menu-item key="2" v-show="isAdmin">
            <router-link to="/protein-manage/add">添加蛋白质</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="branches" /><span>相互作用模块</span></span
          >
          <a-menu-item key="3">
            <router-link to="/interact/protein-chain"
              >蛋白质残基种类</router-link
            >
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/interact/residues">输出残基信息</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="user" /><span>账号管理</span></span>
          <a-menu-item key="5">
            <router-link to="/user-manage/change-pwd">修改密码</router-link>
          </a-menu-item>
          <a-menu-item key="6" v-show="isAdmin">
            <router-link to="/user-manage/manage-user">管理用户</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="7">
          <router-link to="/user">
            <a-icon type="poweroff" />
            <span>退出登录</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="8">
          <router-link to="/system-introduce">
            <a-icon type="html5" />
            <span>系统信息</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="u-header" style="background: #fff; padding: 0">
        <span style="font-size: 16px">蛋白质管理系统</span>
        <a-dropdown class="u-avatar">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="/user-manage/change-pwd">修改密码</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/user">退出登录</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <br />
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }"
        >
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        My Design ©2020 Created by ME
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      currentUser: {},
      isAdmin: false
    };
  },
  props: ["defaultSelected"],
  mounted() {
    this.currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    this.isAdmin = this.currentUser.admin === "1";
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.u-header {
  position: relative;
}

.u-header .u-avatar {
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
