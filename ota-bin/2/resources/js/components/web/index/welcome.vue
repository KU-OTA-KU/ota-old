<template>
    <section class="what-is-anime-container">
        <div class="what-is-anime-container-inner">
            <div class="what-is-anime-container-tit">
                <div class="what-is-anime-main">
                    <h1>OTA-KU – Лучший портал для просмотра аниме!</h1>
                    <div class="what-is-cont-1">
                        <span>Желаешь насладиться просмотром лучших аниме онлайн совершенно бесплатно на русском языке? У
                            нас ты найдешь огромный архив самых популярных аниме с качественной озвучкой! Погрузись в
                            захватывающие приключения, увлекательных персонажей и захватывающие сюжеты, не отрываясь от
                            экрана. Мы предлагаем лишь самые лучшие аниме в HD качестве, чтобы ты мог полностью
                            погрузиться в мир японской анимации. Забудь о мучительном поиске по различным сайтам – наш
                            портал собрал все аниме на одной платформе! Присоединяйся к нам прямо сейчас и окунись в
                            увлекательный мир аниме без каких-либо ограничений!</span>
                    </div>
                </div>
                <div class="what-is-anime-other">
                    <img
                        v-lazy="'/img/ts/L.png'"
                        alt="главная аниме тян в ota-ku.ru">
                    <div class="container-info">
                        <h3>Л Лоулайт</h3>
                        <span>Аниме: <router-link to="/anime?animeId=1535" class="container-link raco-secondary">Тетрадь смерти</router-link></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
.what-is-anime-container {
    width: 100%;


    .what-is-anime-container-inner {
        padding: 0 10px;
        width: 100%;
    }

    .what-is-anime-container-tit {
        max-width: var(--ota-ku-max-width);
        margin: 0 auto;
        width: 100%;
        display: flex;
        background-color: var(--cl-16);
        border-radius: 10px;
        padding: 10px 20px;
        justify-content: space-between;
    }

    .what-is-anime-container-tit h1 {
        margin-bottom: 5px;
    }

    .what-is-anime-container-tit h1 a {
        color: var(--col-1);
        text-decoration: underline;
        transition: color 0.2s ease-in-out;
    }

    .what-is-anime-container-tit h1 a:hover {
        color: var(--col-2);
    }

    .what-is-anime-container-tit .what-is-cont-1 {
        color: var(--cl-11);
    }

    .what-is-anime-main {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .what-is-anime-other {
        width: 25%;
        position: relative;
        user-select: none;
        cursor: pointer;

        &:hover {
            .container-info h3 {
                color: var(--cl-7);
            }
        }

        .container-info {
            position: absolute;
            width: 100%;
            text-align: right;
            bottom: 0;
            background-color: #161616;
            box-shadow: 0px -25px 10px 0px rgba(22, 22, 22, 0.5);
            padding: 15px 15px;

            h3 {
                transition: color 0.2s ease-in-out;
            }

            span {
                justify-content: flex-end;
                margin-top: 5px;
                display: flex;
                gap: 5px;
            }
        }

        img {
            height: 100%;
            width: 100%;
            object-position: center;
            pointer-events: none;
            user-select: none;
        }
    }

    @media screen and (max-width: 1024px) {
        .what-is-anime-main {
            width: 70%;

        }

        .what-is-anime-other {
            width: 30%;
        }
    }

    @media screen and (max-width: 768px) {
        .what-is-anime-main {
            width: 100%;
        }

        .what-is-anime-other {
            display: none;
        }
    }
}

</style>
