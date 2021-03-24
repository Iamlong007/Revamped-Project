<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="9">
        <v-card>
          <v-card-text class="pa-2">
            <div class="d-sm-flex align-start">
              <div>
                <h3
                  class="title blue-grey--text text--darken-2 font-weight-regular"
                >
                  Activities Overview
                </h3>
              </div>
              <div class="ml-auto">
                <div style="width: 150px">
                  <v-select
                    class="pt-0 mt-0"
                    v-model="select"
                    :items="monthitems"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  ></v-select>
                </div>
              </div>
            </div>
            <div class="mt-9">
              <v-sparkline
                height="105px"
                :gradient="gradient2"
                :line-width="width2"
                :padding="padding2"
                :smooth="radius2 || false"
                :value="value2"
                auto-draw
                stroke-linecap="corner"
              ></v-sparkline>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="3">
        <v-card>
          <v-card-text class="pa-5">
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              Category Statistics
            </h3>
            <div class="py-6">
              <v-sparkline
                type="bar"
                :fill="fill"
                height="265px"
                :gradient="gradient"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>
            </div>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>Staff</td>
                    <td class="font-weight-medium">18.5%</td>
                  </tr>
                  <tr>
                    <td>Patients</td>
                    <td class="font-weight-medium">91.5%</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-img height="250" src="@/assets/img3.jpg"></v-img>

          <v-card-text class="pa-5">
            <v-card-title class="pa-0"
              >Business development of rules 2017</v-card-title
            >
            <v-chip class="my-2" small color="primary"> Technology </v-chip>
            <div class="body-1 mt-2">
              Titudin venenatis ipsum aciat. Vestib ullamcorper quam. nenatis
              ipsum ac feugiat. Ibulum ullamcorper
            </div>
            <v-btn color="primary" text class="elevation-0 px-0 mt-4">
              Read More
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-card-text class="form">{{ searchedPatient }} </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const gradients = [
  ["#745af2"],
  ["#745af2"],
  ["#745af2", "#745af2", "#745af2"],
  ["#745af2", "#745af2"],
  ["#745af2", "#745af2", "#745af2"],
  ["#745af2", "#745af2", "#745af2"],
];

const gradients2 = [
  ["#398bf7"],
  ["#398bf7"],
  ["#398bf7", "#398bf7", "#398bf7"],
  ["#398bf7", "#398bf7"],
  ["#398bf7", "#398bf7", "#398bf7"],
  ["#398bf7", "#398bf7", "#398bf7"],
];

export default {
  name: "BasicDashboard",
  data: () => ({
    select: { state: "January 2020", abbr: "FL" },
    monthitems: [
      { state: "January 2020", abbr: "FL" },
      { state: "February 2020", abbr: "GA" },
      { state: "March 2020", abbr: "NE" },
      { state: "April 2020", abbr: "CA" },
    ],
    fill: true,
    gradient: gradients[4],
    gradients,
    padding: 8,
    radius: 4,
    value: [1, 2, 5, 9, 5, 10, 3, 5, 7, 4, 2],
    width: 5,

    fill2: true,
    gradient2: gradients2[4],
    gradients2,
    radius2: 0,
    padding2: 0,
    value2: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380],
    width2: 1,
    tasks: [
      {
        done: false,
        text: "Check emails of Mr.Shah",
      },
      {
        done: false,
        text: "Give salary to employee",
      },
    ],
    task: null,
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
    messages: [
      {
        title: "Pavan Kumar",
        avatar: "1",
        avatarstatus: "success",
        desc: "info@wrappixel.com",
      },
      {
        title: "Sonu Nigam",
        avatar: "2",
        avatarstatus: "error",
        desc: "pamela1987@gmail.com",
      },
      {
        title: "Arijit singh",
        avatar: "3",
        avatarstatus: "warning",
        desc: "cruise1298.fiplip@gmail.com",
      },
      {
        title: "Pavan Kumar",
        avatar: "4",
        avatarstatus: "success",
        desc: "kat@gmail.com",
      },
      {
        title: "Pavan Kumar",
        avatar: "5",
        avatarstatus: "success",
        desc: "info@wrappixel.com",
      },
      {
        title: "Sonu Nigam",
        avatar: "6",
        avatarstatus: "error",
        desc: "pamela1987@gmail.com",
      },
    ],
    href() {
      return undefined;
    },
    monthtable: [
      {
        img: "/1.jpg",
        activestate: "",
        leadname: "Sunil Joshi",
        leademail: "Web Designer",
        projectname: "Elite Admin",
        statuscolor: "success",
        statustext: "Low",
      },
      {
        img: "/2.jpg",
        activestate: "",
        leadname: "Andrew",
        leademail: "Project Manager",
        projectname: "Real Homes",
        statuscolor: "info",
        statustext: "Medium",
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "Bhavesh patel",
        leademail: "Developer",
        projectname: "MedicalPro Theme",
        statuscolor: "deep-purple accent-2 white--text",
        statustext: "High",
      },
      {
        img: "/4.jpg",
        activestate: "",
        leadname: "Nirav Joshi",
        leademail: "Frontend Eng",
        projectname: "Elite Admin",
        statuscolor: "error",
        statustext: "Low",
      },
      {
        img: "/5.jpg",
        activestate: "",
        leadname: "Micheal Doe",
        leademail: "Content Writer",
        projectname: "Helping Hands",
        statuscolor: "warning",
        statustext: "High",
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "James",
        leademail: "Project Manager",
        projectname: "Real Homes",
        statuscolor: "info",
        statustext: "Medium",
      },
    ],
    searchedPatient: {},
  }),
  mounted() {
    this.$db
      .collection("patients")
      .where("rfid", "==", "671J671E")
      .get()
      .then((res) => {
        this.searchedPatient = res.docs[0].data();
      });
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      });

      this.task = null;
    },
  },
};
</script>
