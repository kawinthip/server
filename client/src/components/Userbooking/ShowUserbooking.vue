<template>
  <div>
    <h1>Show User Booking</h1>
      <p>id: {{ userbooking.id }}</p>
      <p>Name : {{ userbooking.name }}</p>
      <p>Lastname : {{ userbooking.lastname }}</p>
      <p>Email : {{ userbooking.email }}</p>
      <p>Tell : {{ userbooking.tell }}</p>
      <p>Status : {{ userbooking.status }}</p>
  </div>
</template>
<script>
import UserbookingService from "@/services/UserbookingService";
export default {
  data() {
    return {
      userbooking: null,
    };
  },
  async created() {
    try {
      let userbookingId = this.$route.params.userbookingId;
      this.userbooking = (await UserbookingService.show(userbookingId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>