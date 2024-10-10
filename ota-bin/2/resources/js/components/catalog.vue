<template>
    <primary-header></primary-header>
    <Welcome></Welcome>
    <section class="ad-container">
        <div class="ad-container-inner">
            <div id="yandex_rtb_R-A-7609325-3"></div>
        </div>
    </section>
    <Search></Search>
    <main class="main">
        <div class="main-inner">
            <div class="main-tit">
                <AnimeCatalog></AnimeCatalog>
                <Filter></Filter>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>

<script>
import { useHead } from "@vueuse/head";

import PrimaryHeader from "@/components/web/primaryHeader.vue";
import Search from "@/components/web/catalog/search.vue";
import AnimeCatalog from "@/components/web/catalog/animeCatalog.vue";
import Filter from "@/components/web/filter.vue";
import Footer from '@/components/web/footer.vue';
import Welcome from "@/components/web/catalog/welcome.vue";

export default {
    components: {
        Welcome,
        Filter,
        AnimeCatalog,
        PrimaryHeader,
        Footer,
        Search,
    },
    mounted() {
        window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
                "blockId": "R-A-7609325-3",
                "renderTo": "yandex_rtb_R-A-7609325-3"
            })
        })
        console.log('catalog Mounted!');
        window.scrollTo({top: 0});
        useHead({
            title: "Лучший aниме каталог",
            meta: [
                {name: 'description', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме'},
                {
                    name: 'keywords',
                    content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'
                },
                {name: 'subject', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме'},
                {name: 'language', content: 'RU'},
                {name: 'abstract', content: 'Смотреть лучшие аниме на русском'},
                {
                    name: 'topic',
                    content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'
                },
                {name: 'summary', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://ota-ku.ru'},
                {property: 'og:title', content: 'Лучший aниме каталог'},
                {property: 'og:description', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме'},
                {property: 'og:image', content: 'https://ota-ku.ru/favicon.ico'},
                {property: 'og:locale', content: 'ru_RU'},
                {property: 'og:site:name', content: 'ota-ku'}
            ]
        });
    }
}
</script>

<style lang="scss" scoped>
</style>
