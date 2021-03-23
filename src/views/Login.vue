<template>
  <v-app>
    <v-container fluid fill-height class="pa-0 ma-0 back">
      <!-- <v-col cols="12" class="back"> -->
      <LoginForm></LoginForm>
      <!-- </v-col> -->
    </v-container>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  // props: {
  //   login: {
  //     type: () => {}
  //   }
  // },
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.back {
  background: linear-gradient(0deg, rgba(10, 9, 9, 0.34), rgba(10, 9, 9, 0.34)),
    url("~@/assets/Bg6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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
