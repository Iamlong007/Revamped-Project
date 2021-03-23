<template>
  <v-app>
    <v-navigation-drawer app width="15%" class="text2">
      <v-img
        src="../assets/dash_logo.jpg"
        max-width="55"
        max-height="55"
        contain
        class="mx-auto mt-5 logo"
      ></v-img>
      <v-btn
        min-height="40"
        :class="overview ? 'overviewBt' : 'inActiveOverviewBt'"
        @click="button3"
        ><span class="txtBt">
          <v-icon class="icon">mdi-equalizer</v-icon>
          <span class="btTxt">Overview</span>
        </span>
      </v-btn>
      <!-- <v-btn
        min-height="40"
        :class="admin ? 'activeAdminBt' : 'adminBt'"
        @click="button"
        ><span class="txtBt mr-4">
          <v-icon class="icon">mdi-account</v-icon>
          <span class="btTxt">Admin</span>
        </span>
      </v-btn> -->
      <v-btn
        min-height="40"
        :class="patient ? 'activePatientBt' : 'patientBt'"
        @click="button2"
        ><span class="txtBt mr-3">
          <v-icon class="icon">mdi-account-group</v-icon>
          <span class="btTxt">Patient</span>
        </span>
      </v-btn>
      <v-btn
        min-height="40"
        :class="staff ? 'activeStaffBt' : 'staffBt'"
        @click="button4"
        ><span class="txtBt mr-7">
          <v-icon class="icon">mdi-account-tie</v-icon>
          <span class="btTxt">Staff</span>
        </span>
      </v-btn>
    </v-navigation-drawer>
    <v-app-bar app flat class="topnav">
      <v-spacer></v-spacer>
      <v-img
        class="image"
        max-width="37"
        max-height="37"
        src="../assets/yoruba_M.jpeg"
      ></v-img>
      <v-toolbar-title class="adminName">Admin</v-toolbar-title>
      <v-btn class="left" icon @click="nav = !nav">
        <v-icon>{{ nav ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content app>
      <transition name="slide-in">
        <v-card class="navbar" max-width="150" min-height="70" v-if="nav">
          <v-btn
            class="logoutBt"
            color="primary"
            max-width="90"
            min-width="90"
            @click="logout"
            ><span v-if="text">Logout</span>
            <v-fade-transition leave-absolute>
              <v-progress-circular indeterminate color="white" v-if="loading">
              </v-progress-circular> </v-fade-transition
          ></v-btn>
        </v-card>
      </transition>
      <transition name="fade" mode="out-in">
        <Overview
          v-if="overview"
          :patientsCount="patients.length"
          :staffsCount="staffs.length"
        ></Overview>
        <!-- <Admin v-if="admin"></Admin> -->
        <Patient v-if="patient" :patients="patients"></Patient>
        <Staff v-if="staff" :staffs="staffs"></Staff>
      </transition>
      <!--  <typewriter
        class="type"
        :speed="200"
        :full-erase="fasle"
        :interval="300"
        :words="['Incredible', 'Superb', 'Amazing']"
      >
        <p class="text">I Love VueJs its</p>
      </typewriter>-->
      <!-- <p class="text">Hey Can You See This?</p>
      <vue-typer
        :text="['Hello', 'Hey Love', 'I Love You', 'You are Amazing']"
      ></vue-typer> -->
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
import router from "../router";
import VueTyper from "vue-typer";
import Overview from "@/components/Overview.vue";
// import Admin from "@/components/Admin.vue";
import Patient from "@/components/Patient.vue";
import Staff from "@/components/Staff.vue";
import { db } from "../firebaseConfig";
Vue.use(VueTyper);
export default {
  components: {
    Overview,
    // Admin,
    Patient,
    Staff,
  },
  data() {
    return {
      showPassword: false,
      nav: false,
      text: true,
      loading: false,
      overview: true,
      admin: false,
      patient: false,
      staff: false,
      patients: [],
      patistaffsents: [],
    };
  },
  firestore: {
    patients: db.collection("patients"),
    staffs: db.collection("staffs"),
  },
  methods: {
    logout() {
      this.text = false;
      this.loading = true;
      setTimeout(() => {
        this.$auth.signOut().then(() => {
          this.loading = false;
          router.push({ name: "Login" });
        });
      }, 500);
    },
    button() {
      this.overview = false;
      this.patient = false;
      this.admin = true;
      this.staff = false;
    },
    button2() {
      this.overview = false;
      this.admin = false;
      this.patient = true;
      this.staff = false;
    },
    button3() {
      this.admin = false;
      this.patient = false;
      this.overview = true;
      this.staff = false;
    },
    button4() {
      this.admin = false;
      this.patient = false;
      this.overview = false;
      this.staff = true;
    },
  },
};
</script>

<style scoped>
.typewriter {
  font-family: cursive;
  font-size: 20px;
  font-weight: bold;
  color: mediumblue;
}
.topnav {
  background: #ffffff !important;
  box-shadow: 0px 0.26px 4.51785px rgba(0, 0, 0, 0.25);
}
.adminName {
  font-size: 13px;
  font-family: "Roboto";
  font-weight: bold;
  padding: 0px 12px 0px 25px;
}
.left {
  margin-right: 30px !important;
}
.logoutBt {
  margin-top: 10%;
  text-transform: capitalize;
  font-size: 13px;
  font-family: "Roboto";
  font-weight: bold;
}
.overviewBt {
  width: 100%;
  margin-top: 40%;
  background-color: #0e4387 !important;
  border-left: 5px solid #ffffff;
  border-radius: 0%;
  color: #ffffff;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
  transition: 0.3s;
}
.inActiveOverviewBt {
  width: 100%;
  margin-top: 40%;
  background-color: inherit !important;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
  border-radius: 0%;
  color: #ffffffb8;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
  transition: 0.3s;
}
.adminBt {
  width: 100%;
  margin-top: 10%;
  background-color: inherit !important;
  border-radius: 0%;
  color: #ffffffb8;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
}
.activeAdminBt,
.activePatientBt,
.activeStaffBt {
  width: 100%;
  margin-top: 10%;
  background-color: #0e4387 !important;
  border-left: 5px solid #ffffff;
  border-radius: 0%;
  color: #ffffff;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
  transition: 0.3s;
}
.patientBt {
  width: 100%;
  margin-top: 10%;
  background-color: inherit !important;
  border-radius: 0%;
  color: #ffffffb8;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
}
.staffBt {
  width: 100%;
  margin-top: 10%;
  background-color: inherit !important;
  border-radius: 0%;
  color: #ffffffb8;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
  text-transform: capitalize;
  font-family: "Open";
  display: flex;
}
.txtBt {
  display: flex;
  margin-left: -2% !important;
}
.btTxt {
  padding-left: 10px;
  margin-top: 5px;
}
.icon {
  padding-right: 4px;
  margin-left: -9px !important;
  /* position: absolute; */
}
/* span.txtBtTxt {
  line-height: 24px;
} */
.logo {
  border-radius: 50%;
}
.text {
  font-family: "Poppins";
  font-weight: bolder;
  font-size: 20px;
  color: black;
}
.text2 {
  font-family: "Roboto";
  background-color: rgba(20, 83, 163, 0.81);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.navbar {
  width: 20%;
  margin-left: 82%;
  position: absolute;
  z-index: 1;
}
.navBt {
  background-color: #0e4387 !important;
  color: #ffffff;
  text-transform: capitalize;
}
.image {
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  border: 2px solid rgba(254, 156, 31, 0.86);
}
.navBtCont {
  margin-top: 40%;
  border-left: 9px solid #ffffff;
  background-color: #0e4387;
}
.fade-enter {
  opacity: 0;
}
.slide-in-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.8s ease;
}

.slide-in-leave-to {
  opacity: 1;
  transform: translateY(-290px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
