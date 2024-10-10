<template>
    <section class="characters-list" v-if="!_ANIME_CHARACTER_ROLES_">
        <div class="characters-list-inner">
                <div class="characters-list-title">
                    <h2>Персонажи</h2>
                    <span>Персонажи из аниме</span>
                </div>
                <div class="characters-list-container">
                    <div class="character-content">
                        <div class="character-content-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                        <p class="skeleton-bg skeleton-height skeleton-cell-slide skeleton-border-radius"></p>
                    </div>
                    <div class="character-content">
                        <div class="character-content-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                        <p class="skeleton-bg skeleton-height skeleton-cell-slide skeleton-border-radius"></p>
                    </div>
                    <div class="character-content">
                        <div class="character-content-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                        <p class="skeleton-bg skeleton-height skeleton-cell-slide skeleton-border-radius"></p>
                    </div>
                    <div class="character-content">
                        <div class="character-content-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                        <p class="skeleton-bg skeleton-height skeleton-cell-slide skeleton-border-radius"></p>
                    </div>
                    <div class="character-content">
                        <div class="character-content-image skeleton-cell-slide skeleton-bg skeleton-border-radius"></div>
                        <p class="skeleton-bg skeleton-height skeleton-cell-slide skeleton-border-radius"></p>
                    </div>
                </div>
            </div>
    </section>
    <section class="characters-list" v-if="_ANIME_CHARACTER_ROLES_">
        <div class="characters-list-inner">
            <div class="characters-list-title">
                <h2>Персонажи</h2>
                <span>Главные герои и персонажи из аниме</span>
            </div>
            <div class="characters-list-container">
                <div class="character-content" v-for="character in _ANIME_CHARACTER_ROLES_" :key="character.id">
                    <div class="character-content-image">
                        <img v-lazy="character.character.poster.mainUrl" :alt="character.character.name">
                    </div>
                    <p style="background: transparent">{{ character.character.russian }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            _ANIME_RUSSIAN_NAME_: null,
            _ANIME_CHARACTER_ROLES_: null,
        };
    },
    methods: {
        main() {
            const storedData = sessionStorage.getItem("CurrentAnime");
            if (storedData) {
                this._ANIME_RUSSIAN_NAME_ = JSON.parse(storedData)[0].russian;
                this._ANIME_CHARACTER_ROLES_ = JSON.parse(storedData)[0].characterRoles.filter(role => role.rolesEn.includes("Main"));
            }
        },
    }
};
</script>

<style lang="scss">
.characters-list {
    width: 100%;
    padding: 0 10px;
}

.characters-list .characters-list-inner {
    width: 100%;
    max-width: var(--ota-ku-max-width);
    margin: 0 auto;
}

.characters-list-tit .characters-list-title h6 {
    font-weight: normal;
    color: var(--characters-anime-title-h6-color);
}

.characters-list-container {
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(9, minmax(80px, 1fr));
    gap: 10px;
    position: relative;

    @media screen and (max-width: 1024px) {
        & {
            grid-template-columns: repeat(7, minmax(80px, 1fr));
        }
    }

    @media screen and (max-width: 768px) {
        & {
            grid-template-columns: repeat(4, minmax(80px, 1fr));
        }
    }
}

.characters-list-container .character-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.character-content .character-content-image {
    width: 100%;
    aspect-ratio: 1 / 1.5;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.character-content .character-content-image img {
    width: 100%;
    position: absolute;
    height: 100%;
    pointer-events: none;
}

.character-content p {
    font-size: 0.9em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
