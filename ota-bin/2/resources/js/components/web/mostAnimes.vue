<template>
    <section class="most-container" v-if="animeLists">
        <div class="most-container-inner">
            <div class="most-container-tit">
                wdwdwdwd
                <div class="most-content-gallery-cell" v-for="(animeList, index) in animeLists" :key="index">
                    <div class="most-content-title-h2">
                        <h2>{{ animeList.title }}</h2>
                        <span>{{ animeList.description }}</span>
                    </div>
                    <div class="most-content-animes-list-option"
                         :class="'most-content-animes-list-option-' + (index + 1)">
                        <div class="most-content-movie" v-for="(anime, i) in animeList.animes" :key="i">
                            <div class="most-content-movie-image">
                                <img v-lazy="anime.poster.main2xUrl" :alt="anime.name">
                                <div class="most-content-movie-info">
                                    <span class="most-content-movie-name">
                                        {{ anime.russian }}
                                    </span>
                                    <span class="most-content-info">
                                        {{ anime.airedOn.year }} <span class="dot">•</span>
                                        Тв сериал
                                    </span>
                                    <button class="most-content-movie-button">
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            animeLists: [],
        };
    },
    mounted() {
        this.fetchAllData(6);
    },
    methods: {
        fetchAllData(animeLimit: number) {
            try {
                const response = fetch("https://shikimori.one/api/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        query: `
              query {
                ongoingAnime: animes(limit: ${animeLimit}, order: popularity, status: "ongoing", kind: "tv") {
                  id
                  name
                  russian
                  kind
                  score
                  poster {
                    main2xUrl
                  }
                  airedOn {
                    year
                  }
                }
                anonseAnime: animes(season: "2024", limit: ${animeLimit}, order: name, status: "anons", kind: "tv") {
                  id
                  name
                  russian
                  kind
                  score
                  poster {
                    main2xUrl
                  }
                  airedOn {
                    year
                  }
                }
                topAnime: animes(limit: ${animeLimit}, order: ranked, status: "released", kind: "tv") {
                  id
                  name
                  russian
                  kind
                  score
                  poster {
                    main2xUrl
                  }
                  airedOn {
                    year
                  }
                }
                releasedAnime: animes(limit: ${animeLimit}, order: popularity, status: "released", kind: "tv") {
                  id
                  name
                  russian
                  kind
                  score
                  poster {
                    main2xUrl
                  }
                  airedOn {
                    year
                  }
                }
              }
            `,
                    }),
                });

                const data = response.json();
                if (!response.ok) {
                    this.error();
                }
                this.animeLists.push({
                    title: "Онгоинги",
                    description: "Вступай в новые эпизоды приключений, следи за сюжетом!",
                    anime: data.data.ongoingAnimes,
                });

                this.animeLists.push({
                    title: "Анонсы",
                    description: "Узнавай первым о предстоящих релизах, которые ожидают нас!",
                    anime: data.data.anonseAnimes,
                });

                this.animeLists.push({
                    title: "Топ аниме",
                    description: "Погружайся в лучшие произведения аниме, отмеченные высшим призом!",
                    anime: data.data.topAnimes,
                });

                this.animeLists.push({
                    title: "Завершенные",
                    description: "Проведи время в компании классических аниме, наполненных волнением!",
                    anime: data.data.releasedAnimes,
                });
            } catch (error) {
                console.log(error)
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.most-container {
    width: 100%;

    &-inner {
        width: 100%;
        padding: 0 10px;
    }

    & .most-container-tit {
        max-width: var(--ota-ku-max-width);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 30px auto 0;
        gap: 18px;

        .most-content-gallery-cell {
            .most-content-title-h2 {
                color: var(--most-content-title-h2-color);
            }
        }

        .most-content-animes-list-option {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
            gap: 10px;
            margin: 10px 0 0 0;
            border-radius: 10px;

            @media screen and (max-width: 417px) {
                grid-template-columns: repeat(auto-fill, minmax(126px, 1fr));
            }


            .most-content-movie {
                cursor: pointer;
                width: 100%;

                &:hover {
                    .most-content-movie-image img {
                        transform: scale(1.1);
                        filter: blur(2px);
                    }

                    .most-content-movie-info {
                        display: flex;
                    }
                }

                .most-content-movie-image {
                    width: 100%;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                    aspect-ratio: 1 / 1.44;
                    margin-bottom: 5px;

                    img {
                        object-fit: cover;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        transition: transform 0.2s ease-in-out;
                    }
                }

                .most-content-movie-info {
                    background-color: var(--cl-24);
                    display: none;
                    text-align: center;
                    position: absolute;
                    z-index: 2;
                    width: 100%;
                    padding: 10px;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .most-content-movie-name {
                        position: absolute;
                        top: 0;
                        padding: 10px;
                        color: var(--cl-2);
                    }

                    .most-content-info {
                        position: absolute;
                        bottom: 0;
                        padding: 10px;
                    }

                    button {
                        width: 100px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        background-color: var(--cl-25);

                        i {
                            font-size: 2em;
                            color: var(--cl-26);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1233px) {
        .most-content-animes-list-option {
            .most-content-movie:nth-child(6) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1029px) {
        .most-content-animes-list-option {
            .most-content-movie:nth-child(6),
            .most-content-movie:nth-child(5) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 825px) {
        .most-content-animes-list-option {
            justify-content: space-evenly !important;

            .most-content-movie:nth-child(6),
            .most-content-movie:nth-child(5) {
                display: block;
            }
        }
    }
}

</style>
