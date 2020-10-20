<template>
<div class="pad bg-dark" width="100%" heigth="100%">
 <div class="container center">
   <div class="jumbotron center">
     <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Gray_book.png" width="10%" height="10%"/>
    <h1>Login</h1>
    <br>
    <form v-on:submit.prevent="onLogin" class="form-group">
      <p>
        <input class="form-control " type="text" v-model="username" placeholder="Username"/>
      </p>
      <p>
        <input class="form-control" type="password" v-model="password" placeholder="Password"/>
      </p>
      <p>
        <button class="btn btn-primary" type="submit">Login</button>
      </p>
    </form>
    <div class="error" v-if="error">{{ error }}</div>
   </div>
  </div>
</div>
</template>
<script>
import AuthenService from "@/services/AuthenService";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
        username: this.username,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "IndexAdmin",
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.username = "";
        this.password = "";
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
.center {
  text-align: center;
}
.white {
  color: aliceblue;
}
.pad{
  padding: 9% 20%;
}
</style>