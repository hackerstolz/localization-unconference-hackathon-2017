<template>
    <v-container>
        <v-card>
            <v-card-row class="green darken-1">
                <v-card-title>
                    <span class="white--text">{{page_header}}</span>
                </v-card-title>
            </v-card-row>
            <v-card-row>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(faq,i) in faqs" :key="i">
                        <div slot="header">{{faq.question}}</div>
                        <v-card>
                            <v-card-text class="grey lighten-3">{{faq.answer}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            page_header: 'FAQ',
            faqs: [
                {
                    question: 'Will there be food?',
                    answer: 'Yes! We will provide you with tasty meals throughout the hackathon, including breakfast, lunch and dinner!'
                },
                {
                    question: "What if I've never been to a hackathon?",
                    answer: 'That is no problem! As long as you are motivated and want to create some awesome projects using your skills, you are welcome.'
                }
            ]
        }
    }
}
</script>