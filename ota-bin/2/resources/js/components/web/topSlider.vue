<template>
    <v-container class="d-flex"
                 style="max-width: var(--ota-ku-max-width); padding: 20px 10px 10px 10px; align-items: center">
        <v-carousel
            hide-delimiter-background
            cycle
            show-arrows="hover"
            style="border-radius: 20px; height: var(--top-slider-height);"
        >
            <v-carousel-item
                cover
                link
            >
                <v-img
                    lazy-src="https://desu.shikimori.one/uploads/poster/animes/30240/3ecb164964d634cb2fdf2040070cc90f.jpeg"
                    src="https://desu.shikimori.one/uploads/poster/animes/30240/3ecb164964d634cb2fdf2040070cc90f.jpeg"
                    class="top-slider-anime-image"
                    cover
                    style="position: absolute; right: 0;"
                >
                </v-img>
                <v-card class="pa-2 d-flex flex-column justify-center gap-6 top-slider-anime-card" hover color="" link
                        :ripple="false"
                        style="">
                    <v-card-title class="fill-height align-end" style="font-size: 1.9em; font-weight: 600">
                        Школа строгово режима
                    </v-card-title>
                    <v-card-subtitle class="pt-0">Оценка 7.6</v-card-subtitle>
                    <v-card-text color="primary"
                                 style="width: 70%; max-height: 10em; overflow: hidden; text-overflow: ellipsis; white-space: normal; line-height: 150%; color: grey; font-family: 'Inter', sans-serif;">
                        <p>Хачимицу — элитная частная академия, известная своими строгими академическими стандартами.
                            Впервые за всю историю существования школы двери открываются и для учеников мужского пола.
                            Киёши Фуджино — главный герой истории, один из немногих «счастливчиков» Хачимицу. В первый
                            же день он узнает шокирующую для него новость: в академию поступило только пять парней,
                            включая его самого. И это при том, что девушек здесь около тысячи!
                            Казалось бы, жизнь парней академии будет «в малине», ведь они изо дня в день будут
                            находиться в окружении девушек. Однако девушки наотрез отказываются разговаривать с ними.
                            Вскоре выясняется, что причина такого поведения связана с неким подпольным студенческим
                            советом... Сумеют ли парни разоблачить тайный студсовет, угрожающий студенткам Хачимицу?
                        </p>
                    </v-card-text>
                    <v-card-actions class="pa-4">
                        <v-btn variant="tonal" :to="'anime?animeId=30240'" prepend-icon="mdi-play" ripple="lg">
                            Смотреть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-carousel-item>
            <v-carousel-item
                v-for="anime in animeList"
                :key="anime.id"
                cover
                link
            >
                <v-img
                    class="top-slider-anime-image"
                    :lazy-src="anime.poster.originalUrl"
                    :src="anime.poster.originalUrl"
                    :alt="anime.poster.alt"
                    cover
                    style="position: absolute; right: 0;"
                >

                </v-img>
                <v-card class="pa-2 d-flex flex-column justify-center top-slider-anime-card" hover color="" link
                        :ripple="false">
                    <v-card-title class="fill-height align-end" v-text="anime.russian"
                                  style="font-size: 1.9em; font-weight: 600;"></v-card-title>
                    <v-card-subtitle class="pt-0">Оценка {{ anime.score }}</v-card-subtitle>
                    <v-card-text class="top-slider-anime-cart-text"
                                 color="primary"
                                 style="">
                        <p>{{ cleanDescription(anime.description) }}</p>
                    </v-card-text>
                    <v-card-actions class="pa-4">
                        <v-btn variant="tonal" :to="'anime?animeId=' + anime.id" prepend-icon="mdi-play" ripple="lg">
                            Смотреть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
import {cleanDescription} from "@/ts/cleanDescription.ts";

export default {
    data() {
        return {
            animeList: [],
            cleanDescription,
        };
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
                                animes(season: "2024", limit: ${limit}, order: popularity, status: "released", kind: "tv") {
                                    id
                                    name
                                    russian
                                    english
                                    score
                                    poster {
                                        originalUrl
                                    }
                                    genres {
                                        id
                                        russian
                                    }
                                    description
                                }
                            }
                        `,
                    }),
                });
                if (!response.ok) {
                    this.error();
                }
                const data = await response.json();
                this.animeList = data.data.animes;
                console.log(this.animeList)
            } catch (error) {
                this.error();
            }
        },
    },
    mounted() {
        this.fetchAnimeList(5);
    }
};
</script>
<style lang="sass" scoped>

.top-slider-anime-card
    background: linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 52%, rgba(10, 10, 10, 0.4) 100%)
    min-height: var(--top-slider-height)

.top-slider-anime-image
    width: 48%

.top-slider-anime-cart-text
    width: 70%
    max-height: 10em
    overflow: hidden
    text-overflow: ellipsis
    white-space: normal
    line-height: 150%
    color: #9e9e9e
    font-family: 'Inter', sans-serif

@media screen and (max-width: 600px)
    .top-slider-anime-image
        width: 100%

    .top-slider-anime-card
        background: rgba(10, 10, 10, 0.7)

    .top-slider-anime-cart-text
        width: 100%
</style>
