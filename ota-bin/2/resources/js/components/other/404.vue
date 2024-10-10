<template>
    <section class="not-found">
        <div class="not-found-inner">
            <div class="not-found-inner-tit">
                <div class="page-404">
                    <strong class="so-big-sempai">404</strong>
                    <p class="page-not-found">Упс, кажется, вы потерялись!</p>
                    <div class="page-404-info">
                        <div class="additional-info">
                            <p>Возможно, это произошло по одной из следующих причин:</p>
                            <ul>
                                <li>Страница была удалена или перемещена.</li>
                                <li>Вы ввели неверный адрес страницы.</li>
                                <li>Временные технические проблемы. Попробуйте обновить страницу позже.</li>
                            </ul>
                            <p>Если вы уверены, что страница должна быть здесь, попробуйте:</p>
                            <ul>
                                <li>Попробуйте вернуться на предыдущую страницу, используя кнопку "Назад" в браузере.
                                </li>
                                <li>Проверьте адрес и попробуйте ввести его снова.</li>
                                <li>Перейдите на
                                    <router-link :to="'/'">главную страницу.</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="image-container-404">
                    <img :src="'/img/ts/darkness_1.png'" alt="Коносуба Даркнесс">
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import {useHead} from "@vueuse/head";

export default {
    mounted() {
        useHead({
            title: "404 Страница не найдено",
        })
    }
}
</script>

<style lang="scss" scoped>
.not-found {
    width: 100%;

    &-inner {
        width: 100%;
        padding: 0 10px;
    }

    &-inner-tit {
        margin: 0 auto;
        display: flex;
        position: relative;
        height: 100vh;
        max-width: var(--ota-ku-max-width);
        padding: 50px 0;
    }


    .page-404 {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        strong {
            font-size: 10em;
            width: 100%;
            text-align: center;
        }

        .page-not-found {
            font-size: 3em;
        }

        &-info {
            padding: 10px 0;

            .additional-info {
                width: 100%;

                ul {
                    margin: 10px 0 10px 20px;
                    font-size: 0.9em;
                    color: #b9b9b9;
                    list-style-type: circle;

                    li a {
                        color: #2786e4;
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .image-container-404 {
        width: 40%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            width: 100%;
            height: 85%;
            position: absolute;
            object-fit: contain;
            object-position: center;
        }
    }
}

@media screen and (max-width: 1024px) {
    .not-found-inner-tit {
        flex-direction: column;

        .page-404 {
            width: 100%;
        }
    }

    .image-container-404 {
        display: none;
    }
}

@media screen and (max-width: 768px) {

    .not-found .page-404 {

        .page-not-found {
            font-size: 1.5em;
        }

        .so-big-sempai {
            font-size: 10em;
        }
    }
}
</style>
