<template>
    <section class="animes-related" v-if="!_ANIME_RELATED_">
        <div class="animes-related-inner">
            <div class="animes-related-tit">
                <div class="related-animes-list-title">
                    <h2>Связенное</h2>
                    <h6>Аниме Связенные с франшизой</h6>
                </div>
                <div class="related-animes-container">
                    <div class="related-animes-block">
                        <div
                            class="related-animes-name skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></div>
                        <div class="related-animes-info">
                            <div
                                class="related-animes-info-image skeleton-cell-slide skeleton-weight skeleton-bg"></div>
                            <div class="related-animes-type-year">
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="related-animes-block">
                        <div
                            class="related-animes-name skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></div>
                        <div class="related-animes-info">
                            <div
                                class="related-animes-info-image skeleton-cell-slide skeleton-weight skeleton-bg"></div>
                            <div class="related-animes-type-year">
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="related-animes-block">
                        <div
                            class="related-animes-name skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></div>
                        <div class="related-animes-info">
                            <div
                                class="related-animes-info-image skeleton-cell-slide skeleton-weight skeleton-bg"></div>
                            <div class="related-animes-type-year">
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="related-animes-block">
                        <div
                            class="related-animes-name skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></div>
                        <div class="related-animes-info">
                            <div
                                class="related-animes-info-image skeleton-cell-slide skeleton-weight skeleton-bg"></div>
                            <div class="related-animes-type-year">
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                            </div>
                        </div>
                    </div>
                    <div class="related-animes-block">
                        <div
                            class="related-animes-name skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></div>
                        <div class="related-animes-info">
                            <div
                                class="related-animes-info-image skeleton-cell-slide skeleton-weight skeleton-bg"></div>
                            <div class="related-animes-type-year">
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                                <p class="skeleton-cell-slide skeleton-height skeleton-weight skeleton-bg"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="animes-related" v-if="_ANIME_RELATED_">
        <div class="animes-related-inner">
            <div class="related-animes-list-title">
                <h2>Связенное</h2>
                <span>Аниме Связенные с франшизой</span>
            </div>
            <div class="related-animes-container">
                <div class="related-animes-block" v-for="(relatedAnime, index) in _ANIME_RELATED_" :key="index"
                     @click="this.goToAnime(relatedAnime.anime.id)">
                    <div class="related-animes-name">
                        <p :to="'/anime?animeId=' + relatedAnime.anime.id">{{ relatedAnime.anime.russian }}</p>
                    </div>
                    <div class="related-animes-info">
                        <div class="related-animes-info-image">
                            <img :src="relatedAnime.anime.poster.mini2xUrl" :alt="relatedAnime.anime.russian">
                        </div>
                        <div class="related-animes-type-year">
                            <span>{{ relatedAnime.anime.kind }} <span class="dot">•</span>
                                {{ relatedAnime.anime.airedOn.year }}</span>
                            <span>{{ relatedAnime.relationRu }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {goToAnime} from "@/ts/goTo.ts";

export default {
    data() {
        return {
            _ANIME_RELATED_: null,
            goToAnime
        };
    },
    methods: {
        main() {
            const storedData = sessionStorage.getItem("CurrentAnime");
            if (storedData) {
                this._ANIME_RELATED_ = JSON.parse(storedData)[0].related.filter(anime => anime.anime && anime.anime.id);
            }
            console.log(this._ANIME_RELATED_);
        },
    }
}
</script>

<style lang="scss" scoped>
.animes-related {
    width: 100%;
    padding: 0 10px;

    & .animes-related-inner {
        width: 100%;
        max-width: var(--ota-ku-max-width);
        margin: 0 auto;
    }

    .related-animes-container {
        width: 100%;
        display: grid;
        margin-top: 10px;
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        gap: 10px;
        position: relative;

        @media screen and (max-width: 1024px) {
            & {
                grid-template-columns: repeat(4, minmax(100px, 1fr));
            }
        }

        @media screen and (max-width: 768px) {
            & {
                grid-template-columns: repeat(3, minmax(100px, 1fr));
            }
        }

        @media screen and (max-width: 425px) {
            & {
                grid-template-columns: repeat(2, minmax(100px, 1fr));
            }
        }
    }
}

.related-animes-container .related-animes-block {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 300px;
    width: 100%;
    cursor: pointer;
}

.related-animes-block:hover .related-animes-name {
    color: var(--cl-7) !important;
}

.related-animes-list-title {
    margin-bottom: 5px;
}


.related-animes-container .related-animes-block .related-animes-name {
    font-size: 1em;
    max-width: 200px;
    text-decoration: underline;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
}

.related-animes-container .related-animes-block .related-animes-info {
    display: flex;
    gap: 5px;
}

.related-animes-info .related-animes-info-image {
    width: 40%;
    aspect-ratio: 1 / 1.5;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.related-animes-info .related-animes-info-image img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.related-animes-type-year {
    width: 70%;
    display: flex;
    flex-direction: column;

    span {
        margin-bottom: 5px;
    }
}
</style>
