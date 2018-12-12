<template>
  <nav>
    <v-toolbar app color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" flat color="darkest"></v-toolbar-side-icon>
       <v-toolbar-title>
         <span class="font-weight-light blue--text text--lighten-5">Todo</span>
         <span class="darkest--text">DAPified</span>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn justify-end flat outline color="darkest">
         <span class="lightest--text">Sign Out</span>
         <v-icon right>exit_to_app</v-icon>
       </v-btn>
    </v-toolbar>
    <v-navigation-drawer class="primary lightest--text" v-model="drawer" app >
      <h1>Test</h1>
      <v-list>
        <v-list-tile v-for="(link, index) in drawerLinks" :key="index" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="lightest--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="lightest--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        drawerLinks: [
          {
            icon: 'dashboard',
            text: 'Dashboard',
            route: '/'
          },
          {
            icon: 'folder',
            text: 'My Projects',
            route: '/projects'
          },
          {
            icon: 'person',
            text: 'Team',
            route: '/team'
          }
        ]
      }
    },
  }
</script>

<style lang="sass" scoped>

</style>
