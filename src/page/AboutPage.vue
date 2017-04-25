<template>
    <v-container>
        <about />
        <faq />
    </v-container>
</template>

<script>
import FAQ from '@/components/FAQComponent'
import About from '@/components/AboutComponent'

export default {
    components: {
        'faq': FAQ,
        'about': About
    },
    data() {
        return {}
    }
}
</script>