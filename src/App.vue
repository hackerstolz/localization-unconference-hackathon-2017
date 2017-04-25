<template>
  <v-container id="app" fluid>
    <v-toolbar class="green">
      <v-row class="fill-parent">
        <v-col xs1/>
        <template v-for="(section, index) in sections">
          <v-col xs2>
            <router-link v-bind:to="section.link" class="btn btn--flat btn--raised remove-underline display-1">{{section.name}}</router-link>
          </v-col>
        </template>
        <v-col xs1/>
      </v-row>
    </v-toolbar>
    <router-view class="mt-4" />
  </v-container>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      sections: [
        {
          name: 'About & FAQ',
          link: '/about'
        },
        {
          name: 'Schedule',
          link: '/schedule'
        },
        {
          name: 'Why Languages?',
          link: '/why'
        },
        {
          name: 'Sponsors',
          link: '/sponsors'
        },
        {
          name: 'Jury & Prizes',
          link: '/jury'
        }
      ]
    }
  }
}
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fill-parent {
  width: 100%;
}

.remove-underline {
  text-decoration: none;
}
</style>
