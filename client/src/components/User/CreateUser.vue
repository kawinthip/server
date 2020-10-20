<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">Create User</h1>
      <div class="jumbotron center bg-light">
        <form v-on:submit.prevent="createUser">
          <p class="left">
            Name :
            <input class="form-control " type="text" v-model="user.name" />
          </p>
          <p class="left">
            lastname:
            <input class="form-control " type="text" v-model="user.lastname" />
          </p>
          <p class="left">
            Username :
            <input class="form-control " type="text" v-model="user.username" />
          </p>
          <p class="left">
            Password :
            <input class="form-control " type="text" v-model="user.password" />
          </p>
          <p>
            <button class="btn btn-primary btn-lg" type="submit">Add</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
}
.white {
  color: aliceblue;
}
.pad{
  padding: 3% 20%;
}
.left{
  text-align: left;
}
</style>