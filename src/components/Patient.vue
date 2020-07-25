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
      ><v-spacer></v-spacer
      ><v-col cols="3"
        ><v-btn class="ml-8 mt-3 adminBt">
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
        ><span class="listHead2">Gender</span></v-col
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
    <PatientList
      v-for="list in lists"
      :key="list.id"
      :list="list"
      :src="list.img"
    ></PatientList>
  </v-card>
</template>

<script>
import PatientList from "@/components/PatientList.vue";
export default {
  components: {
    PatientList
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
      ]
    };
  }
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
  width: 184px;
  font-family: "Noto Sans";
}
.head {
  margin-left: -1.3% !important;
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
  margin-left: -2.1% !important;
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
