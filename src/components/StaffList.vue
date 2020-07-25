<template>
  <v-row class="flex">
    <v-col cols="1"><v-img :src="list.img" class="avatar"></v-img> </v-col
    ><v-col cols="2" class="name">
      <span class="adminName">{{ list.name }}</span></v-col
    >
    <v-col cols="1" class="gender"
      ><span class="adminName">{{ list.gender }}</span></v-col
    >
    <v-col cols="1" class="userId"
      ><span class="adminName">{{ list.userId }}</span></v-col
    >
    <v-col cols="2" class="date"
      ><span class="adminName">{{ list.date }}</span></v-col
    >
    <v-col cols="1" class="button"
      ><v-btn text
        ><v-icon color="rgba(20, 83, 163, 0.81)">mdi-information</v-icon></v-btn
      ></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: "StaffList",
  props: {
    list: {
      type: Object
    }
  }
};
</script>

<style scoped>
.flex {
  flex-wrap: nowrap;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(64, 142, 240, 0.91);
  margin-left: 35% !important;
}
.name {
  margin-left: 1%;
  margin-top: 0.87%;
  text-align: left;
}
.adminName {
  font-size: 13px;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  color: rgba(0, 0, 0, 0.75);
}
.gender {
  margin-top: 0.87%;
  margin-left: 11.37%;
  text-align: left;
}
.userId {
  margin-top: 0.87%;
  margin-left: 15%;
  text-align: left;
}
.date {
  margin-top: 0.87%;
  margin-left: 12.3%;
  text-align: left;
}
.button {
  margin-left: -5% !important;
}
</style>
