<template>
  <div class="hello">
    <img style="width: 50%;" src="../assets/logo.jpg">
    <div v-if="isLogin">
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="register">注册</el-button>
      <el-button type="primary" @click="confirmLogin">确认</el-button>
    </div>
    <div v-else>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <el-input v-model="redopassword" placeholder="确认密码"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="register">注册</el-button>
      <el-button type="primary" @click="confirmRegister">确认</el-button>
    </div>

  </div>
</template>

<script>
//import { requestLogin } from '../api/api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:'',
      password:'',
      redopassword:'',
      isLogin:true
    }
  },
  methods:{
    confirmLogin () {
      let the = this;
      if (the.userName !== '' && the.password !== '') {
        the.$http.post('/login', {
          username: the.userName,
          password: the.password
        }).then(res => {
          the.$message.success(res.data.message)

          if (parseInt(res.data.code) === 0) {
            the.$router.push({ path: '/booklist' })
          }

        })

      } else {
        the.$message.error('请输入正确的账号密码')
      }
    },
    confirmRegister () {
      let the = this;
      if (the.userName !== '' && the.password !== '') {
        the.$http.post('/register', {
          username: the.userName,
          password: the.password,
          redopassword: the.redopassword,
        }).then(res => {
          the.$message.success(res.data.message)
//          if (parseInt(res.data.code) === 3) {
//            the.$message.error(res.data.message)
//          }

        })

      } else {
        the.$message.error('注册失败')
      }
    },
    login () {
      console.log(1)
      let the = this;
      the.isLogin = true;
    },
    register () {
      let the = this;
      the.isLogin = false;
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
