<template>
    <v-container fluid class="mt-4">
        <timeline />
    </v-container>
</template>

<script>
import TimeLine from '@/components/TimelineComponent'

export default {
    components: {
        'timeline': TimeLine
    },
    data() {
        return {}
    }
}
</script>