<template>
    <v-container>
        <v-row style="width=100%">
            <v-col xs3/>
            <v-col xs6>
                <span class="darkgrey--text display-2">{{page_header}}</span>
            </v-col>
            <v-col xs3/>
        </v-row>
        <section id="cd-timeline" class="cd-container">
            <template v-for="(item, index) in timelineEvents">
                <div v-if="item.type === TIME_LINE_TYPES.HEADER" class="cd-timeline-block mb-1">
                    <div class="grey lighten-2 pt-2 pb-2">
                        <span class="display-1 mb-2" style=" display: block;">{{item.day + ','}}</span>
                        <span class="display-1">{{item.date}}</span>
                    </div>
                </div>
                <div v-else class="cd-timeline-block mb-2">
                    <div class="cd-timeline-img green darken-1">
                        <img :src="item.image" alt="Picture">
                    </div>
                    <!-- cd-timeline-img -->
    
                    <v-card class="cd-timeline-content" raised>
                        <span class="headline">{{`${item.time} - ${item.text}`}}</span>
                    </v-card>
                    <!-- cd-timeline-content -->
                </div>
            </template>
            <div class="cd-timeline-block mt-4">
                <div class="cd-timeline-img green darken-1">
                    <img :src="winner_icon" alt="Picture">
                </div>
                <!-- cd-timeline-img -->
    
                <v-card raised class="cd-timeline-content">
                    <span class="display-1">{{winner_text}}</span>
                </v-card>
                <!-- cd-timeline-content -->
            </div>
        </section>
    </v-container>
</template>

<script>

const GET_TOGETHER_ICON = require('../assets/014-glass.svg');
const TEAM_BUILDING_ICON = require('../assets/008-chat.svg');
const REGISTRATION_ICON = require('../assets/013-cereals.svg');
const KICK_OFF_ICON = require('../assets/012-presentation.svg');
const WORKSHOP_ICON = require('../assets/000-people.svg');
const START_ICON = require('../assets/011-rocket.svg');
const LUNCH_ICON = require('../assets/006-sandwich.svg');
const DINNER_ICON = require('../assets/010-tray.svg');
const FUN_ICON = require('../assets/007-gamepad.svg');
const MIDNIGHT_ICON = require('../assets/009-food.svg');
const BREAKFAST_ICON = require('../assets/005-vitamins.svg');
const FINISH_ICON = require('../assets/004-finish.svg');
const DEADLINE_ICON = require('../assets/003-deadline.svg');
const PITCHES_ICON = require('../assets/002-business-presentation.svg');
const WINNER_ICON = require('../assets/001-medal.svg')

const TIME_LINE_TYPES = {
    HEADER: 'Timeline-Section-Header',
    ENTRY: 'Timeline-Entry'
};
export default {
    data() {
        return {
            TIME_LINE_TYPES: {
                HEADER: 'Timeline-Section-Header',
                ENTRY: 'Timeline-Entry'
            },
            page_header: 'Schedule',
            winner_icon: WINNER_ICON,
            winner_text: 'Relax and enjoy the prize ceremony. Have beer and talk to cool people!',
            timelineEvents: [
                {
                    type: TIME_LINE_TYPES.HEADER,
                    day: 'Thursday',
                    date: '22nd of July 2017'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: GET_TOGETHER_ICON,
                    time: '18:30',
                    text: 'Get together'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: TEAM_BUILDING_ICON,
                    time: '20:30',
                    text: 'Teambuilding and Brainstorming'
                },
                {
                    type: TIME_LINE_TYPES.HEADER,
                    day: 'Friday',
                    date: '23rd of July 2017'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: REGISTRATION_ICON,
                    time: '8:30',
                    text: 'Registration and breakfast'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: KICK_OFF_ICON,
                    time: '10:00',
                    text: 'Kick off and Introduction'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: WORKSHOP_ICON,
                    time: '11:00',
                    text: 'Workshops & Input'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: START_ICON,
                    time: '11:30',
                    text: 'Start hacking'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: LUNCH_ICON,
                    time: '13:30',
                    text: 'Tasty, tasty lunch'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: DINNER_ICON,
                    time: '19:00',
                    text: 'Dinnertime'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: FUN_ICON,
                    time: '22:00',
                    text: 'Fun & games'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: MIDNIGHT_ICON,
                    time: '00:00',
                    text: 'Midnight snack'
                },
                {
                    type: TIME_LINE_TYPES.HEADER,
                    day: 'Saturday',
                    date: '24td of July 2017'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: BREAKFAST_ICON,
                    time: '08:30',
                    text: 'Breakfast'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: FINISH_ICON,
                    time: '09:30',
                    text: 'Finishing touches'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: DEADLINE_ICON,
                    time: '12:00',
                    text: 'DEADLINE and lunch'
                },
                {
                    type: TIME_LINE_TYPES.ENTRY,
                    image: PITCHES_ICON,
                    time: '13:00',
                    text: 'Pitches'
                }
            ]
        }
    }
}
</script>

<style scoped>
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

img {
    max-width: 100%;
}


.cd-timeline-header {
    display: block;
}

.cd-container {
    /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;
}

.cd-container::after {
    /* clearfix */
    content: '';
    display: table;
    clear: both;
}

#cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
}

#cd-timeline::before {
    /* this is the vertical line */
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #000000;
}

@media only screen {
    #cd-timeline {
        margin-top: 3em;
        margin-bottom: 3em;
    }
    #cd-timeline::before {
        left: 50%;
        margin-left: -2px;
    }
}

.cd-timeline-block {
    position: relative;
    margin: 2em 0;
}

.cd-timeline-block::after {
    clear: both;
    content: "";
    display: table;
}

.cd-timeline-block:first-child {
    margin-top: 0;
}

.cd-timeline-block:last-child {
    margin-bottom: 0;
}

@media only screen {
    .cd-timeline-block {
        margin: 4em 0;
    }
    .cd-timeline-block:first-child {
        margin-top: 0;
    }
    .cd-timeline-block:last-child {
        margin-bottom: 0;
    }
}

.cd-timeline-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img img {
    display: block;
    width: 40px;
    height: 40px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
}

.cd-timeline-img.cd-picture {
    background: #75ce66;
}

.cd-timeline-img.cd-movie {
    background: #c03b44;
}

.cd-timeline-img.cd-location {
    background: #f0ca45;
}

@media only screen {
    .cd-timeline-img {
        width: 60px;
        height: 60px;
        left: 50%;
        margin-left: -30px;
        /* Force Hardware Acceleration in WebKit */
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
    }
    .cssanimations .cd-timeline-img.is-hidden {
        visibility: hidden;
    }
    .cssanimations .cd-timeline-img.bounce-in {
        visibility: visible;
        -webkit-animation: cd-bounce-1 0.6s;
        -moz-animation: cd-bounce-1 0.6s;
        animation: cd-bounce-1 0.6s;
    }
}

.cd-timeline-content {
    position: relative;
    margin-left: 60px;
    background: #ffffff;
    border-radius: 0.25em;
    padding: 1em;
    box-shadow: 0 3px 0 #d7e4ed;
}

.cd-timeline-content::after {
    clear: both;
    content: "";
    display: table;
}

.cd-timeline-content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #ffffff;
}

@media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
        font-size: 20px;
        font-size: 1.25rem;
    }
}

@media only screen {
    .cd-timeline-content {
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
    }
    .cd-timeline-content::before {
        top: 24px;
        left: 100%;
        border-color: transparent;
        border-left-color: #ffffff;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
        float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
        top: 24px;
        left: auto;
        right: 100%;
        border-color: transparent;
        border-right-color: #ffffff;
    }
}
</style>
