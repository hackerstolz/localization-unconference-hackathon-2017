<template>
    <v-container fluid>
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