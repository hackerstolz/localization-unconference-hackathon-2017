<template>
  <v-container id="app" fluid>
    <header class="h-toolbar grey darken-4">
      <v-row class="fill-parent">
        <v-col xs1 style="height: 80px;">
          <img :src="logo" alt="logo" class="mt-1" />
        </v-col>
        <template v-for="(section, index) in sections">
          <v-col xs2>
            <router-link v-bind:to="section.link" class="btn btn--flat btn--raised remove-underline display-2 white--text">{{section.name}}</router-link>
          </v-col>
        </template>
      </v-row>
    </header>
    <router-view class="mt-4" />
  </v-container>
</template>

<script>
const LOGO = require('./assets/hackerstolz-icon.svg');

export default {
  name: 'app',
  data() {
    return {
      logo: LOGO,
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

img {
  max-width: 100%;
  max-height: 100%;
}

.fill-parent {
  width: 100%;
}

.h-toolbar {
  height: 80px;
  line-height: 80px;
}

.remove-underline {
  text-align: center;
  text-decoration: none;
}
</style>
