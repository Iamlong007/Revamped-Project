<template>
  <v-card max-width="93%" class="mt-5 ml-10">
    <v-row
      ><v-col cols="3"
        ><v-text-field
          placeholder="Search..."
          outlined
          dense
          append-icon="mdi-magnify"
          class="ml-6 mt-3"
        ></v-text-field></v-col
      ><v-spacer></v-spacer>
      <transition name="fade" mode="out-in">
        <v-card width="35%" class="form" v-if="form">
          <v-row>
            <v-col cols="5" class="ml-7 mt-3"
              ><span class="formTitle">Create Patient</span></v-col
            ></v-row
          >
          <v-form class="mt-10" ref="adminForm" v-model="formValidity">
            <v-text-field
              placeholder="Name"
              name="name"
              id="name"
              v-model="patient.name"
              :rules="[() => !!patient.name || 'Name is required']"
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
              v-model="patient.address"
              height="20"
              :rules="[() => !!patient.address || 'Address is required']"
              min="18"
              max="55"
              dense
              prepend-inner-icon="mdi-home"
              class="mx-auto"
            ></v-text-field>
            <v-text-field
              placeholder="Enter Department"
              name="department"
              id="department"
              v-model="patient.department"
              required
              outlined
              type="text"
              height="20"
              dense
              prepend-inner-icon="mdi-book"
              class="mx-auto password"
            ></v-text-field>
            <v-row class="ageInput"
              ><v-col cols="4" class="ml-7">
                <v-text-field
                  placeholder="Age"
                  name="age"
                  id="age"
                  v-model="patient.age"
                  outlined
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
                  v-model="patient.phone"
                  prepend-inner-icon="mdi-cellphone-android"
                  outlined
                  :rules="[
                    () => !!patient.phone || 'Phone number is required',
                    () =>
                      (patient.phone && patient.phone.length == 11) ||
                      'Max 11 characters',
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
                  accept="image/*"
                  id="patientImage"
                  @change="handleImage"
                  prepend-inner-icon="mdi-face"
                ></v-file-input
              ></v-col>
              <v-col cols="6" class="phone">
                <v-text-field
                  placeholder="User ID"
                  name="User ID"
                  id="userId"
                  v-model="patient.rfid"
                  prepend-inner-icon="mdi-account-plus"
                  append-icon="mdi-rotate-right"
                  outlined
                  :rules="[() => !!patient.rfid || 'User ID is required']"
                  height="20"
                  dense
                  @click:append="rndStr(3)"
                ></v-text-field
              ></v-col>
            </v-row>

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
        </v-card>
      </transition>
      <v-col cols="3"
        ><v-btn
          :class="form ? 'activeAdminBt' : 'adminBt'"
          @click="form = !form"
        >
          <span class="pl-2"> Create Patient </span>
          <v-icon class="ml-3 pr-2">mdi-plus-circle</v-icon></v-btn
        ></v-col
      ></v-row
    >
    <v-row
      ><v-col cols="3" class="head"
        ><span class="header">Create New Patient</span></v-col
      ></v-row
    >
    <v-row
      ><v-col cols="3" class="subHead"
        ><span class="subHeader">Select from list of Patients</span></v-col
      ></v-row
    >
    <v-row class="listTitle"
      ><v-col cols="3" class="listSubTitle"
        ><span class="listHead">Full Name</span></v-col
      >
      <v-spacer></v-spacer
      ><v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">Department</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">RFID UID</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="3" class="mr-3 listSubTitle"
        ><span class="listHead2">Date Registered</span></v-col
      >
    </v-row>
    <PatientItem
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></PatientItem>
  </v-card>
</template>

<script>
import PatientItem from "@/components/PatientItem.vue";
export default {
  components: {
    PatientItem,
  },
  props: {
    patients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: false,
      patient: {
        name: "",
        address: "",
        phone: "",
        age: "",
        rfid: "",
        department: "",
      },
      uploadedImage: null,
      showPassword: false,
      formValidity: false,
      snackbar: false,
      loading: false,
      text: true,
    };
  },
  methods: {
    rndStr(len) {
      let num = "";
      let chars = "0123456789";

      for (let i = 0; i < len; i++) {
        num += chars.charAt(Math.floor(Math.random() * chars.length));
        this.patient.rfid = num + "J" + num + "E";
      }
      return num;
    },
    cancel() {
      this.form = false;
      this.$refs.adminForm.reset();
    },

    handleImage() {
      const { 0: tempUploadedImage } = document.querySelector(
        "#patientImage"
      ).files;
      if (tempUploadedImage) {
        this.uploadedImage = {
          image: tempUploadedImage,
          name: tempUploadedImage.name,
        };
      }
    },
    submit() {
      this.text = false;
      this.loading = true;
      this.$storage
        .ref(`patients/${this.uploadedImage.name}`)
        .put(this.uploadedImage.image)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((picture) => {
            this.$db
              .collection("patients")
              .add({
                ...this.patient,
                picture,
                createdAt: new Date().toDateString(),
              })
              .then(() => {
                this.form = false;
                this.$refs.adminForm.reset();
                this.loading = false;
                this.text = true;
                this.snackbar = true;
              });
          });
        });
    },
  },
};
</script>

<style>
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
