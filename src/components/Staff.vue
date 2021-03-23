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
              ><span class="formTitle">Create Staff</span></v-col
            ></v-row
          >
          <v-form class="mt-10" ref="adminForm" v-model="formValidity">
            <v-text-field
              placeholder="Name"
              name="name"
              id="name"
              v-model="staff.name"
              :rules="[() => !!staff.name || 'Name is required']"
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
              v-model="staff.address"
              height="20"
              :rules="[() => !!staff.address || 'Address is required']"
              min="18"
              max="55"
              dense
              prepend-inner-icon="mdi-home"
              class="mx-auto"
            ></v-text-field>
            <v-text-field
              placeholder="Enter Email"
              name="email"
              id="email"
              v-model="staff.email"
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
                  v-model="staff.age"
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
                  v-model="staff.phone"
                  prepend-inner-icon="mdi-cellphone-android"
                  outlined
                  :rules="[
                    () => !!staff.phone || 'Phone number is required',
                    () =>
                      (staff.phone && staff.phone.length == 11) ||
                      'Max 11 characters',
                  ]"
                  height="20"
                  dense
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="fileInput"
              ><v-col cols="12" class="ml-7">
                <v-file-input
                  placeholder="Photo"
                  outlined
                  prepend-icon=""
                  height="20"
                  dense
                  accept="image/*"
                  id="staffImage"
                  @change="handleImage"
                  prepend-inner-icon="mdi-face"
                ></v-file-input
              ></v-col>
              <!-- <v-col cols="6" class="phone">
                <v-text-field
                  placeholder="User ID"
                  name="User ID"
                  id="userId"
                  v-model="staff.rfid"
                  prepend-inner-icon="mdi-account-plus"
                  append-icon="mdi-rotate-right"
                  outlined
                  :rules="[() => !!staff.rfid || 'User ID is required']"
                  height="20"
                  dense
                  @click:append="rndStr(3)"
                ></v-text-field
              ></v-col> -->
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
          class="ml-8 mt-3 "
          :class="form ? 'activeAdminBt' : 'adminBt'"
          @click="form = !form"
        >
          <span class="pl-2"> Create Staff </span>
          <v-icon class="ml-3 pr-2">mdi-plus-circle</v-icon></v-btn
        ></v-col
      ></v-row
    >
    <v-row
      ><v-col cols="3" class="head"
        ><span class="header">Create New Staff</span></v-col
      ></v-row
    >
    <v-row
      ><v-col cols="3" class="subHead"
        ><span class="subHeader">Select from list of Staff</span></v-col
      ></v-row
    >
    <v-row class="listTitle"
      ><v-col cols="3" class="listSubTitle"
        ><span class="listHead">Full Name</span></v-col
      >
      <v-spacer></v-spacer
      ><v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">Email</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="2" class="ml-10 listSubTitle"
        ><span class="listHead2">Phone</span></v-col
      >
      <v-spacer></v-spacer>
      <v-col cols="3" class="mr-3 listSubTitle"
        ><span class="listHead2">Date Registered</span></v-col
      >
    </v-row>
    <StaffList v-for="list in staffs" :key="list.id" :list="list"></StaffList>
  </v-card>
</template>

<script>
import StaffList from "@/components/StaffList.vue";
export default {
  components: {
    StaffList,
  },
  props: {
    staffs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: false,
      staff: {
        name: "",
        address: "",
        phone: "",
        age: "",
        email: "",
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
        this.staff.rfid = num + "J" + num + "E";
      }
      return num;
    },
    cancel() {
      this.form = false;
      this.$refs.adminForm.reset();
    },

    handleImage() {
      const { 0: tempUploadedImage } = document.querySelector(
        "#staffImage"
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
      this.$auth
        .createUserWithEmailAndPassword(this.staff.email, "staffpass")
        .then((res) => {
          this.$auth
            .signInWithEmailAndPassword("admin@admin.com", "administrator")
            .then(() => {
              this.$storage
                .ref(`staffs/${this.uploadedImage.name}`)
                .put(this.uploadedImage.image)
                .then((snapshot) => {
                  snapshot.ref.getDownloadURL().then((picture) => {
                    this.$db
                      .collection("staffs")
                      .doc(res.user.uid)
                      .set({
                        ...this.staff,
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
            });
        });
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 320px !important;
}
.adminBt {
  background-color: rgba(20, 83, 163, 0.81) !important;
  text-transform: capitalize;
  color: #ffffff;
  font-size: 12px;
  font-family: "Noto Sans";
  width: 184px;
}
.head {
  margin-left: -2.1% !important;
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
  margin-left: -2.9% !important;
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
</style>
