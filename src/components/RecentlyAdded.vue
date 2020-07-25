<template>
  <v-row no-gutters class="mt-3 ml-3 ">
    <v-col cols="4">
      <v-img
        :src="recent.img"
        width="45px"
        max-width="45px"
        height="45px"
        :class="recent.class"
      ></v-img>
    </v-col>
    <v-col cols="7" class="txt">
      <span class="text">{{ recent.name }}</span>
      <br />
      <transition name="fade" mode="out-in">
        <v-btn v-if="option" color="primary" class="options ml-11" height="25"
          >View</v-btn
        >
      </transition>
      <span class="subTxt">{{ recent.cat }}</span></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: "RecentlyAdded",
  props: {
    recent: {
      type: Object
    }
  },
  data() {
    return {
      option: false
    };
  }
};
</script>

<style scoped>
.aClass {
  border-radius: 50%;
  border: 2px solid rgba(254, 156, 31, 0.86);
  padding-right: 0%;
  width: 45px !important;
  height: 45px !important;
}
.pClass {
  border-radius: 50%;
  border: 2px solid rgba(16, 218, 161, 0.8);
  padding-right: 0%;
  width: 45px !important;
  height: 45px !important;
}
.sClass {
  border-radius: 50%;
  border: 2px solid rgba(64, 142, 240, 0.91);
  padding-right: 0%;
  width: 45px !important;
  height: 45px !important;
}
.text {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-family: "Roboto";
}
.subTxt {
  font-size: 11px;
  line-height: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "Roboto";
  text-align: left;
}
.txt {
  margin-top: -2px;
  text-align: left !important;
  margin-left: -4.3%;
}
.options {
  position: absolute;
  display: block;
  text-transform: capitalize;
  font-size: 13px;
  font-family: "Roboto";
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
