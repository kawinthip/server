<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">Booking Room</h1>
      <div class="jumbotron center bg-light">
        <form v-on:submit.prevent="createOrder">
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
            <button class="btn btn-primary btn-lg" type="submit">Confirm Booking</button>
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