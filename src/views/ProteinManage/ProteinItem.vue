<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered size="small">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <template slot="title">
        蛋白质列表
      </template>
      <template slot="action" slot-scope="action">
        <a-button
          type="danger"
          :disabled="currentUser.admin === '0'"
          @click="delProteinItem(action.split('-')[1])"
        >
          {{ action }}
        </a-button>
      </template>
    </a-table>
    <router-link to="/protein-manage/add" v-show="currentUser.admin === '1'">
      <a-button type="primary"> 添加蛋白质</a-button>
    </router-link>
  </div>
</template>

<script lang="js">
const columns = [
  {
    title: '蛋白质名称',
    dataIndex: 'name',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: 'PDB ID',
    dataIndex: 'pdb',
  },
  {
    title: '分类',
    dataIndex: 'type',
  },
  {
    title: '表达系统',
    dataIndex: 'express',
  },
  {
    title: '发行时间',
    dataIndex: 'datetime',
  },
  {
    title: '管理蛋白质',
    dataIndex: 'action',
    scopedSlots: {customRender: 'action'}
  }
];

export default {
  data() {
    return {
      proteinList: [],
      columns,
      data: [],
      currentUser: {}
    }
  },
  mounted() {
    this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    this.proteinList = JSON.parse(window.localStorage.getItem('proteinItem') || '[\n' +
      '["恶性T细胞扩增序列蛋白","3R90","RNA结合蛋白","大肠杆菌BL21（DE3）","2011/4/13","L"],\n' +
      '["BETA-N-乙酰半乳糖苷酶","5FQE","产气荚膜梭菌","大肠杆菌","2016/3/30","B"],\n' +
      '["单体外膜孔蛋白OmpG","2IWV","离子通道","大肠杆菌BL21（DE3）","2006/8/14","D"],\n' +
      '["O-甲基转移酶家族蛋白","4OA5","TRANSFERASE","大肠杆菌","2014/3/5","F"],\n' +
      '["酰基辅酶A脱氢酶","3PFD","氧化还原酶","大肠杆菌","2010/11/10","D"],\n' +
      '["HTLV蛋白酶","3LIX","水解酶/水解酶抑制剂","大肠杆菌","2010/7/14","B"],\n' +
      '["酪氨酰DNA磷酸二酯酶2","4GYZ","水解酶","细菌2b-G12","2012/10/31","I"],\n' +
      '["组织天冬氨酸蛋白酶","3QVI","水解酶/水解酶抑制剂","大肠杆菌","2011/10/12","D"],\n' +
      '["钠泵视紫红质","4XTN","膜蛋白","大肠杆菌","2015/4/1","J"],\n' +
      '["脱水奎宁酶","1GQO","LYASE","大肠杆菌BL21","2002/12/12","Y"],\n' +
      '["纤溶酶II","5YID","水解酶","肠杆菌噬菌体L1","2018/7/11","A"],\n' +
      '["Plasmepsin-1","3QS1","水解酶/水解酶抑制剂","大肠杆菌","2011/5/11","D"],\n' +
      '["结核分枝杆菌蛋白酶","3MI0","水解酶","大肠杆菌","2010/6/23","Z"],\n' +
      '["3-磷酸甘油醛脱氢酶","2PKR","氧化还原酶","大肠杆菌BL21（DE3）","2007/6/19","M"],\n' +
      '["天冬氨酸蛋白酶（HAP）","3FNU","水解酶/水解酶抑制剂","大肠杆菌","2009/5/12","D"],\n' +
      '["小隐孢子虫（cgd1_2980）中14-3-3蛋白的晶体结构","3EFZ","信号蛋白","大肠杆菌","2008/9/23","D"],\n' +
      '["葡萄糖淀粉酶","3EU8","水解酶","大肠杆菌","2008/10/21","D"],\n' +
      '["HIV-1蛋白酶","3A2O","水解酶/水解酶抑制剂","大肠杆菌","2010/3/2","B"],\n' +
      '["贾第虫14-3-3蛋白","4ZQ0","信号蛋白","大肠杆菌","2016/3/30","H"],\n' +
      '["GH27β-L-阿拉伯吡喃糖苷酶","4NX0","水解酶","大肠杆菌","2014/12/3","H"]\n' +
      ']');
    for (let i = 0; i < this.proteinList.length; i++) {
      this.data.push({
        key: i.toString(),
        name: this.proteinList[i][0],
        pdb: this.proteinList[i][1],
        type: this.proteinList[i][2],
        express: this.proteinList[i][3],
        datetime: this.proteinList[i][4],
        action: `删除-${i}`
      })
    }

  },
  beforeDestroy() {
    window.localStorage.setItem("proteinItem", JSON.stringify(this.proteinList));
  },
  methods: {
    delProteinItem(id) {
      this.proteinList.splice(id, 1);
      window.localStorage.setItem('proteinItem', JSON.stringify(this.proteinList));
      this.$router.go(0);
    }
  }
}
</script>

<style lang="less" scoped></style>
