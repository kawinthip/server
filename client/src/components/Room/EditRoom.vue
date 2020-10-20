<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">Edit Info For Booking</h1>
      <div class="jumbotron center bg-light">
      <form v-on:submit.prevent="editRoom">
        <p class="left">
            Room Number :
            <input class="form-control " type="text" v-model="room.roomNumber"/>
          </p>
          <p class="left">
            People :
            <input class="form-control " type="text" v-model="room.people" />
          </p>
          <p class="left">
            Date (ex. 00/00/00) :
            <input class="form-control " type="text" v-model="room.date" />
          </p>
          <p class="left">
            Time (ex. 00.00):
            <input class="form-control " type="text" v-model="room.time" />
          </p>
          <p class="left">
            Detail :
            <input class="form-control " type="text" v-model="room.detail" />
          </p>
          <p class="left">
            Status (ex. student):
            <input class="form-control " type="text" v-model="room.status" />
          </p>
        <p>
          <button class="btn btn-primary btn-lg" type="submit">Edit Booking</button>
        </p>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
import RoomService from "@/services/RoomService";
export default {
  data() {
    return {
      room: {
        roomNumber: "",
        people: "",
        date: "",
        time: "",
        detail: "",
        status: "",
      },
    };
  },
  methods: {
    async editRoom() {
      try {
        await RoomService.put(this.room);
        this.$router.push({
          roomNumber: "rooms",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let roomId = this.$route.params.roomId;
      this.room = (await RoomService.show(roomId)).data;
    } catch (error) {
      console.log(error);
    }
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