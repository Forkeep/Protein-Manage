<template>
  <div>
    <a-dropdown class="chooseProtein">
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item v-for="item in proteinList" :key="item.key">
          <a-icon type="user" />
          {{ item[0] }}
        </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px">
        选择蛋白质
        <a-icon type="down" />
      </a-button>
    </a-dropdown>
    <a-table :columns="columns" :dataSource="data" bordered size="small">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <template slot="title">
        残基信息列表
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "蛋白质名称",
    dataIndex: "protein",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "残基",
    dataIndex: "residues"
  },
  {
    title: "列名",
    dataIndex: "col_name"
  },
  {
    title: "残基属性",
    dataIndex: "res_props"
  }
];

export default {
  data() {
    return {
      data: [],
      columns,
      proteinList: [],
      currentProteinResidues: []
    };
  },
  mounted() {
    this.proteinList = JSON.parse(window.localStorage.getItem("proteinItem"));
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
      let currentIndex = parseInt(e.key.split("_")[1]);
      let currentId = this.proteinList[currentIndex][1].toLowerCase();
      console.log(currentId);
    }
  }
};
</script>

<style lang="less" scoped>
.chooseProtein {
  position: relative;
  margin-bottom: 30px;
}
</style>
