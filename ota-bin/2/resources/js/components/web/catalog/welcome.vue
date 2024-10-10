<template>
    <section class="what-is-anime-container">
        <div class="what-is-anime-container-inner">
            <div class="what-is-anime-container-tit">
                <div class="what-is-anime-main">
                    <h1>Добро пожаловать в самый большой каталог аниме!</h1>
                    <div class="what-is-cont-1">
                        <span>Здесь ты можешь погрузиться в захватывающий мир аниме. Мы собрали для тебя подробные описания, рейтинги, отзывы и рекомендации по каждому аниме. Наш каталог включает в себя как популярные хиты, так и скрытые жемчужины, которые обязательно стоит посмотреть. На нашем сайте ты найдёшь детализированные обзоры и аналитику для каждого аниме, чтобы помочь тебе выбрать, что посмотреть дальше. Мы также предлагаем обширные списки персонажей и их биографии, чтобы ты мог лучше понять и полюбить своих любимых героев. Кроме того, у нас есть информация о создателях аниме, режиссёрах и студиях, стоящих за этими удивительными произведениями. Наши рекомендации помогут тебе открыть новые аниме, которые соответствуют твоим вкусам и интересам. Не упусти шанс познакомиться с уникальными произведениями, которые могут стать твоими новыми фаворитами. Мы гордимся тем, что можем предложить тебе доступ к такому богатому и разнообразному миру аниме.</span>
                    </div>
                </div>
                <div class="what-is-anime-other">
                    <img
                        v-lazy="'/img/ts/akane.png'"
                        alt="главная аниме тян в ota-ku.ru">
                    <div class="container-info">
                        <h3>Хоодзи Аканэ</h3>
                        <span>Аниме: <router-link to="/anime?animeId=52973" class="container-link raco-secondary">Терраса кафе богинь</router-link></span>
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
