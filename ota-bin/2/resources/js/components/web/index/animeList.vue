<template>
    <section class="main-content" id="main-content" name="main-content" v-if="animeList.length !== 0">
        <div class="movie_2" v-for="(anime, index) in animeList" :key="index">
            <div class="movie_2-image" @click="goToAnime(anime.id)">
                <img v-lazy="anime.poster.main2xUrl" :alt="anime.russian">
            </div>
            <div class="movie_2-info">
                <h3 @click="goToAnime(anime.id)">{{ anime.russian }}</h3>
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
</template>

<script>
import {cleanDescription} from "@/ts/cleanDescription.ts";
import {error} from "@/ts/techOperation.ts";

export default {
    data() {
        return {
            animeList: [],
            cleanDescription,
            translateStatus,
            error,
        };
    },
    mounted() {
        setTimeout(() => {
            this.fetchAnimeList(5);
        }, "2000");

    },
    methods: {
        async fetchAnimeList(limit) {
            try {
                const response = await fetch("https://shikimori.one/api/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        query: `
                        query {
                            animes(season: "2020_2023", limit: ${limit}, order: popularity, status: "released", kind: "tv") {
                              id
                              russian
                              kind
                              score
                              status
                              airedOn {
                                year
                              }
                              poster {
                                main2xUrl
                              }
                              description
                              genres {
                                id
                                russian
                              }
                            }
                          }
                        `,
                    }),
                });
                if (!response.ok) {
                    this.error()
                }
                const data = await response.json();
                this.animeList = data.data.animes;
            } catch (error) {
                console.error("Error loading anime data:", error);
            }
        },
        goToAnime(animeId) {
            this.$router.push(`/anime?animeId=${animeId}`);
        }
    },
};
</script>

<style lang="scss" scoped>
.main-content {
    overflow: hidden;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: var(--cl-16);
    border-radius: 20px;

    @media screen and (max-width: 485px) {
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

    h3 {
        font-weight: bold;
        line-height: 120%;
    }
}

.main-content .movie_2:last-child {
    border: none;
}
</style>
