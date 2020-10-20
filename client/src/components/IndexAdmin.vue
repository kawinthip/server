<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <div class="jumbotron center">
        <h1>Admin </h1>
        <br />
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/users')">
            Users
          </button>
        </p>
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/userbookings')">
            User Booking Rooms
          </button>
        </p>
        <p>
          <button class="btn btn-primary" v-on:click="navigateTo('/rooms')">
            Rooms
          </button>
        </p>
        <p>
          <button
            class="btn btn-outline-danger my-2 my-sm-0"
            v-on:click="navigateTo('/login')"
            type="submit"
          >
            Log out
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  logout() {
    this.$store.dispatch("setToken", null);
    this.$store.dispatch("setUser", null);
    this.$router.push({
      name: "login",
    });
  },
};
</script>

<style>
.center {
  text-align: center;
}
.white {
  color: aliceblue;
}
.pad {
  padding: 5% 20%;
}
</style>