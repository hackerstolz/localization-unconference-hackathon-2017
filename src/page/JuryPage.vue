
<template>
    <v-container class="mt-4 mb-4">
        <v-card-row>
            <v-card-title>
                <span class="green--text display-1 center-content">{{page_header}}</span>
            </v-card-title>
        </v-card-row>
        <v-card-row>
            <v-row>
                <template v-for="(speaker, index) in speakers">
                    <v-col xs4="xs4">
                        <v-card class="mt-2 mb-2">
                            <v-card-row class="primary darken-3">
                                <v-card-title>
                                    <p class="white--text center-content">{{speaker.name}}</p>
                                </v-card-title>
                            </v-card-row>
                            <v-card-row>
                                <div class="center-content mt-3">
                                    <img :src="speaker.avatar" :alt="`${speaker.name} Portrait`" />
                                </div>
                            </v-card-row>
                            <v-card-text>
                                {{speaker.short_summary}}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </template>
            </v-row>
        </v-card-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            page_header: "Meet our seasoned judges!",
            speakers: [
                {
                    name: 'Joan Douglas',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/women/53.jpg'
                }, {
                    name: 'Doris Bowman',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/women/81.jpg'
                }, {
                    name: 'Jennifer Davidson',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/women/91.jpg'
                }, {
                    name: 'Dora Diaz',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
                }, {
                    name: 'Alfredo Miles',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/men/93.jpg'
                }, {
                    name: 'Dianne Lane',
                    short_summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
                }
            ]
        }
    }
};
</script>

<style scoped>
.center-content {
    display: block;
    margin: 0 auto;
}

img {
    border-radius: 50%;
}
</style>