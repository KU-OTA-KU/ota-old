<template>
    <section class="feedback">
        <div class="feedback-inner">
            <div class="feedback-container-info">
                <div class="feedback-info-title">
                    <span>Подпишитесь на нашу рассылку и первыми узнавайте новости.</span>
                    <h2>Не упусти возможность насладиться захватывающим и потрясающим миром аниме.</h2>
                </div>
                <span>Оставьте свой e-mail, чтобы всегда быть в курсе последних новостей, специальных предложений и эксклюзивных обновлений из увлекательного мира аниме. Получайте информацию о новых релизах, событиях и многом другом первыми!</span>
                <form action="">
                    <input type="email" class="pd-large" placeholder="Введите ваш адрес электронной почты">
                    <button type="submit" class="pd-large raco-primary"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
            <div class="feedback-container-image">
                <img v-lazy="'/img/ts/kitagawa.png'" alt="">
                <div class="container-info">
                    <h3>Марин Китагава</h3>
                    <span>Аниме: <router-link to="/anime?animeId=48736" class="container-link raco-secondary raco-awsome-icon">Эта фарфоровая кукла влюбилась</router-link></span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
</script>
<style lang="scss" scoped>
.feedback {

    width: 100%;
    padding: 10px;

    &-inner {
        max-width: var(--ota-ku-max-width);
        margin: 0 auto;
        background-color: var(--cl-10);
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        .feedback-container-info {
            width: 65%;
            padding: 50px 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
            justify-content: center;

            form {
                display: flex;
                overflow: hidden;
                border-radius: 10px;

                input {
                    outline: none;
                    border: none;
                    width: 100%;
                    background-color: var(--cl-2);
                    color: var(--cl-1);
                }
            }
        }

        .feedback-container-image {
            width: 30%;
            position: relative;
            cursor: pointer;

            &:hover {
                .container-info h3 {
                    color: var(--cl-7);
                }
            }

            .container-info {
                position: absolute;
                width: 100%;
                background-color: var(--cl-10);
                bottom: 0;
                padding: 10px 20px;
                text-align: right;
                box-shadow: 0px -25px 10px 0px var(--cl-25);

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
                z-index: 1;
                width: 100%;
                object-fit: cover;
                height: 100%;
                pointer-events: none;
                user-select: none;
                -webkit-user-select: none;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .feedback-container-image {
        display: none;
    }

    .feedback-container-info {
        width: 100% !important;
        padding: 0 !important;
    }
}
</style>
