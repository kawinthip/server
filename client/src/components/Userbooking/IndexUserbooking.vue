<template >
  <div class="bg-dark">
    <nav class="navbar navbar-light bg-light">
      <button class="navbar-brand btn btn-outline" v-on:click="navigateTo('/IndexAdmin')">Booking Room</button>
      
        <button class="btn btn-outline-danger my-2 my-sm-0" v-on:click="logout" type="submit">
          Logout
        </button>

    </nav>
    <br />
    <div class="container">
      <h1 class="center white">All User Booking Room</h1>
      <h4 class="center white">
        Users Booking Room {{ userbooking.length }}
        <button class="btn btn-primary" v-on:click="navigateTo('/userbooking/create')">
          Create User For Booking Room
        </button>
      </h4>

      <div v-for="userbooking in userbookings" v-bind:key="userbooking.id">
        <div class="jumbotron center bg-light">
          <h1 class="display-4">{{ userbooking.title }}</h1>
          <br />
          <h4>Name : {{ userbooking.name }}</h4>
          <h4>Lastname : {{ userbooking.lastname }}</h4>
          <h4>Email : {{ userbooking.email }}</h4>
          <h4>Tell : {{ userbooking.tell }}</h4>
          <h4>Status : {{ userbooking.status }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/userbooking/edit/' + userbooking.id)"
            >
              Edit User Booking
            </button>
            <button class="btn btn-danger btn-lg" v-on:click="deleteUserbooking(userbooking)">
              Delete User Booking
            </button>
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import UserbookingService from "@/services/UserbookingService";

export default {
  data() {
    return {
      userbookings: [],
    };
  },
  async created() {
    this.userbookings = (await UserbookingService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUserbooking(userbooking) {
      let result = confirm("Delete User Booking?");
      if (result) {
        try {
          await UserbookingService.delete(userbooking);
          this.userbookings = (await UserbookingService.index()).data;
        } catch (err) {
          console.log(err);
        }
      }
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
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
</style>