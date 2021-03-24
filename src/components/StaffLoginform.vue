<template>
  <v-col cols="6" class="mx-auto mt-8" xs="10">
    <v-card width="300" class="card" outlined elevation="10">
      <v-row>
        <v-col cols="2" class="mx-auto"
          ><v-img class="logo" src="../assets/unilorin_logo.jpg"></v-img
        ></v-col>
      </v-row>
      <v-card-title primary-title class="welcome"
        ><h3>Welcome Staff,</h3></v-card-title
      >
      <v-card-text class="form">
        <v-form>
          <v-text-field
            v-model="email"
            name="name"
            label="Enter UserId"
            id="userId"
            outlined
            height="20"
            dense
            prepend-inner-icon="mdi-account-circle"
          ></v-text-field>
        </v-form>
        <v-form>
          <v-text-field
            v-model="password"
            name="name"
            label="Enter Password"
            id="id"
            dense
            outlined
            :type="showPassword ? 'text' : 'password'"
            prepend-inner-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="bt" @click="login">
          <v-fade-transition leave-absolute>
            <v-progress-circular v-if="loading" indeterminate color="white" />
            <span v-else>Login</span>
          </v-fade-transition>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.password.length > 0) {
        this.loading = true;
        setTimeout(() => {
          try {
            this.$auth
              .signInWithEmailAndPassword(this.email, this.password)
              .then((result) => {
                // console.log(result.user);
                this.$store.commit(
                  "setCurrentUser",
                  result.user.providerData[0]
                );
                this.$router.push({ name: "Staff" });
              });
          } catch (err) {
            console.log(err);
          } finally {
            this.loading = false;
          }
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: auto;
  margin-top: 4%;
}

.logo {
  width: 80%;
}
.welcome {
  margin-top: 7%;
}
.form {
  margin-top: 13%;
  padding-bottom: 9%;
}
#userId {
  text-align: center !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: bolder;
}
.bt {
  width: 100%;
  height: 45px !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #1453a3 !important;
  text-transform: capitalize;
  color: white;
}
</style>
