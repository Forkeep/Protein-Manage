<template>
  <div>
    <a-select
      defaultValue="choose"
      style="width: 240px"
      @change="changeProtein"
    >
      <a-select-option value="choose" disabled>请选择蛋白质</a-select-option>
      <a-select-option
        v-for="item in proteinList"
        :value="item[0]"
        :key="item.key"
        >{{ item[0] }}</a-select-option
      >
    </a-select>
    <a-select
      defaultValue="choose"
      style="width: 160px;margin-left: 50px"
      @change="changeChain"
    >
      <a-select-option value="choose" disabled>请选择蛋白链</a-select-option>
      <a-select-option v-for="item in letterList" :value="item" :key="item.key"
        >{{ item }}
      </a-select-option>
    </a-select>
    <a-button
      type="primary"
      style="margin-left: 50px"
      @click="showDataNow"
      :loading="isLoading"
      >开始计算</a-button
    >

    <a-table
      :columns="columns"
      :dataSource="showData"
      bordered
      size="small"
      style="margin-top: 50px"
    >
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <template slot="title">
        残基计算结果
      </template>
    </a-table>
  </div>
</template>

<script lang="js">
  const columns = [
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
        columns,
        proteinList: [],
        currentProtein: [],
        showData: [],
        data: [],
        allLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        letterList: [],
        currentLetter: '',
        chooseProteinId: '',
        currentRed: [],
        isLoading: false,
      }
    },
    mounted() {
      this.proteinList = JSON.parse(window.localStorage.getItem('proteinItem'));
    },
    methods: {
      changeProtein(e) {
        this.showData = [];
        this.letterList = [];
        this.data = [];
        for (let i = 0; i < this.proteinList.length; i++) {
          if (this.proteinList[i][0] === e) {
            this.currentProtein = this.proteinList[i];
          }
        }
        this.chooseProteinId = this.currentProtein[1].toLowerCase();
        console.log(this.chooseProteinId);
        let maxLetter = this.currentProtein[5];
        let maxIndex = this.allLetter.indexOf(maxLetter);
        for (let i = 0; i <= maxIndex; i++) {
          this.letterList.push(this.allLetter[i])
        }
        this.currentRed = JSON.parse(window.localStorage.getItem(`red_${this.chooseProteinId}`));
      },
      changeChain(e) {
        this.showData = [];
        this.data = [];
        for (let i = 0; i < this.currentRed.length; i++) {
          if (this.currentRed[i][1] === e) {
            this.data.push({
              key: i.toString(),
              residues: this.currentRed[i][0],
              col_name: this.currentRed[i][1],
              res_props: this.currentRed[i][2],
            });
          }
        }
        console.log(this.data)
      },
      showDataNow() {
        this.isLoading = true;
        setTimeout(() => {
          this.showData = this.data;
          this.isLoading = false;
        }, 1000);
      }
    }
}
</script>

<style lang="scss" scoped></style>
