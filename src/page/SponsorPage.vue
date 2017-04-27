<template>
    <v-container fluid class="ma-4">
        <v-card>
            <v-card-row class="grey darken-4">
                <v-card-title>
                    <span class="white--text display-1 header">{{page_header}}</span>
                </v-card-title>
            </v-card-row>
            <v-card-row class="mt-2">
                <v-row class="fill-parent pl-2">
                    <template v-for="(header,index) in sponsor_headers">
                        <v-col xs4>
                            <span class="accent--text headline">{{header}}</span>
                        </v-col>
                    </template>
                </v-row>
            </v-card-row>
            <v-card-row class="mt-4">
                <v-row class="fill-parent pl-3 mt-2">
                    <template v-for="i in sponsorsLength">
                        <v-col v-if="exlusive_sponsors[i-1]" xs4 class="pl-2 pr-2 mt-2 mb-2">
                            <img v-if="exlusive_sponsors[i-1].img_url && exlusive_sponsors[i-1].img_url !== ''" v-bind:src="exlusive_sponsors[i-1].img_url" />
                            <div v-else class="place-holder" />
                        </v-col>
                        <v-col v-else xs4>
                        </v-col>
    
                        <v-col v-if="premium_sponsors[i-1]" xs4 class="pl-2 pr-2 mt-2 mb-2">
                            <img v-if="premium_sponsors[i-1].img_url && premium_sponsors[i-1].img_url !== ''" v-bind:src="premium_sponsors[i-1].img_url" />
                            <div v-else class="place-holder" />
                        </v-col>
                        <v-col v-else xs4>
                        </v-col>
    
                        <v-col v-if="standard_sponsors[i-1]" xs4 class="pl-2 pr-2 mt-2 mb-2">
                            <img v-if="standard_sponsors[i-1].img_url && standard_sponsors[i-1].img_url !== ''" v-bind:src="standard_sponsors[i-1].img_url" />
                            <div v-else class="place-holder" />
                        </v-col>
                        <v-col v-else xs4>
                        </v-col>
                    </template>
                </v-row>
            </v-card-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            page_header: "We couldn't do this hackathon without our awesome sponsors!",
            sponsor_headers: [
                'Exlusive sponsors',
                'Premium sponsors',
                'Standard sponsors'
            ],
            exlusive_sponsors: [
                {
                    img_url: ''
                },
                {
                    img_url: ''
                },
                {
                    img_url: ''
                }
            ],
            premium_sponsors: [
                {
                    img_url: ''
                },
                {
                    img_url: ''
                },
                {
                    img_url: ''
                }
            ],
            standard_sponsors: [
                {
                    img_url: ''
                },
                {
                    img_url: ''
                },
                {
                    img_url: ''
                }
            ]
        }
    },
    computed: {
        sponsorsLength() {
            var max = (this.exlusive_sponsors.length < this.premium_sponsors.length) ? this.premium_sponsors.length : this.exlusive_sponsors.length;
            return (max < this.standard_sponsors.length) ? this.standard_sponsors.length : max;
        }
    }
}
</script>

<style scoped>
.fill-parent {
    width: 100%;
}

.place-holder {
    height: 200px;
    background-color: aquamarine;
}

.header {
    display: block;
    margin: 0 auto;
}
</style>
