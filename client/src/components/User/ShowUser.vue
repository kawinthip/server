<template>
  <div>
    <h1>Show Users</h1>
    <p>id: {{ user.id }}</p>
    <p>Name - Lastname: {{ user.name }} - {{ user.lastname }}</p>
    <p>Usernamen : {{ user.username }}</p>
    <p>Password : {{ user.password }}</p>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>