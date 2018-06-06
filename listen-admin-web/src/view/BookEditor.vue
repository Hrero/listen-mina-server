<template>
  <div>
  <img style="width: 50%;" src="../assets/logo.jpg">

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="书编号">
        <el-input v-model="formLabelAlign.id"></el-input>
      </el-form-item>
      <el-form-item label="书名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="formLabelAlign.content"></el-input>
      </el-form-item>
      <el-form-item label="订阅">
        <el-input v-model="formLabelAlign.subscription"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="formLabelAlign.price"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="affirm">确认</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          id: '',
          name: '',
          content: '',
          subscription:'',
          price:''
        }
      };
    },
    method:{
      affirm () {
        let the = this;
        the.$http.post({})

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
