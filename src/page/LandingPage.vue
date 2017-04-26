<template>
    <v-container fluid class="mt-4">
        <v-row class="fill-parent">
            <v-col xs6>
                <template v-for="(header, index) in page_header">
                    <span class="display-3 break" :id="header">{{header}}</span>
                </template>
    
                <span class="display-1 red--text break mt-5 mb-3">{{sub_header}}</span>
    
                <span class="title break mb-2">{{where}}</span>
                <span class="title break">{{when}}</span>
            </v-col>
            <v-col xs6>
                <img :src="landing_image" class="mt-5" alt="Landing Image" />
            </v-col>
        </v-row>
        <v-row class="mt-5 mb-5" />
        <v-row class="mt-5 mb-5" />
        <v-row class="mt-5">
            <v-col xs1>
                <span>{{powered_by}}</span>
            </v-col>
            <v-col xs5 style="background: cadetblue;" />
            <v-col xs1>
                <span>{{produced_by}}</span>
            </v-col>
            <v-col xs5>
                <v-container>
                    <img :src="hackerstolz_logo" alt="Hackerstolz" />
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
const HACKERSTOLZ_LOGO = require('../assets/hackerstolz-logo.svg');
const LANDING_IMAGE = require('../assets/landing.png');

export default {
    data() {
        return {
            page_header: ['Länguage', '{hacks}'],
            sub_header: "Dôn't gét lóst in translation",
            where: 'Unter den Linden 17, Berlin :Where',
            when: '2017 June 22.-24. :When',
            powered_by: 'POWERED BY',
            produced_by: 'A HACKATHON BY',
            hackerstolz_logo: HACKERSTOLZ_LOGO,
            landing_image: LANDING_IMAGE
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}

.fill-parent {
    width: 100%;
}

.break {
    display: block;
    text-align: right;
}
</style>
