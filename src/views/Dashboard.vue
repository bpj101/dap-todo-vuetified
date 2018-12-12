<template>
  <div class="darkest--text dashboard">
    <h1 class="subheading">Dashboard</h1>
    <v-container class="my-5">

      <v-layout row class="mb-2">
        <v-tooltip top>
          <v-btn color="blue lighten-3" small depressed round @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project</span>
          </v-btn>
          <span>Sort projects by title</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn color="blue lighten-3" small depressed round @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort projects by person</span>
        </v-tooltip>

        <!-- <v-tooltip top>
          <v-btn color="blue lighten-3" small depressed round @click="sortBy('due')">
          <v-icon left small>calendar_today</v-icon>
          <span class="caption text-lowercase">By Due Date</span>
        </v-btn>
        <span>Sort by project due date</span>
        </v-tooltip> -->
        <vbtn></vbtn>
      </v-layout>
      <v-card
        class="primary"
        flat
        v-for="(project, i) in projects"
        :key="i"
      >
        <v-layout
          :class="`lightest--text project pa-2 ${project.status}`"
          row
          wrap
        >
          <v-flex
            :class="{'my-1': $vuetify.breakpoint.smAndDown}"
            sm12
            md6
          >
            <div class="caption darkest--text">Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex
            :class="{'my-2': $vuetify.breakpoint.smAndDown}"
            xs12
            sm4
            md2
          >
            <div class="caption darkest--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex
            :class="{'my-2': $vuetify.breakpoint.smAndDown}"
            xs12
            sm4
            md2
          >
            <div class="caption darkest--text">Due Date</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex
            :class="{'my-2': $vuetify.breakpoint.smAndDown}"
            xs12
            sm4
            md2
          >
            <div class="right">
              <v-chip
                :class="`${project.status} darkest--text caption my-2 `"
                small
              >{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider class="darkest" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          title: "Discover clients Scope of Work ",
          person: "Dame Agnes",
          due: "Jan 15, 2019",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, mauris sed vehicula ullamcorper, purus dui viverra velit, ac aliquam felis turpis at orci. Praesent bibendum faucibus justo hendrerit elementum."
        },
        {
          title: "Design clients project from SOW",
          person: "DAP Team",
          due: "Jan 30, 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, mauris sed vehicula ullamcorper, purus dui viverra velit, ac aliquam felis turpis at orci. Praesent bibendum faucibus justo hendrerit elementum."
        },
        {
          title: "Develop clients project from Design ",
          person: "DAPifiers",
          due: "Feb 30, 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, mauris sed vehicula ullamcorper, purus dui viverra velit, ac aliquam felis turpis at orci. Praesent bibendum faucibus justo hendrerit elementum."
        },
        {
          title: "Deploy clients DAPified project",
          person: "DAPifiers",
          due: "Mar 15, 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, mauris sed vehicula ullamcorper, purus dui viverra velit, ac aliquam felis turpis at orci. Praesent bibendum faucibus justo hendrerit elementum."
        }
      ]
    };
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => {
        return a[prop] < b[prop] ? -1 : 1;
      })
    }
  }
};
</script>

<style lang="sass" scoped>
$statGreen: #66BB6A
$statOrange: #FFB74D
$statRed: #FF1744

.project
  &.completed
    border-left: 4px solid $statOrange
  &.ongoing
    border-left: 4px solid $statGreen
  &.overdue
    border-left: 4px solid $statRed

.v-chip
  &.completed
    background: $statOrange
  &.ongoing
    background: $statGreen
  &.overdue
    background: $statRed
</style>
