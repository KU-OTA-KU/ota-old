<template>
    <section class="anime-description" v-if="!_ANIME_DESCRIPTION_">
        <div class="anime-description-inner">
            <div class="anime-description-tit skeleton-cell-slide skeleton-bg skeleton-height-large skeleton-weight">

            </div>
        </div>
    </section>
    <section class="anime-description" v-if="_ANIME_DESCRIPTION_">
        <div class="anime-description-inner">
            <div class="anime-description-tit">
                <span v-if="_ANIME_DESCRIPTION_" >{{ _ANIME_DESCRIPTION_ }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import { cleanDescription } from "@/ts/cleanDescription.ts";
export  default {
    data() {
       return {
           _ANIME_DESCRIPTION_: null,
           cleanDescription,
       };
    },
    methods: {
        main() {
            const storedData = sessionStorage.getItem("CurrentAnime");
            if (storedData) {
                this._ANIME_DESCRIPTION_ = this.cleanDescription(JSON.parse(storedData)[0].description);
                console.log(this._ANIME_DESCRIPTION_)
            }
        },
    }
};
</script>

<style lang="scss">
.anime-description {
    width: 100%;
}

.anime-description .anime-description-inner {
    width: 100%;
    padding: 0 10px;
}

.anime-description .anime-description-inner .anime-description-tit {
    max-width: var(--ota-ku-max-width);
    width: 100%;
    margin: 0 auto;
    color: var(--anime-description-font-color);
}

.anime-description-tit p {
    user-select: auto;
}
</style>
