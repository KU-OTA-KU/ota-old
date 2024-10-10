<template>
    <section v-if="animeList.length === 0 && animeFoundInitialized === false" class="anime-catalog" id="anime-catalog"
             name="anime-catalog">
        <div class="movie_2">
            <div class="movie_2-image skeleton-bg skeleton-cell-slide">
            </div>
            <div class="movie_2-info">
                <div class="movie_2-info-kind-genres-aired-container">
                    <div
                        class="movie_2-info-info-anime skeleton-cell-slide skeleton-bg skeleton-height-h1 skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-genres-list skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-about skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                </div>
            </div>
        </div>
        <div class="movie_2">
            <div class="movie_2-image skeleton-bg skeleton-cell-slide">
            </div>
            <div class="movie_2-info">
                <div class="movie_2-info-kind-genres-aired-container">
                    <div
                        class="movie_2-info-info-anime skeleton-cell-slide skeleton-bg skeleton-height-h1 skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-genres-list skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-about skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                </div>
            </div>
        </div>
        <div class="movie_2">
            <div class="movie_2-image skeleton-bg skeleton-cell-slide">
            </div>
            <div class="movie_2-info">
                <div class="movie_2-info-kind-genres-aired-container">
                    <div
                        class="movie_2-info-info-anime skeleton-cell-slide skeleton-bg skeleton-height-h1 skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-genres-list skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-about skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                </div>
            </div>
        </div>
        <div class="movie_2">
            <div class="movie_2-image skeleton-bg skeleton-cell-slide">
            </div>
            <div class="movie_2-info">
                <div class="movie_2-info-kind-genres-aired-container">
                    <div
                        class="movie_2-info-info-anime skeleton-cell-slide skeleton-bg skeleton-height-h1 skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-genres-list skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-about skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                </div>
            </div>
        </div>
        <div class="movie_2">
            <div class="movie_2-image skeleton-bg skeleton-cell-slide">
            </div>
            <div class="movie_2-info">
                <div class="movie_2-info-kind-genres-aired-container">
                    <div
                        class="movie_2-info-info-anime skeleton-cell-slide skeleton-bg skeleton-height-h1 skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-genres-list skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                    <div
                        class="movie_2-info-about skeleton-margin-top skeleton-cell-slide skeleton-bg skeleton-height skeleton-border-radius">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section ref="animeCatalog" class="anime-catalog" id="anime-catalog" name="anime-catalog"
             v-if="animeList.length !== 0">
        <div class="movie_2" v-for="(anime, index) in animeList" :key="index">
            <div class="movie_2-image" @click="this.goToAnime(anime.id)">
                <img v-lazy="this.getImgUrl(anime)" :alt="anime.russian">
            </div>
            <div class="movie_2-info">
                <h3 @click="this.goToAnime(anime.id)">{{ anime.russian }}</h3>
                <div class="movie_2-info-kind-genres-aired-container">
                    <div class="movie_2-info-info-anime">
                        <span>{{ anime.score }}<i class="fa-solid fa-star"></i></span><span class="dot">•</span>
                        <span>{{ anime.kind }}</span><span class="dot">•</span>
                        <span>{{ anime.airedOn.year }}</span>
                        <span class="dot">•</span>
                        <span>{{ translateStatus(anime.status) }}</span>
                    </div>
                    <div class="movie_2-info-genres-list">
                        <router-link class="raco-secondary" v-for="(genre, genreIndex) in anime.genres.slice(0, 3)"
                                     :key="genreIndex"
                                     :to="'/catalog?genre='+ genre.id">{{ genre.russian }}
                        </router-link>
                    </div>
                    <div class="movie_2-info-about">
                        <p>{{ cleanDescription(anime.description) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="!animeFound ||  !animeFound && animeFoundInitialized === false" class="empty-anime-message">
        <h3>Ничего не найдено 😔</h3>
    </div>
</template>

<script>
import {cleanDescription} from "@/ts/cleanDescription.ts";
import {translateStatus} from "@/ts/translateStatus.ts";
import {getImgUrl, error, goToAnime} from "@/ts/techOperation.ts";

export default {
    data() {
        return {
            animeList: [],
            currPage: 1,
            limit: 10,
            loading: false,
            animeFound: true,
            animeFoundInitialized: false,
            cleanDescription,
            translateStatus,
            getImgUrl,
            error,
            goToAnime
        };
    },
    mounted() {
        this.fetchAnimeData();
        window.addEventListener("scroll", this.loadNextPage);
        this.$watch(
            () => this.$route.query,
            () => {
                this.handleUrlChange();
            }
        );
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.loadNextPage);
    },
    methods: {
        handleUrlChange() {
            this.animeList = [];
            this.currPage = 1;
            this.animeFound = true;
            this.animeFoundInitialized = false;
            this.fetchAnimeData();
            window.scrollTo({top: 0});
        },
        async fetchAnimeData() {
            if (!this.loading) {
                try {
                    this.loading = true;
                    const currentParams = this.getUrlParams();
                    const response = await fetch("https://shikimori.one/api/graphql", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            query: `
                        query {
                            animes(
                                search: "${currentParams.search || ''}",
                                season: "${currentParams.season || ''}",
                                status: "${currentParams.status || 'released,ongoing'}",
                                kind: "${currentParams.kind || 'tv,ona,ova'}",
                                order: ${currentParams.sort || 'popularity'},
                                rating: "${currentParams.rating || ''}",
                                genre: "${currentParams.genre || ''}",
                                limit: ${this.limit},
                                page: ${this.currPage},
                                censored: true,
                            ) {
                                id
                                name
                                russian
                                kind
                                score
                                status
                                description
                                genres {
                                    id
                                    russian
                                }
                                airedOn {
                                    year
                                }
                                poster {
                                    main2xUrl
                                }
                            }
                        }
                    `,
                        }),
                    });
                    const data = await response.json();
                    const animeList = data.data.animes;
                    this.animeList = [...this.animeList, ...animeList];
                    this.currPage++;
                    if (animeList.length === 0 && this.animeFoundInitialized === false) {
                        this.animeFound = false;
                        this.animeFoundInitialized = true;
                    } else {
                        this.animeFound = true;
                        this.animeFoundInitialized = true;
                    }
                } catch (e) {
                    this.error();
                } finally {
                    this.loading = false;
                }
            }
        },
        getUrlParams() {
            const searchParams = new URLSearchParams(window.location.search);
            const params = {};
            for (const [key, value] of searchParams) {
                const paramName = key.replace(/\[\]$/, '');
                if (paramName in params) {
                    params[paramName] += `,${value}`;
                } else {
                    params[paramName] = value;
                }
            }
            return params;
        },
        loadNextPage() {
            if (this.isNearBottom()) {
                this.fetchAnimeData();
            }
        },
        isNearBottom() {
            const mainContent = this.$refs.animeCatalog;
            if (mainContent) {
                const mainContentBottom = mainContent.offsetTop + mainContent.offsetHeight;
                return window.innerHeight + window.scrollY >= mainContentBottom - 200;
            }
            return false;
        },
    },
};
</script>

<style lang="scss" scoped>
.anime-catalog {
    overflow: hidden;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: var(--cl-16);
    border-radius: 20px;
}

@media screen and (max-width: 485px) {
    .anime-catalog {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

.empty-anime-message {
    z-index: 100;
    width: 100%;
    padding: 20px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.empty-anime-message h3 {
    font-weight: bold;
}
</style>
