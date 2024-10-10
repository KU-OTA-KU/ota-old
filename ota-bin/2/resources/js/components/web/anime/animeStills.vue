<template>
    <section class="anime-stills" v-if="_ANIME_SCREENSHOTS_.length === 0">
        <div class="anime-stills-inner">
            <div class="anime-stills-tit">
                <div class="anime-stills-title">
                    <h2>Кадры</h2>
                    <h6>Кадры из Аниме {{ _ANIME_RUSSIAN_NAME_ }}</h6>
                </div>
            </div>
            <div class="anime-stills-container">
                <div class="anime-stills-content skeleton-cell-slide skeleton-bg"></div>
                <div class="anime-stills-content skeleton-cell-slide skeleton-bg"></div>
                <div class="anime-stills-content skeleton-cell-slide skeleton-bg"></div>
                <div class="anime-stills-content skeleton-cell-slide skeleton-bg"></div>
            </div>
        </div>
    </section>
    <section class="anime-stills" v-if="_ANIME_SCREENSHOTS_.length !== 0">
        <div class="anime-stills-inner">
            <div class="anime-stills-title">
                <h2>Кадры</h2>
                <span>Топ кадры и скриншоты из аниме</span>
            </div>
            <div class="anime-stills-container">
                <div class="anime-stills-content"><img v-lazy="_ANIME_SCREENSHOTS_[0].x332Url"
                                                       :alt="_ANIME_RUSSIAN_NAME_ + 'Кадр из аниме'"></div>
                <div class="anime-stills-content"><img v-lazy="_ANIME_SCREENSHOTS_[1].x332Url"
                                                       :alt="_ANIME_RUSSIAN_NAME_ + 'Кадр из аниме'"></div>
                <div class="anime-stills-content"><img v-lazy="_ANIME_SCREENSHOTS_[2].x332Url"
                                                       :alt="_ANIME_RUSSIAN_NAME_ + 'Кадр из аниме'"></div>
                <div class="anime-stills-content"><img v-lazy="_ANIME_SCREENSHOTS_[3].x332Url"
                                                       :alt="_ANIME_RUSSIAN_NAME_ + 'Кадр из аниме'"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            _ANIME_RUSSIAN_NAME_: null,
            _ANIME_SCREENSHOTS_: [],
        };
    },
    methods: {
        main() {
            const storedData = sessionStorage.getItem("CurrentAnime");
            if (storedData) {
                this._ANIME_SCREENSHOTS_ = JSON.parse(storedData)[0].screenshots.slice(0, 4);
                this._ANIME_RUSSIAN_NAME_ = JSON.parse(storedData)[0].russian;
            }
        }
    }
};
</script>
<style lang="scss">
.anime-stills {
    width: 100%;
    padding: 0 10px;
}

.anime-stills .anime-stills-inner {
    width: 100%;
    margin: 0 auto;
    max-width: var(--ota-ku-max-width);
}

.anime-stills-content {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1 / 0.60;
    overflow: hidden;
    position: relative;
}

.anime-stills-content img {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    pointer-events: none;
}

.anime-stills-container {
    max-width: var(--ota-ku-max-width);
    width: 100%;
    margin: 10px auto 0;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
}

@media screen and (max-width: 768px) {
    .anime-stills-container {
        grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    }
}


@media screen and (max-width: 425px) {
    .anime-stills-container {
        gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    }

    .anime-stills-title h2 {
        display: none;
    }

    .anime-stills-title h6 {
        text-align: center;
    }
}
</style>
