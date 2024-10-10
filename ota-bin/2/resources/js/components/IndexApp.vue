<template>
    <primary-header></primary-header>
    <v-layout>
        <v-main>
            <top-slider></top-slider>
            <!--<welcome></welcome>-->
            <!--<top-genres></top-genres>-->
            <most-anime-list></most-anime-list>
            <YoutubeVideos></YoutubeVideos>
            <Calendar></Calendar>
            <Feedback></Feedback>
        </v-main>
    </v-layout>
    <Footer></Footer>
</template>

<script>
import {useHead} from "@vueuse/head";

import TopSlider from './web/topSlider.vue';
import PrimaryHeader from './web/primaryHeader.vue';
import TopGenres from './web/index/topGenres.vue';
import MostAnimeList from './web/mostAnimes.vue';
import Content from './web/index/animeList.vue';
import Filter from './web/filter.vue';
import YoutubeVideos from "@/components/web/index/youtube.vue";
import Calendar from "@/components/web/index/calendar.vue";
import Feedback from "@/components/web/index/feedback.vue";
import Welcome from './web/index/welcome.vue';
import Footer from './web/footer.vue';

export default {
    components: {
        PrimaryHeader,
        TopSlider,
        TopGenres,
        MostAnimeList,
        Content,
        Filter,
        YoutubeVideos,
        Calendar,
        Feedback,
        Welcome,
        Footer,
    },
    mounted() {
        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                "blockId": "R-A-7609325-1",
                "renderTo": "yandex_rtb_R-A-7609325-1"
            })
        })

        sessionStorage.removeItem("CurrentAnime");
        console.log('Index Mounted!');
        window.scrollTo({top: 0});
        useHead({
            title: "Смотреть аниме онлайн бесплатно в хорошем качестве",
            meta: [
                {
                    name: 'description',
                    content: 'Хочешь смотреть лучшие аниме онлайн бесплатно на русском? У нас ты найдешь огромную базу самых популярных аниме с качественной русской озвучкой! Наслаждайся захватывающими приключениями, яркими персонажами и захватывающим сюжетом, не отходя от экрана. Мы предлагаем только лучшие аниме в HD качестве, чтобы ты мог полностью погрузиться в мир японской анимации. Забудь о поиске по разным сайтам – у нас все аниме собраны на одной платформе! Присоединяйся к нам прямо сейчас и окунись в увлекательный мир аниме без каких-либо ограничений!'
                },
                {
                    name: 'keywords',
                    content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'
                },
                {name: 'subject', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!'},
                {name: 'language', content: 'RU'},
                {name: 'abstract', content: 'Смотреть лучшие аниме на русском'},
                {
                    name: 'topic',
                    content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'
                },
                {name: 'summary', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://ota-ku.ru'},
                {property: 'og:title', content: 'ota-ku Смотреть лучшие аниме онлайн бесплатно на русском!'},
                {
                    property: 'og:description',
                    content: 'Хочешь смотреть лучшие аниме онлайн бесплатно на русском? У нас ты найдешь огромную базу самых популярных аниме с качественной русской озвучкой!'
                },
                {property: 'og:image', content: 'https://ota-ku.ru/favicon.ico'},
                {property: 'og:locale', content: 'ru_RU'},
                {property: 'og:site:name', content: 'ota-ku'}
            ]
        });
    },
}
</script>

<style lang="scss" scoped></style>
