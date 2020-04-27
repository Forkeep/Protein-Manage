<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <template slot="title">
        管理用户
      </template>
      <template slot="action" slot-scope="action">
        <a-button type="danger" @click="delUser(action.split('-')[1])">{{
          action
        }}</a-button>
      </template>
    </a-table>
  </div>
</template>

<script lang="js">
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: '用户类型',
    dataIndex: 'type',
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: {customRender: 'action'},
  },
];

export default {
  data() {
    return {
      data: [],
      columns,
      userList: [],
      oneUser: {},
    };
  },
  mounted() {
    this.userList = JSON.parse(window.localStorage.getItem("user"));
    for (let i = 0; i < this.userList.length; i++) {
      this.data.push({
        key: (i + 1).toString(),
        name: this.userList[i].userName,
        type: this.userList[i].admin === '1' ? '管理员' : '普通用户',
        action: `删除用户-${i}`,
      });
    }
  },
  methods: {
    delUser(id) {
      this.userList.splice(parseInt(id), 1);
      window.localStorage.setItem('user', JSON.stringify(this.userList));
      this.$router.push("/protein-manage");
    }
  }
};
</script>

<style lang="less" scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
