<template>
  <v-row>
    <v-row class="ml-12 mt-3">
      <v-col cols="8"
        ><v-row
          ><v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(16, 218, 161, 0.8)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">572</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Patients</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(254, 156, 31, 0.86)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">12</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Admin</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(64, 142, 240, 0.91)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">74</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Staff</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(64, 142, 240, 0.91)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">74</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Staff</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"> <h2>Activities Overview</h2> </v-col>
        </v-row>
        <v-row
          ><v-col cols="12">
            <v-card class="chart" max-height="400" min-height="400">
              <v-row>
                <v-col cols="7">
                  <apexchart
                    class="area"
                    type="area"
                    height="340"
                    :options="chartOptions"
                    :series="series"
                  ></apexchart>
                </v-col>
                <v-col cols="4" class="ml-8 donut">
                  <apexchart
                    type="donut"
                    :options="chartOptions2"
                    :series="series2"
                  ></apexchart
                ></v-col>
              </v-row>
            </v-card> </v-col
        ></v-row>
        <!-- <v-row
          ><v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(16, 218, 161, 0.8)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">572</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Patients</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(254, 156, 31, 0.86)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">12</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Admin</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(64, 142, 240, 0.91)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">74</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Staff</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-list-item>
                <v-list-item-avatar
                  color="rgba(64, 142, 240, 0.91)"
                ></v-list-item-avatar>
                <v-list-item-content class="rightTxt">
                  <v-list-item-title class="headline">74</v-list-item-title>
                  <v-list-item-subtitle class="subTxt"
                    >Total Staff</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row> -->
      </v-col>
      <v-col cols="3" class="ml-7 mt-3">
        <v-card class="pb-5">
          <span class="recentHeader">Recent Activity</span>
          <RecentlyAdded
            v-for="recent in recents"
            :key="recent.id"
            :recent="recent"
            :src="recent.img"
          ></RecentlyAdded>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import RecentlyAdded from "@/components/RecentlyAdded.vue";

export default {
  components: {
    RecentlyAdded,
  },
  data() {
    return {
      recents: [
        {
          id: 1,
          name: "Jacob Jackson",
          cat: "Patient",
          img: require("../assets/male4.jpg"),
          class: "pClass",
        },
        {
          id: 2,
          name: "AbdulRaqeeb Andu",
          cat: "Admin",
          img: require("../assets/male3.jpg"),
          class: "aClass",
        },
        {
          id: 3,
          name: "Daniel Adepoju",
          cat: "Patient",
          img: require("../assets/male2.jpg"),
          class: "pClass",
        },
        {
          id: 4,
          name: "Adegbite Mariam",
          cat: "Staff",
          img: require("../assets/female1.jpg"),
          class: "sClass",
        },
        {
          id: 5,
          name: "Solomon Adekunle",
          cat: "Admin",
          img: require("../assets/male6.jpg"),
          class: "aClass",
        },
        {
          id: 6,
          name: "Oguntoyinbo Boluwatife",
          cat: "Patient",
          img: require("../assets/male5.png"),
          class: "pClass",
        },
        {
          id: 7,
          name: "Okonkwo Peace",
          cat: "Staff",
          img: require("../assets/female6.jpeg"),
          class: "sClass",
        },
        {
          id: 8,
          name: "Adekanye Dolapo",
          cat: "Staff",
          img: require("../assets/female7.jpg"),
          class: "sClass",
        },
      ],

      //ApexCharts Data

      //Area Charts
      series: [
        {
          name: "Patient",
          data: [61, 70, 58, 81, 92, 109, 100],
        },
        {
          name: "Admin",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
          name: "Staff",
          data: [39, 32, 15, 22, 64, 82, 31],
        },
      ],

      chartOptions: {
        chart: {
          height: 20,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: [
          "rgba(16, 218, 161, 0.8)",
          "rgba(254, 156, 31, 0.86)",
          "rgba(64, 142, 240, 0.91)",
        ],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          fontFamily: "Noto Sans",
        },

        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sept",
          ],
        },
      },

      // Donut Chart

      series2: [124, 18, 31],

      chartOptions2: {
        chart: {
          type: "donut",
        },
        labels: ["Patient", "Admin", "Staff"],
        colors: [
          "rgba(16, 218, 161, 0.8)",
          "rgba(254, 156, 31, 0.86)",
          "rgba(64, 142, 240, 0.91)",
        ],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
        },
        legend: {
          position: "bottom",
          fontFamily: "Noto Sans",
        },

        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 100
        //       }
        //     }
        //   }
        // ]
      },
    };
  },
};
</script>

<style scoped>
.indicator {
  width: 35px;
  height: 35px;
  border-radius: 50% !important;
  background-color: rgba(16, 218, 161, 0.8);
}
.v-cols.cols-5 {
  padding: 0 !important;
}

.v-card-title {
  position: absolute;
}
.rightTxt {
  margin-top: -5% !important;
}
.headline {
  font-size: 15px !important;
  font-family: "Roboto";
  font-weight: bold;
  text-align: left;
}
.subTxt {
  font-size: 11px;
  font-family: "Roboto";
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
  text-align: left;
}
.v-list-item-content {
  text-align: left !important;
}
.recentHeader {
  font-family: "Lato";
  text-align: center;
  display: block;
  font-size: 14px;
  padding-top: 8px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: underline;
  font-weight: 550;
}
.chart {
  display: flex;
}
.area {
  margin-top: 8%;
}
.donut {
  margin-top: 14%;
}
.chartTitle {
  font-size: 12px;
  font-family: "Quicksand";
  font-weight: 550;
  text-align: center;
}
</style>
