<template>
  <v-card max-width="93%" :class="form ? 'activeCard' : 'card'">
    <v-row class="fixed"
      ><v-col cols="3"
        ><v-text-field
          placeholder="Search..."
          outlined
          dense
          filled
          append-icon="mdi-magnify"
          class="ml-6 mt-3"
        ></v-text-field></v-col
      ><v-spacer></v-spacer>
      <transition name="fade" mode="out-in">
        <v-card width="35%" class="form" v-if="form">
          <v-row>
            <v-col cols="5" class="ml-7 mt-3"
              ><span class="formTitle">Create Admin</span></v-col
            ></v-row
          >
          <v-form class="mt-10" ref="adminForm" v-model="formValidity">
            <v-text-field
              placeholder="Name"
              name="name"
              id="name"
              v-model="name"
              :rules="[() => !!name || 'Name is required']"
              required
              outlined
              height="20"
              dense
              prepend-inner-icon="mdi-account"
              class="mx-auto"
            ></v-text-field>
            <v-text-field
              placeholder="Address"
              name="address"
              id="address"
              outlined
              v-model="address"
              height="20"
              :rules="[() => !!address || 'Address is required']"
              min="18"
              max="55"
              dense
              prepend-inner-icon="mdi-home"
              class="mx-auto"
            ></v-text-field>
            <v-row class="ageInput"
              ><v-col cols="4" class="ml-7">
                <v-text-field
                  placeholder="Age"
                  name="age"
                  id="age"
                  v-model="age"
                  outlined
                  :rules="[
                    () => !!age || 'Age is required',
                    () =>
                      (age && age <= 50 && age.length == 2) ||
                      'Max 50 years old'
                  ]"
                  height="20"
                  prepend-inner-icon="mdi-information-outline"
                  dense
                ></v-text-field
              ></v-col>
              <v-col cols="6" class="phone">
                <v-text-field
                  placeholder="Phone Number"
                  name="number"
                  id="number"
                  v-model="number"
                  prepend-inner-icon="mdi-cellphone-android"
                  outlined
                  :rules="[
                    () => !!number || 'Phone number is required',
                    () => (number && number.length == 11) || 'Max 11 characters'
                  ]"
                  height="20"
                  dense
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="fileInput"
              ><v-col cols="4" class="ml-7">
                <v-file-input
                  placeholder="Photo"
                  outlined
                  prepend-icon=""
                  height="20"
                  dense
                  prepend-inner-icon="mdi-face"
                ></v-file-input
              ></v-col>
              <v-col cols="6" class="phone">
                <v-text-field
                  placeholder="User ID"
                  name="User ID"
                  id="userId"
                  v-model="userId"
                  prepend-inner-icon="mdi-account-plus"
                  append-icon="mdi-rotate-right"
                  outlined
                  :rules="[() => !!userId || 'User ID is required']"
                  height="20"
                  dense
                  @click:append="rndStr(4)"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-text-field
              placeholder="Enter Password"
              name="password"
              id="password"
              v-model="password"
              :rules="[() => !!password || 'Password is required']"
              required
              outlined
              :type="showPassword ? 'text' : 'password'"
              height="20"
              dense
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              class="mx-auto password"
            ></v-text-field>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn class="cancel" text @click="cancel">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-snackbar v-model="snackbar" color="success" timeout="500">
                <span class="snackText"> Successfully Registered</span>
              </v-snackbar>

              <v-btn :disabled="!formValidity" class="submit" @click="submit">
                <span v-if="text">Submit</span>
                <v-fade-transition leave-absolute>
                  <v-progress-circular
                    indeterminate
                    color="white"
                    v-if="loading"
                  >
                  </v-progress-circular>
                </v-fade-transition> </v-btn
            ></v-card-actions>
          </v-form>
        </v-card> </transition
      ><v-col cols="3"
        ><v-btn
          :class="form ? 'activeAdminBt' : 'adminBt'"
          @click="form = !form"
        >
          <span class="pl-2"> Create Admin </span>
          <v-icon class="ml-3 pr-2">mdi-plus-circle</v-icon></v-btn
        ></v-col
      ></v-row
    >

    <v-row
      ><v-col cols="3" class="head"
        ><span class="header">Create New Admin</span></v-col
      ></v-row
    >
    <v-row
      ><v-col cols="3" class="subHead"
        ><span class="subHeader">Select from list of Admins</span></v-col
      ></v-row
    >
    <v-row class="listTitle"
      ><v-col cols="3" class="listSubTitle"
        ><span class="listHead">Full Name</span></v-col
      >
      <v-spacer></v-spacer
      ><v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">Gender</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">User ID</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="3" class="mr-3 listSubTitle"
        ><span class="listHead2">Date Registered</span></v-col
      >
    </v-row>
    <AdminList
      v-for="list in lists"
      :key="list.id"
      :list="list"
      :src="list.img"
    ></AdminList>
  </v-card>
</template>

<script>
import AdminList from "@/components/AdminList.vue";
export default {
  components: {
    AdminList
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "AbdulRaqeeb Andu",
          gender: "Male",
          userId: "J45283",
          date: "24 May 2020",
          img: require("../assets/male3.jpg")
        },
        {
          id: 2,
          name: "Abdul Gafar",
          gender: "Male",
          userId: "J30160",
          date: "26 May 2020",
          img: require("../assets/Admin.jpg")
        },
        {
          id: 3,
          name: "Oguntoyinbo Boluwatife",
          gender: "Male",
          userId: "J45753",
          date: "5 June 2020",
          img: require("../assets/male4.jpg")
        },
        {
          id: 4,
          name: "Okerekere Peace",
          gender: "Female",
          userId: "J92421",
          date: "11 June 2020",
          img: require("../assets/female2.jpg")
        },
        {
          id: 5,
          name: "Jim-Saiki Ghalib",
          gender: "Male",
          userId: "J28231",
          date: "19 June 2020",
          img: require("../assets/male6.jpg")
        },
        {
          id: 6,
          name: "Adegbite Omolola",
          gender: "Female",
          userId: "J37623",
          date: "24 June 2020",
          img: require("../assets/female4.jpg")
        }
      ],
      form: false,

      name: "",
      address: "",
      number: "",
      age: "",
      userId: "",
      password: "",
      showPassword: false,
      formValidity: false,
      snackbar: false,
      loading: false,
      text: true
    };
  },
  methods: {
    rndStr(len) {
      let num = "";
      let chars = "0123456789";

      for (let i = 0; i < len; i++) {
        num += chars.charAt(Math.floor(Math.random() * chars.length));
        this.userId = "J" + num;
      }
      return num;
    },
    cancel() {
      this.form = false;
      this.$refs.adminForm.reset();
    },
    submit() {
      this.text = false;
      this.loading = true;

      setTimeout(() => {
        this.snackbar = true;
      }, 1500);
      setTimeout(() => {
        this.form = false;
        this.$refs.adminForm.reset();
        this.loading = false;
        this.text = true;
      }, 2100);
    }
  }
};
</script>

<style scoped>
.v-text-field {
  width: 320px !important;
}
.card {
  margin-top: 2%;
  margin-left: 3.34%;
}
.activeCard {
  margin-top: 2%;
  margin-left: 3.34%;
  background-color: #ebebeb;
}
.adminBt {
  background-color: rgba(20, 83, 163, 0.81) !important;
  text-transform: capitalize;
  color: #ffffff;
  font-size: 12px;
  width: 184px;
  margin-left: 8%;
  margin-top: 3%;
  font-family: "Noto Sans";
}
.activeAdminBt {
  background-color: #ffffff !important;
  text-transform: capitalize;
  color: rgba(20, 83, 163, 0.81);
  font-size: 12px;
  border: 2px solid rgba(20, 83, 163, 0.81);
  width: 184px;
  margin-left: 8%;
  margin-top: 3%;
  font-family: "Noto Sans";
  font-weight: 550;
}
.head {
  margin-left: -1.5% !important;
}
.header {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
}
.subHead {
  margin-left: -2% !important;
  margin-top: -1.37%;
}
.subHeader {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.65);
}
.listTitle {
  background: #efefef !important;
  width: 100%;
  height: 40px;
  margin-left: 0%;
  margin-top: 1.4%;
}
.listSubTitle {
  margin-top: -0.3%;
}
.v-text-field {
  font-size: 14px !important;
}
.listHead {
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: -59%;
  color: rgba(0, 0, 0, 0.7);
}
.listHead2 {
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}
.form {
  margin-left: 32.5%;
  margin-top: 3%;
  position: absolute;
  filter: blur(0px) !important;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
.formTitle {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  text-align: left;
  color: rgba(0, 0, 0, 0.75);
}
.ageInput {
  margin-top: -3% !important;
}
.phone {
  margin-left: 2.7%;
}
.fileInput {
  margin-top: -5.7%;
}
.password {
  margin-top: -2%;
}
.cancel {
  text-transform: capitalize;
  font-family: "Roboto";
  font-size: 12px;
}
.submit {
  text-transform: capitalize;
  font-family: "Roboto";
  font-size: 12px;
  background: rgba(20, 83, 163, 0.81) !important;
  color: #ffffff;
  width: 100px !important;
}
.snackText {
  width: 100%;
  text-align: center;
  font-family: "Roboto";
}
</style>
