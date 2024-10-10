<template>
    <header>
        <div class="header-inner">
            <div class="header-logo">
                <router-link to="/">
                    <img src="/img/ota-ku/ota-ku.webp" alt="Логотип Ota Ku - лучший аниме" id="ota-ku-best-anime-logo"/>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: var(--cl-4);
    font-size: 1em;
    position: sticky;
    top: 0;
    z-index: 998;
    padding: 15px 5px;

    .header-inner {
        max-width: var(--ota-ku-max-width);
        width: 100%;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
    }

    .header-logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;

        a {
            display: flex;
        }

        img {
            height: 35px;
            pointer-events: none;
            user-select: none;
        }
    }
}
</style>
