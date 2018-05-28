<template>
  <div class="hello">
    <el-input v-model="userName" placeholder="用户名"></el-input>
    <el-input v-model="password" placeholder="密码"></el-input>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>


<script>
import { requestLogin } from '../api/api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    login () {
        console.log(requestLogin)
      let the = this
      if (the.userName !== '' && the.password !== '') {
        let params = {
          username: the.userName,
          password: the.password,
          'the':the
        }

        requestLogin(params).then(res => {
            console.log(res)
          if (parseInt(res.data.code) === 1) {} else {
            the.$message.error('账号或密码错误')
          }
        })
//        the.$http.get('http://192.168.0.100:3000/api/login', {
//          username: the.userName,
//          password: the.password
//        }).then(res => {
//
//          if (parseInt(res.data.code) === 1) {} else {
//            the.$message.error('账号或密码错误')
//          }
//        })


      } else {
        the.$message.error('请输入正确的账号密码')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{width: 50%;margin: 0px auto;}
.el-input{margin: 10px auto;}
</style>
