<template>
    <section class="tech-error">
        <div class="tech-error-inner">
            <div class="tech-error-icon">
                <router-link to="/"><i class="fa-solid fa-gear"></i></router-link>
            </div>
            <div class="tech-error-info">
                <strong>УПС!</strong>
                <span>На данный момент наш сайт находится на техническом обслуживании, поэтому некоторые функции могут быть временно недоступны. Мы прилагаем все усилия для решения проблемы и возвращения сервиса к нормальной работе в самое ближайшее время.</span>
                <span>Мы приносим свои извинения за возможные неудобства и благодарим вас за ваше понимание и терпение. Пожалуйста, оставайтесь с нами и следите за обновлениями.</span>
            </div>
        </div>
    </section>
</template>

<script>
import {useHead} from "@vueuse/head";

export default {
    mounted() {
        useHead({
            title: "Техническое Обслуживание",
        })
    }
}
</script>

<style scoped lang="scss">
.tech-error {
    width: 100%;
    padding: 100px 10px 0 10px;
    height: 100vh;
    display: flex;
    justify-content: center;

    &-inner {
        max-width: 500px;
        width: 100%;

        .tech-error-icon {
            display: flex;
            justify-content: center;

            i {
                font-size: 20em;
                color: var(--cl-8);
                opacity: 0.3;
                animation: rotate 3.5s infinite linear;
                cursor: pointer;
                transition: opacity 0.2s ease-in-out;

                &:hover {
                    opacity: 0.8;
                }
            }
        }

        .tech-error-info {
            text-align: center;
            display: flex;
            flex-direction: column;

            strong {
                margin: 20px;
                font-size: 7em;
                line-height: 100%;
                text-align: center;
            }

            span {
                margin-bottom: 20px;
            }
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
