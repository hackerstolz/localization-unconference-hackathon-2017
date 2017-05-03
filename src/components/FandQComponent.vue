<template>
    <v-container>
        <v-card class="mt-2 mb-4">
            <v-card-row class="grey darken-4">
                <v-card-title>
                    <span class="white--text display-1 header">{{page_header}}</span>
                </v-card-title>
            </v-card-row>
            <template v-for="(faq,i) in faqs">
                <v-card-text>
                    <div class="headline">{{ faq.question }}</div>
                </v-card-text>
                <v-card-text>
                    <div class="title">{{ faq.answer }}</div>
                </v-card-text>
            </template>
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


.header {
    display: block;
    margin: 0 auto;
}
</style>
