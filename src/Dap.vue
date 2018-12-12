<template>
  <v-app class="blue lighten-5">
    <Navbar/>
    <v-content class="mx-4">
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'Dap',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="sass">
$darkest: #1A237E;
$lightest: #BBDEFB;
</style>
