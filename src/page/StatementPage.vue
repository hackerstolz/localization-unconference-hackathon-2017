<template>
    <v-container fluid>
        <v-row class="mb-5">
            <v-col xs2 />
            <v-col xs8>
                <template v-for="(text, index) in page_header">
                    <span v-if="(index % 2) === 1" class="display-1 accent--text" :id="index">{{text}}</span>
                    <span v-else class="display-1" :id="index">{{text}}</span>
                </template>
            </v-col>
            <v-col xs2 />
        </v-row>
        <v-row class="mb-2">
            <v-col xs4 />
            <v-col xs4>
                <template v-for="(text, index) in introduction">
                    <span v-if="(index % 2) === 1" class="title accent--text" :id="index">{{text}}</span>
                    <span v-else class="title" :id="index">{{text}}</span>
                </template>
            </v-col>
            <v-col xs4 />
        </v-row>
        <v-row>
            <v-col xs4 />
            <v-col xs4>
                <template v-for="(text, index) in content">
                    <span v-if="(index % 2) === 1" class="title accent--text" :id="index">{{text}}</span>
                    <span v-else class="title" :id="index">{{text}}</span>
                </template>
            </v-col>
            <v-col xs4 />
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            page_header: [
                'Why make a hackathon about',
                ' languages?'
            ],
            introduction: [
                "Since not everyone speaks English, it's necessary to",
                ' localize',
                ' software.'
            ],
            content: [
                'This is not limited to translating a language but also considering that some languages mix',
                ' left-to-right writing',
                ' or that symbols have',
                ' different meanings',
                ' in different cultures.'
            ]
        }
    }
}
</script>

<style scoped>

</style>
