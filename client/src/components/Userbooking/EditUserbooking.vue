<template>
  <div class="pad bg-dark" width="100%" heigth="100%">
    <div class="container center">
      <h1 class="center white">Edit User For Booking Room</h1>
      <div class="jumbotron center bg-light">
      <form v-on:submit.prevent="editUserbooking">
        <p class="left">
            Name :
            <input class="form-control " type="text" v-model="userbooking.name"/>
          </p>
          <p class="left">
            Lastname :
            <input class="form-control " type="text" v-model="userbooking.lastname" />
          </p>
          <p class="left">
            Email :
            <input class="form-control " type="text" v-model="userbooking.email" />
          </p>
          <p class="left">
            Tell :
            <input class="form-control " type="text" v-model="userbooking.tell" />
          </p>
          <p class="left">
            Status :
            <input class="form-control " type="text" v-model="userbooking.status" />
          </p>
        <p>
          <button class="btn btn-primary btn-lg" type="submit">Edit</button>
        </p>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
import UserbookingService from "@/services/UserbookingService";
export default {
  data() {
    return {
      userbooking: {
        name: "",
        lastname: "",
        email: "",
        tell: "",
        status: "",
      },
    };
  },
  methods: {
    async createUserbooking() {
      try {
        await UserBookingService.post(this.userbookingbook);
        this.$router.push({
          name: "userbookings",
        });
      } catch (err) {
        console.log(err);
      }
    },
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