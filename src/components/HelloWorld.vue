<template>
  <div>
    <h4>Login Form</h4>
    <form>
      <div class="mb-3">
        <label for="txtuserName" class="form-label">User Name</label>
        <input
            type="text"
            class="form-control"
            id="txtuserName"
            aria-describedby="emailHelp"
            v-model="username"/>
      </div>
      <div class="mb-3">
        <label for="txtPassword" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            id="txtPassword"
            v-model="password"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="login()">Submit</button>
    </form>
  </div>
  <div>
    test
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      console.log(this.username, this.password);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
