<template>
  <div class="bg-dark">
    <nav class="navbar navbar-light bg-light">
      <button
        class="navbar-brand btn btn-outline"
        v-on:click="navigateTo('/IndexAdmin')"
      >
        Booking Room
      </button>

      <button
        class="btn btn-outline-danger my-2 my-sm-0"
        v-on:click="logout"
        type="submit"
      >
        Logout
      </button>
    </nav>
    <br />
    <div class="container">
      <h2 class="center white">Rooms</h2>
      <h4 class="center white">
        All Booking Rooms {{ rooms.length }} 
      </h4>
      <div v-for="room in rooms" v-bind:key="room.id">
        <div class="jumbotron center bg-light">
          <h3>id : {{ room.id }}</h3>
          <h4>Room Number : {{ room.roomNumber }}</h4>
          <h4>people : {{ room.people }}</h4>
          <h4>Date : {{ room.date }}</h4>
          <h4>Time : {{ room.time }}</h4>
          <h4>Detail : {{ room.detail }}</h4>
          <h4>Status : {{ room.status }}</h4>
          <p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="navigateTo('/room/edit/' + room.id)"
            >
              Edit Booking Room
            </button>
            <button
              class="btn btn-danger btn-lg"
              v-on:click="deleteRoom(room)"
            >
              Delete Booking Room
            </button>
          </p>
        </div>
        <hr />
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import RoomService from "@/services/RoomService";

export default {
  data() {
    return {
      rooms: [],
    };
  },
  async created() {
    this.rooms = (await RoomService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteRoom(room) {
      let result = confirm("You Want To Delete?");
      if (result) {
        try {
          await RoomService.delete(room);
          this.rooms = (await RoomService.index()).data;
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