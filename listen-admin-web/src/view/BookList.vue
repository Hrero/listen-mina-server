<template>
  <div>
  <img style="width: 50%;" src="../assets/logo.jpg">

  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="书编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="书名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="封皮"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="内容"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="订阅"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        let the = this;
        console.log(row);
        the.$router.push({ path: '/bookeditor' })

      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
