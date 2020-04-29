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
      <a-select-option
        v-for="item in letterList"
        :value="item"
        :key="item.key"
        >{{ item }}</a-select-option
      >
    </a-select>
    <a-button type="primary" style="margin-left: 50px">开始计算</a-button>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      proteinList: [],
      currentProtein: [],
      data: [],
      allLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      letterList: [],
      currentLetter: '',
      chooseProteinId:'',
    }
  },
  mounted() {
    this.proteinList = JSON.parse(window.localStorage.getItem('proteinItem'));
  },
  methods: {
    changeProtein(e) {
      this.letterList = [];
      this.data = [];
      for (let i = 0; i < this.proteinList.length; i++) {
        if (this.proteinList[i][0] === e) {
          this.currentProtein = this.proteinList[i];
        }
      }
      let maxLetter = this.currentProtein[5];
      let maxIndex = this.allLetter.indexOf(maxLetter);
      for (let i = 0; i <= maxIndex; i++) {
        this.letterList.push(this.allLetter[i])
      }
    },
    changeChain(e){
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped></style>
