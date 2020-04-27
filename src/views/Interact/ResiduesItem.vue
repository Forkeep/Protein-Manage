<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
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
    title: "蛋白质链",
    dataIndex: "chain",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "残基",
    dataIndex: "residues"
  },
  {
    title: "ASA",
    dataIndex: "asa",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "N原子坐标",
    dataIndex: "np",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "Ca原子坐标",
    dataIndex: "cap",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "C原子坐标",
    dataIndex: "cp",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "O原子坐标",
    dataIndex: "op",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "CB原子坐标",
    dataIndex: "cbp",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      data: [],
      columns,
      residuesList: []
    };
  },
  mounted() {
    this.residuesList = JSON.parse(
      window.localStorage.getItem("residuesItem") ||
        "[\n" +
          '["A","PRO","75","58.44","55.39","49.14","44.92","56.7"],\n' +
          '["A","VAL","86","43.5","39.97","44.24","51.82","40.13"],\n' +
          '["A","ILE","27","41.78","32.26","34.41","33.96","31.05"],\n' +
          '["A","LEU","8","34.9","28.72","30.52","32.85","22.1"],\n' +
          '["A","ASP","33","24.2","22.54","25.69","32.22","33.06"],\n' +
          '["A","ALA","84","29.68","32.58","33.65","37.63","22.97"],\n' +
          '["A","ARG","186","34.39","29.95","28.72","29.67","35.48"],\n' +
          '["A","LYS","110","32.85","30.13","30.26","40.65","35.59"],\n' +
          '["A","GLN","64","31.43","32.43","34.32","40.73","33.41"],\n' +
          '["A","THR","2","33.22","35.36","40.09","43.56","37.06"],\n' +
          '["B","PRO","70","60.87","59.77","54.76","50.87","62.21"],\n' +
          '["B","VAL","93","51.25","46.46","51.81","57.94","47.17"],\n' +
          '["B","ILE","27","47.45","39.76","42.91","43.72","35.84"],\n' +
          '["B","LEU","9","44.58","39.01","41.69","45.46","31.04"],\n' +
          '["B","ASP","36","36.5","37.12","36.78","39.6","47.43"],\n' +
          '["B","ALA","92","45.77","48.68","48.45","55.22","42.04"],\n' +
          '["B","ARG","177","45.07","42.51","41.4","46.94","50.38"],\n' +
          '["B","LYS","124","37.88","34.3","35.02","44.46","40.43"],\n' +
          '["B","GLN","73","33.91","35.25","36.88","41.95","37.77"],\n' +
          '["B","THR","2","32.23","34.65","36.14","38.57","35.39"]\n' +
          "]"
    );
    for (let i = 0; i < this.residuesList.length; i++) {
      this.data.push({
        key: i,
        chain: this.residuesList[i][0],
        residues: this.residuesList[i][1],
        asa: this.residuesList[i][2],
        np: this.residuesList[i][3],
        cap: this.residuesList[i][4],
        cp: this.residuesList[i][5],
        op: this.residuesList[i][6],
        cbp: this.residuesList[i][7]
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
