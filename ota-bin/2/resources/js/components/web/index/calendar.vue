<template>
    <section class="calendar">
        <div class="calendar-inner">
            <div class="calendar-title">
                <h2>Сегодняшние аниме</h2>
                <span>Сегодняшные релизы аниме которые выйдут сегодня</span>
            </div>
            <div class="calendar-container">
                <div class="calendar-container-image">
                    <img v-lazy="'/img/ts/sanji.png'" alt="Хана Мидорикава">
                    <div class="container-info">
                        <h3>Санжи Винсмоук</h3>
                        <span>Аниме: <router-link :to="'/anime?animeId=21'"
                                                  class="raco-secondary">one-piece</router-link></span>
                    </div>
                </div>
                <div class="calendar-container-info">
                    <ul>
                        <li v-if="Today" v-for="item in Today" :key="item.anime.id" @click="this.goToAnime(item.anime.id)">
                            <div class="li-cont-image">
                                <img v-lazy="'https://shikimori.one/' + item.anime.image.x96" :alt="item.anime.name">
                            </div>
                            <div class="li-cont-info">
                                <h4>{{ item.anime.russian }}</h4>
                                <span>Следующий эпизод: {{ item.next_episode }}</span>
                                <span>Дата выхода: {{ this.formatDate(item.next_episode_at, this.clientTimeZone) }}</span>
                            </div>
                        </li>
                        <li v-if="Today.length === 0">
                            <div class="li-cont-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                            <div class="li-cont-info">
                                <h4 class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></h4>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                            </div>
                        </li>
                        <li v-if="Today.length === 0">
                            <div class="li-cont-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                            <div class="li-cont-info">
                                <h4 class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></h4>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                            </div>
                        </li>
                        <li v-if="Today.length === 0">
                            <div class="li-cont-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                            <div class="li-cont-info">
                                <h4 class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></h4>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                            </div>
                        </li>
                        <li v-if="Today.length === 0">
                            <div class="li-cont-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                            <div class="li-cont-info">
                                <h4 class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></h4>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                                <span
                                    class="skeleton-cell-slide skeleton-bg skeleton-border-radius skeleton-weight skeleton-height skeleton-margin-top"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { error, formatDate } from "@/ts/techOperation";
import { goToAnime } from "@/ts/goTo";
import moment from 'moment-timezone';
export default {
    data() {
        return {
            Today: [],
            error,
            goToAnime,
            formatDate,
            clientTimeZone: '',
        };
    },
    mounted() {
        this.clientTimeZone = moment.tz.guess();
        setTimeout(() => {
            this.fetchCalendarAnime();
        }, 1000);
    },
    methods: {
        async fetchCalendarAnime() {
            try {
                const response = await fetch("https://shikimori.one/api/calendar");
                if (response.ok) {
                    const data = await response.json();
                    this.Today = data.filter(item =>
                        moment(item.next_episode_at).isSame(moment(), 'day')
                    );
                } else {
                    this.error();
                }
            } catch (error) {
                this.error();
            }
        },
    }
}
</script>



<style scoped lang="scss">
.calendar {
    width: 100%;
    padding: 0 10px;

    &-inner {
        max-width: var(--ota-ku-max-width);
        width: 100%;
        margin: 0 auto;

        .calendar-title {
            width: 100%;
            margin: 20px 0 10px 0;
        }

        .calendar-container {
            display: flex;
            background-color: var(--cl-16);
            padding: 20px;
            border-radius: 20px;

            &-info {
                padding: 20px;
                width: 72%;
                overflow: hidden;
                overflow-y: scroll;
                max-height: 600px;
                min-height: 600px;
                height: 100%;

                &::-webkit-scrollbar {
                    width: 5px;
                }

                ul {
                    li {
                        margin-bottom: 10px;
                        width: 100%;
                        display: flex;
                        cursor: pointer;

                        .li-cont-image {
                            width: 80px;
                            aspect-ratio: 1 / 1.5;
                            position: relative;
                            margin-right: 10px;
                            border-radius: 10px;
                            overflow: hidden;

                            img {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                object-fit: cover;
                                object-position: center;
                            }
                        }

                        .li-cont-info {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                        }

                        &:hover {
                            h4 {
                                color: #1c84ff;
                            }
                        }

                        h4 {
                            transition: color 0.1s ease-in-out;
                        }
                    }
                }
            }

            &-image {
                width: 28%;
                position: relative;
                overflow: hidden;
                cursor: pointer;

                &:hover {
                    .container-info h3 {
                        color: var(--cl-7);
                    }
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                    user-select: none;
                }

                .container-info {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    background-color: #161616;
                    box-shadow: 0px -25px 10px 0px rgba(22, 22, 22, 0.5);
                    padding: 15px 0;

                    h3 {
                        transition: color 0.2s ease-in-out;
                    }

                    span {
                        margin-top: 5px;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    }
                }


            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .calendar-container-info {
        width: 70% !important;
        min-height: 400px !important;
    }

    .calendar-container-image {
        width: 30% !important;

    }
}

@media screen and (max-width: 768px) {
    .calendar-container-image {
        display: none;
    }

    .calendar-container-info {
        width: 100% !important;
        padding: 0 !important;
        min-height: 400px !important;
        max-height: 400px !important;
    }
}
</style>
