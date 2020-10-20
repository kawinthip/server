<template>
  <div>
    <h1>Show Room</h1>
      <h3>id : {{ room.id }}</h3>
          <h4>Room Number : {{ room.roomNumber }}</h4>
          <h4>people : {{ room.people }}</h4>
          <h4>Date : {{ room.date }}</h4>
          <h4>Time : {{ room.time }}</h4>
          <h4>Detail : {{ room.detail }}</h4>
          <h4>Status : {{ room.status }}</h4>
  </div>
</template>
<script>
import RoomService from "@/services/RoomService";
export default {
  data() {
    return {
      room: null,
    };
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
</style>