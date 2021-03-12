<template>
  <v-app>
    <v-row>
      <v-col cols="12" class="back">
        <StaffLoginform></StaffLoginform>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import StaffLoginform from "@/components/StaffLoginform.vue";
export default {
  // props: {
  //   login: {
  //     type: () => {}
  //   }
  // },
  components: {
    StaffLoginform,
  },
};
</script>

<style scoped>
.back {
  background: linear-gradient(0deg, rgba(10, 9, 9, 0.34), rgba(10, 9, 9, 0.34)),
    url("~@/assets/Bg5.jpg");
  background-size: 100% 625px;
  background-repeat: no-repeat;
  height: 625px;
}
.show {
  display: none;
  animation-name: display;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}
@keyframes display {
  from {
    display: none;
  }
  to {
    display: block;
  }
}
.login-enter {
  opacity: 1;
}

.login-enter-active,
.login-leave-active {
  transition: opacity 2.5s ease-out;
}

.login-leave-to {
  opacity: 0;
}
</style>
