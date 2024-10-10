<template>
    <section class="player" name="watch">
        <div class="player-inner">
            <div class="player-tit">
                <div class="player-container">
                    <div id="kodik-player">
                        <iframe
                            :src="'//kodik.cc/find-player?shikimoriID=' + currentAnime + '&prioritizeTranslations=[' + currentAnimeVoice + ']&blockInCountries=turkey,azerbadjan&types=anime,anime-serial'"
                            width="100%" height="100%" frameborder="0" allowfullscreen
                            allow="autoplay *; fullscreen *"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
    data() {
        return {
            currentAnime: '',
            currentAnimeVoice: '',
            VueCookies,
        };
    },
    methods: {
        fetchData() {
            this.currentAnime = this.$route.query.animeId;
            this.currentAnimeVoice = parseInt(this.VueCookies.get('selectedVoice')) || null;
        },
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<style lang="scss" scoped>
.player {
    background-color: var(--player-background-color);
    width: 100%;
}

.player-inner {
    width: 100%;
    padding: 0 10px;
}

.player .player-tit {
    max-width: var(--ota-ku-max-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 0;
}

.player-tit .player-container {
    width: 100%;
    aspect-ratio: 177 / 100;
    border-radius: 10px;
    overflow: hidden;
}

#kodik-player {
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--cl-10);
    border: 1px solid var(--cl-10);
}

#kodik-player iframe {
    position: absolute;
    z-index: 1;
}

@media screen and (max-width: 1024px) {
    .player-container {
        width: 100% !important;
    }

    .player-tit {
        flex-direction: column !important;
        gap: 10px !important;
    }

    .player-right-panel {
        width: 100% !important;
    }

    .player-right-panel-content {
        height: 200px;
    }
}

@media screen and (max-width: 768px) {
    .player {
        margin: 20px 0;
    }

}

@media screen and (max-width: 425px) {
}
</style>
