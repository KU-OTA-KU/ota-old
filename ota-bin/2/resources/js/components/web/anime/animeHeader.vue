<template>
    <section v-if="!loaded" class="anime-background" :style="'background-image: url(' + _ANIME_IMAGE_ +  ')'">
        <div class="anime-back-gradient"></div>
        <div class="anime-back-content">
            <div class="anime-back-content-inner">
                <div class="anime-back-content-tit">
                    <div class="anime-back-global-info">
                        <div class="anime-back-panel-left">
                            <div
                                class="anime-back-global-info-image skeleton-bg skeleton-cell-slide skeleton-border-radius"></div>
                            <div class="anime-back-global-info-watch-button">
                                <div
                                    class="skeleton-bg skeleton-cell-slide skeleton-height-button skeleton-weight skeleton-border-radius"
                                    style="margin-bottom: 10px"></div>
                                <div
                                    class="skeleton-bg skeleton-cell-slide skeleton-height-button skeleton-weight skeleton-border-radius"></div>
                            </div>
                        </div>
                        <div class="anime-back-global-current-anime-information">
                            <div
                                class="anime-eng-jpg-name skeleton-height skeleton-cell-slide skeleton-weight skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-title-h2 skeleton-height-h1 skeleton-cell-slide skeleton-weight-50 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-score-genres skeleton-height skeleton-cell-slide skeleton-weight-50 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-status skeleton-height skeleton-cell-slide skeleton-weight-30 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-year skeleton-height skeleton-cell-slide skeleton-weight-30 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-rating skeleton-height skeleton-cell-slide skeleton-weight-30 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-duration skeleton-height skeleton-cell-slide skeleton-weight-30 skeleton-bg skeleton-border-radius"></div>
                            <div
                                class="anime-next-episode-block skeleton-height skeleton-cell-slide skeleton-weight-30 skeleton-bg skeleton-border-radius"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="loaded" class="anime-background" :style="'background-image: url(' + _ANIME_IMAGE_ +  ')'">
        <div class="anime-back-gradient"></div>
        <div class="anime-back-content">
            <div class="anime-back-content-inner">
                <div class="anime-back-content-tit">
                    <div class="anime-back-global-info">
                        <div class="anime-back-panel-left">
                            <div class="anime-back-global-info-image"><img v-lazy="_ANIME_IMAGE_"
                                                                           :alt="_ANIME_ENGLISH_NAME_"></div>
                            <div class="anime-back-global-info-watch-button">
                                <button class="raco-primary pd-normal raco-awsome-icon"
                                        @click="this.scrollTo('player')"><i class="fa-solid fa-play"></i>Смотреть
                                </button>
                                <button class="raco-primary pd-normal raco-awsome-icon"><i
                                    class="fa-solid fa-exclamation"></i>Пожаловаться
                                </button>
                            </div>
                        </div>
                        <div class="anime-back-global-current-anime-information">
                            <div class="anime-eng-jpg-name"><span>{{
                                    _ANIME_ENGLISH_NAME_
                                }}</span><span>{{ _ANIME_AIR_YEAR_ }}<span class="dot">•</span>{{ _ANIME_KIND_ }}<span
                                class="dot">•</span>{{ _ANIME_RUSSIAN_STATUS_ }}</span></div>
                            <div class="anime-title-h2"><h1>{{ _ANIME_RUSSIAN_NAME_ }}</h1></div>
                            <div class="anime-score-genres">
                                <div class="anime-score"><p>{{ _ANIME_SCORE_ }} <i class="fa-solid fa-star"
                                                                                   v-if="_ANIME_SCORE_"></i></p></div>
                                <div class="anime-genres-list">
                                    <router-link class="raco-secondary" v-for="genre in _ANIME_GENRES_" :key="genre.id"
                                                 :to="'/catalog?genre=' + genre.id">{{ genre.russian }}
                                    </router-link>
                                </div>
                            </div>
                            <div class="anime-status"><p>Статус: <span :class="'status-core-block ' + _ANIME_STATUS_ ">{{
                                    _ANIME_RUSSIAN_STATUS_
                                }}</span></p></div>
                            <div class="anime-year"><p>Год выхода: <span>{{ _ANIME_AIR_YEAR_ }}</span></p></div>
                            <div class="anime-rating"><p>Возрастные ограничения: <span>{{ _ANIME_RATING_ }}</span></p>
                            </div>
                            <div class="anime-duration"><p>Длительность: ~ <span>{{ _ANIME_DURATION_ }} мин.</span></p>
                            </div>
                            <div class="anime-next-episode-block"><p>Cледуюший Эпизод:
                                <span>{{ this.formatDate(_ANIME_NEXT_EPISODE_DATE_, this.clientTimeZone) }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import moment from 'moment-timezone';
import {scrollTo, formatDate} from "@/ts/techOperation.ts";

export default {
    data() {
        return {
            formatDate,
            loaded: false,
            _ANIME_ID_: null,
            _ANIME_IMAGE_: null,
            _ANIME_ENGLISH_NAME_: null,
            _ANIME_JAPANESE_NAME: null,
            _ANIME_STATUS_: null,
            _ANIME_RUSSIAN_NAME_: null,
            _ANIME_AIR_YEAR_: null,
            _ANIME_KIND_: null,
            _ANIME_SCORE_: null,
            _ANIME_GENRES_: null,
            _ANIME_RUSSIAN_STATUS_: null,
            _ANIME_RATING_: null,
            _ANIME_DURATION_: null,
            _ANIME_NEXT_EPISODE_DATE_: null,
            scrollTo,
            clientTimeZone: '',
        };
    },
    mounted() {
        this.clientTimeZone = moment.tz.guess();
    },
    methods: {
        main() {
            const storedData = sessionStorage.getItem("CurrentAnime");
            if (storedData) {
                this._ANIME_ID_ = JSON.parse(storedData)[0].id;
                this._ANIME_IMAGE_ = JSON.parse(storedData)[0].poster.originalUrl;
                this._ANIME_ENGLISH_NAME_ = JSON.parse(storedData)[0].english;
                this._ANIME_JAPANESE_NAME = JSON.parse(storedData)[0].japanese;
                this._ANIME_RUSSIAN_NAME_ = JSON.parse(storedData)[0].russian;
                this._ANIME_STATUS_ = JSON.parse(storedData)[0].status;
                this._ANIME_AIR_YEAR_ = JSON.parse(storedData)[0].airedOn.year;
                this._ANIME_KIND_ = JSON.parse(storedData)[0].kind;
                this._ANIME_SCORE_ = JSON.parse(storedData)[0].score;
                this._ANIME_GENRES_ = JSON.parse(storedData)[0].genres;
                this._ANIME_RATING_ = JSON.parse(storedData)[0].rating;
                this._ANIME_DURATION_ = JSON.parse(storedData)[0].duration;
                this._ANIME_NEXT_EPISODE_DATE_ = (() => {
                    const nextEpisodeDate = JSON.parse(storedData)[0]?.nextEpisodeAt;
                    if (!nextEpisodeDate || !moment(nextEpisodeDate, moment.ISO_8601, true).isValid()) {
                        return "нету";
                    } else {
                        return nextEpisodeDate;
                    }
                })();
            }

            if (this._ANIME_STATUS_ === 'released') {
                this._ANIME_RUSSIAN_STATUS_ = 'Завершено';
            } else if (this._ANIME_STATUS_ === 'ongoing') {
                this._ANIME_RUSSIAN_STATUS_ = 'Онгоинг';
            } else {
                this._ANIME_RUSSIAN_STATUS_ = 'Анонс'
            }

            this.loaded = true;
        },

    }
};
</script>

<style lang="scss">
.anime-background {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

.anime-background .anime-back-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--cl-27);
}

.anime-background .anime-back-content {
    position: relative;
    width: 100%;
    margin-top: 200px;
    padding: 10px 0;
}

.anime-back-content .anime-back-content-inner {
    padding: 0 10px;
    width: 100%;
}

.anime-back-content .anime-back-content-tit {
    margin: 0 auto;
    max-width: var(--ota-ku-max-width);
    width: 100%;
}

.anime-back-global-info {
    display: flex;
    gap: 20px;
}

.anime-back-panel-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 25%;
}

.anime-back-global-info-image {
    width: 100%;
    aspect-ratio: 1 / 1.4;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
}

.anime-back-global-info-image img {
    width: 100%;
    position: absolute;
    left: 0;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
}


.anime-back-global-info-watch-button button {
    width: 100%;
    margin-bottom: 10px;
}


.anime-back-global-current-anime-information {
    width: 75%;
}

.anime-year, .anime-duration, .anime-rating {
    margin-top: 10px;
}

.anime-eng-jpg-name {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-size: 0.9em;
    margin-bottom: 3px;

    .dot {
        padding: 0 5px;
    }
}

.anime-eng-jpg-name p:nth-child(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.anime-eng-jpg-name p:nth-child(2) {
    white-space: nowrap
}

.anime-title-h2 {
    display: flex;
    min-width: 50%;

    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin-bottom: 3px;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 3;*/
    /*-webkit-box-orient: vertical;*/
    /*overflow: hidden;*/
}

.anime-title-h2 h1 {
    user-select: auto;
}

.anime-score {
    display: flex;
    font-size: 1em;
    color: var(--status-font-color);
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}

.anime-score p:nth-child(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.anime-score p:nth-child(1) i {
    font-size: 1.2em;
    margin-right: 10px;
    color: var(--cl-19);
}

.anime-score-genres {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 0.9em;
}

.anime-genres-list {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    gap: 10px;
    flex-wrap: wrap;
}

.anime-genres-list a {
    transition: color 0.2s ease-in-out;
    white-space: nowrap;
    text-decoration: underline;
}

.anime-next-episode-block {
    margin-top: 10px;
    color: var(--anime-header-next-episode-block-color);
}

.anime-status {
    position: relative;
    display: block;
    margin-top: 10px;
}

.anime-status .status-core-block {
    color: var(--cl-2);
    padding: 2px 10px;
}

.anime-status .status-core-block.ongoing {
    background-color: var(--cl-28);
}

.anime-status .status-core-block.released {
    background-color: var(--cl-29);
}

.anime-status .status-core-block.anons {
    background-color: var(--cl-30);
}

@media screen and (max-width: 1440px) {
    /*.anime-about p {*/
    /* -webkit-line-clamp: 5 !important;*/
    /*}*/
}

@media screen and (max-width: 1024px) {
    /*.anime-background {*/
    /*  min-height: 661px !important;*/
    /*}*/
    /*.anime-title-h2 {*/
    /* -webkit-line-clamp: 2 !important;*/
    /*}*/
}

@media screen and (max-width: 768px) {
    /*.anime-background {*/
    /*  min-height: 1231px !important;*/
    /*}*/
    .anime-eng-jpg-name {
        margin: 0 0 3px 0;
    }

    /* tranformerrrrniii */
    .anime-back-global-info {
        flex-direction: column;
        align-items: center;
    }

    .anime-back-panel-left {
        width: 60%;
    }

    .anime-back-global-current-anime-information {
        width: 98%;
    }

    /*.anime-back-content {*/
    /*  margin-top: 400px !important;*/
    /*}*/
}

@media screen and (max-width: 600px) {
    /*.anime-background {*/
    /*  min-height: 1100px !important;*/
    /*}*/
    .anime-back-panel-left {
        width: 60%;
    }

    .anime-back-content {
        margin-top: 200px !important;
    }
}

@media screen and (max-width: 500px) {
    /*.anime-background {*/
    /*  min-height: 1016px !important;*/
    /*}*/
}

@media screen and (max-width: 425px) {
    .anime-back-content {
        margin-top: 100px !important;
    }

    .anime-title-h2 {
        min-height: 31px;
    }

    /*.anime-background {*/
    /*  min-height: 853px !important;*/
    /*}*/
    .anime-about {
        text-align: center;
    }
}

@media screen and (max-width: 375px) {
    /*.anime-background {*/
    /*  min-height: 911px !important;*/
    /*}*/
}
</style>
