<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <template slot="title">
        蛋白质列表
      </template>
    </a-table>
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
    scopedSlots: {customRender: 'action'},
  },
  {
    title: '表达系统',
    dataIndex: 'express',
    scopedSlots: {customRender: 'action'},
  },
  {
    title: '发行时间',
    dataIndex: 'datetime',
    scopedSlots: {customRender: 'action'},
  },
];

export default {
  data() {
    return {
      proteinList: [],
      columns,
      data: [],
    }
  },
  created() {
    console.log('asd');
    this.proteinList = JSON.parse(window.localStorage.getItem('proteinItem') || '[\n' +
      '["恶性T细胞扩增序列蛋白","3R90","RNA结合蛋白","大肠杆菌BL21（DE3）","2011/4/13"],\n' +
      '["BETA-N-乙酰半乳糖苷酶","5FQE","产气荚膜梭菌","大肠杆菌","2016/3/30"],\n' +
      '["单体外膜孔蛋白OmpG","2IWV","离子通道","大肠杆菌BL21（DE3）","2006/8/14"],\n' +
      '["O-甲基转移酶家族蛋白","4OA5","TRANSFERASE","大肠杆菌","2014/3/5"],\n' +
      '["酰基辅酶A脱氢酶","3PFD","氧化还原酶","大肠杆菌","2010/11/10"],\n' +
      '["HTLV蛋白酶","3LIX","水解酶/水解酶抑制剂","大肠杆菌","2010/7/14"],\n' +
      '["酪氨酰DNA磷酸二酯酶2","4GYZ","水解酶","细菌2b-G12","2012/10/31"],\n' +
      '["组织天冬氨酸蛋白酶","3QVI","水解酶/水解酶抑制剂","大肠杆菌","2011/10/12"],\n' +
      '["钠泵视紫红质","4XTN","膜蛋白","大肠杆菌","2015/4/1"],\n' +
      '["脱水奎宁酶","1GQO","LYASE","大肠杆菌BL21","2002/12/12"],\n' +
      '["纤溶酶II","5YID","水解酶","肠杆菌噬菌体L1","2018/7/11"],\n' +
      '["Plasmepsin-1","3QS1","水解酶/水解酶抑制剂","大肠杆菌","2011/5/11"],\n' +
      '["结核分枝杆菌蛋白酶","3MI0","水解酶","大肠杆菌","2010/6/23"],\n' +
      '["3-磷酸甘油醛脱氢酶","2PKR","氧化还原酶","大肠杆菌BL21（DE3）","2007/6/19"],\n' +
      '["天冬氨酸蛋白酶（HAP）","3FNU","水解酶/水解酶抑制剂","大肠杆菌","2009/5/12"],\n' +
      '["小隐孢子虫（cgd1_2980）中14-3-3蛋白的晶体结构","3EFZ","信号蛋白","大肠杆菌","2008/9/23"],\n' +
      '["葡萄糖淀粉酶","3EU8","水解酶","大肠杆菌","2008/10/21"],\n' +
      '["HIV-1蛋白酶","3A2O","水解酶/水解酶抑制剂","大肠杆菌","2010/3/2"],\n' +
      '["贾第虫14-3-3蛋白","4ZQ0","信号蛋白","大肠杆菌","2016/3/30"],\n' +
      '["GH27β-L-阿拉伯吡喃糖苷酶","4NX0","水解酶","大肠杆菌","2014/12/3"]\n' +
      ']');
    console.log(this.proteinList);
    for (let i = 0; i < this.proteinList.length; i++) {
      this.data.push({
        key:i.toString(),
        name:this.proteinList[i][0],
        pdb:this.proteinList[i][1],
        type:this.proteinList[i][2],
        express:this.proteinList[i][3],
        datetime:this.proteinList[i][4],
      })
    }

  },
  beforeDestroy() {
    window.localStorage.setItem("proteinItem", JSON.stringify(this.proteinList));
  }
}
</script>

<style lang="less" scoped></style>
