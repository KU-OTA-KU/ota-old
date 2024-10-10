<template>
    <section class="main-filter">
        <div class="filter-clear">
            <div class="filter-title">
                <i class="fa-solid fa-sliders"></i>
                <p>Фильтры</p>
            </div>
            <button @click="clearFilters" id="clear-button"
                    class="pd-small raco-awsome-icon raco-icon-right raco-primary">
                <i class="fa-solid fa-xmark"></i>
                Збросить
            </button>
            <button @click="closeFilter" id="close-button"
                    class="pd-small raco-awsome-icon raco-icon-right raco-primary">
                <i class="fa-solid fa-xmark"></i>
                Закрыть
            </button>
        </div>
        <div class="filter-selector">
            <form @submit.prevent="submitFilters" method="GET">
                <div class="filter-fl-genre filter-box">
                    <label for="status">Статус</label>
                    <span>Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов:</span>
                    <select name="status" id="status-selector" multiple>
                        <option value="anons">Анонсировано</option>
                        <option value="ongoing">Сейчас выходит</option>
                        <option value="released">Вышедшее</option>
                    </select>
                    <label for="kind">Тип</label>
                    <span>Пожалуйста, выберите один или несколько типов аниме из списка:</span>
                    <select name="kind" id="kind-selector" multiple>
                        <option value="tv">ТВ Сериал</option>
                        <option value="ova">OVA</option>
                        <option value="movie">Фильм</option>
                        <option value="ona">ONA</option>
                    </select>
                    <label for="genre">Жанры</label>
                    <span>Пожалуйста, укажите жанры для фильтрации наших релизов:</span>
                    <select id="genre-selector" name="genre" multiple>
                        <option value="5">Авангард</option>
                        <option value="543">Гурман</option>
                        <option value="8">Драма</option>
                        <option value="4">Комедия</option>
                        <option value="36">Повседневность</option>
                        <option value="2">Приключения</option>
                        <option value="22">Романтика</option>
                        <option value="37">Сверхъестественное</option>
                        <option value="30">Спорт</option>
                        <option value="7">Тайна</option>
                        <option value="117">Триллер</option>
                        <option value="14">Ужасы</option>
                        <option value="24">Фантастика</option>
                        <option value="10">Фэнтези</option>
                        <option value="1">Экшен</option>
                        <option value="9">Этти</option>
                        <option value="143">Антропоморфизм</option>
                        <option value="119">CGDCT</option>
                        <option value="17">Боевые искусства</option>
                        <option value="32">Вампиры</option>
                        <option value="104">Взрослые персонажи</option>
                        <option value="103">Видеоигры</option>
                        <option value="38">Военное</option>
                        <option value="141">Выживание</option>
                        <option value="35">Гарем</option>
                        <option value="3">Гонки</option>
                        <option value="112">Гэг-юмор</option>
                        <option value="39">Детектив</option>
                        <option value="105">Жесткость</option>
                        <option value="134">Забота о детях</option>
                        <option value="146">Игра с высокими ставками</option>
                        <option value="145">Идолы (жен.)</option>
                        <option value="150">Идолы (муж.)</option>
                        <option value="108">Изобразительное искусство</option>
                        <option value="142">Исполнительское искусство</option>
                        <option value="13">Исторический</option>
                        <option value="130">Исэкай</option>
                        <option value="140">Иясикэй</option>
                        <option value="102">Командный спорт</option>
                        <option value="29">Космос</option>
                        <option value="144">Кроссдрессинг</option>
                        <option value="137">Культура отаку</option>
                        <option value="107">Любовный многоугольник</option>
                        <option value="135">Магическая смена пола</option>
                        <option value="124">Махо-сёдзё</option>
                        <option value="147">Медицина</option>
                        <option value="18">Меха</option>
                        <option value="6">Мифология</option>
                        <option value="19">Музыка</option>
                        <option value="149">Образовательное</option>
                        <option value="138">Организованная преступность</option>
                        <option value="20">Пародия</option>
                        <option value="148">Питомцы</option>
                        <option value="40">Психологическое</option>
                        <option value="111">Путишествие во времени</option>
                        <option value="139">Работа</option>
                        <option value="125">Реверс-гарем</option>
                        <option value="106">Реинкарнация</option>
                        <option value="151">Романтический подтекст</option>
                        <option value="21">Самураи</option>
                        <option value="118">Спортивные единоборства</option>
                        <option value="11">Стратегические игры</option>
                        <option value="31">Супер сила</option>
                        <option value="114">Удостроено наград</option>
                        <option value="131">Хулиганы</option>
                        <option value="23">Школа</option>
                        <option value="136">Шоу бизнес</option>
                    </select>
                    <label for="sort-selector">Cортировка</label>
                    <span>Пожалуйста, выберите предпочтительный порядок сортировки из списка опций:</span>
                    <select name="sort" id="sort-selector" multiple>
                        <option value="ranked">По рейтингу</option>
                        <option value="popularity">По Популярности</option>
                        <option value="name">По алфавиту</option>
                        <option value="aired_on">По дате выхода</option>
                        <option value="status">Случайно</option>
                        <option value="episodes">По количеству Серии</option>
                        <option value="id">По ID</option>
                    </select>
                    <label for="season-genre">Сезон</label>
                    <span>Пожалуйста, выберите желаемый сезон из предложенных вариантов:</span>
                    <select name="season" id="season-selector" multiple>
                        <option value="2024">2024 год</option>
                        <option value="2023">2023 год</option>
                        <option value="2000_2024">2000-2024</option>
                        <option value="2020_2024">2020-2024</option>
                        <option value="2021_2022">2021-2022</option>
                        <option value="2016_2020">2016-2020</option>
                        <option value="2010_2015">2010-2015</option>
                        <option value="2000_2009">2000-2009</option>
                        <option value="1980_1999">1999е годы</option>
                        <option value="1970_1980">1980е годы</option>
                        <option value="1968_1999">Динозавры 1968г</option>
                    </select>
                    <label for="rating-selector">Оценка</label>
                    <span>Выберите параметры для сортировки аниме по оценкам:</span>
                    <select name="rating" id="rating-selector" multiple>
                        <option value="none">Без оценки</option>
                        <option value="g">Все оценки</option>
                        <option value="pg">PG - для детей</option>
                        <option value="pg_13">PG_13 - для детей 13 лет</option>
                        <option value="r">R - для подростков 17+</option>
                        <option value="r_plus">R_plus - умеренная ногота</option>
                    </select>
                </div>
                <div class="submit">
                    <button type="submit" class="raco-primary pd-normal">Применить</button>
                </div>
            </form>
        </div>
    </section>
    <section class="filt-button">
        <button @click="openFilter" class="raco-primary pd-normal raco-awsome-icon"><i class="fa-solid fa-sliders"
                                                                                       aria-hidden="true"></i>Фильтры
        </button>
    </section>
</template>

<script>
import {SingleSelectTag} from "v-selectui/js/singleSelect.js";
import {MultiSelectTag} from "v-selectui/js/multiSelect.js";
import "v-selectui/css/singleSelect.css";
import "v-selectui/css/multiSelect.css";

export default {
    data() {
        return {
            MultiSelectTag,
            SingleSelectTag,
        };
    },
    mounted() {
        if (document.querySelectorAll(".main-filter .mult-select-tag").length > 0 || document.querySelector(".main-filter .select-tag") === null) {
            const multSelectTags = document.querySelectorAll(".main-filter .mult-select-tag");
            const selectTags = document.querySelectorAll(".main-filter .select-tag");

            if (multSelectTags) {
                multSelectTags.forEach(tag => tag.parentNode.removeChild(tag));
            }

            if (selectTags) {
                selectTags.forEach(tag => tag.parentNode.removeChild(tag));
            }
        }
        new SingleSelectTag("status-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });

        new MultiSelectTag("kind-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });

        new MultiSelectTag("genre-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });

        new SingleSelectTag("sort-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });

        new SingleSelectTag("season-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });

        new SingleSelectTag("rating-selector", {
            rounded: true,
            placeholder: "Поиск...",
        });
    },
    methods: {
        clearFilters() {
            this.$router.push('/catalog');
        },
        closeFilter() {
            let filterBox = document.querySelector(".main-filter");
            let body = document.body;
            anime({
                targets: filterBox,
                left: [0, "-100"],
                opacity: [1, 0],
                duration: 300,
                easing: "easeInOutExpo",
                complete: function () {
                    body.style.overflow = "auto";
                    filterBox.style.display = "none";
                },
            });
        },
        openFilter() {
            let filterBox = document.querySelector(".main-filter");
            let body = document.body;
            anime({
                targets: filterBox,
                left: ["-100%", 0],
                opacity: [0, 1],
                duration: 300,
                easing: "easeInOutExpo",
                begin: function () {
                    body.style.overflow = "hidden";
                    filterBox.style.display = "block";
                },
            });
        },
        submitFilters() {
            let formData = new FormData(document.querySelector('.main-filter form'));
            let queryParams = new URLSearchParams(formData);

            let catalogUrl = `/catalog?${queryParams}`;
            this.$router.push(catalogUrl);
        },
    },
};
</script>

<style lang="scss" scoped>
/* filter */
.main-filter {
    min-width: 350px;
    width: 100%;
    max-width: 350px;
    top: 78px;
    position: sticky;
    background-color: var(--cl-10);
    padding: 20px 10px;
    border-radius: 20px;
}

.filter-clear {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#close-button {
    display: none;
    white-space: nowrap;
}

.main-filter .filter-title {
    display: flex;
    align-items: center;
    gap: 5px;
}

.filter-title i {
    font-size: 1.1em;
}

.filter-selector {
    margin-top: 10px;
}

.filter-selector label {
    font-size: 1em;
    padding: 5px 0 2px 0;
    width: 100%;
    display: block;
}

.filter-box {
    height: 100%;
    padding: 10px;
    background-color: var(--filter-filter-genre-box-color);
}

.filter-box span {
    padding-bottom: 1px;
    display: block;
    color: var(--cl-15)
}

.tags-checkbox {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 10px 0;
}

.tags-checkbox::-webkit-scrollbar {
    width: 5px;
}

.tags-checkbox::-webkit-scrollbar-thumb {
    background-color: var(--tags-checkbox-scrool-thumb);
    border-radius: 5px;
}

.tags-checkbox::-webkit-scrollbar-track {
    background-color: var(--filter-filter-scrollbar-color-track);
    border-radius: 5px;
}

.tags-checkbox::-webkit-scrollbar-thumb:hover {
    background-color: var(--filter-filter-scrollbar-color-hover);
}

.tags-checkbox label {
    margin: 5px 0;
}

.filter-selector .submit button {
    width: 100%;
}


.filt-button {
    display: none;
    position: sticky;
    top: 70px;
    width: 100%;
    z-index: 100;
}

.filt-button button {
    width: 100%;
    border-radius: 30px;
}

.submit {
    padding: 0 10px;
}

.filter-query {
    padding: 10px;
    width: 100%;
    z-index: 100;
    background-color: var(--filter-filter-query-background-color);
    margin-top: 10px;
}

.filter-title {
    width: 100%;
}

.filter-query .filter-item:nth-child(1) {
    margin-top: 10px;
    padding: 0 !important;
}

.filter-query .filter-item {
    padding-top: 5px;
}

@media screen and (max-width: 1024px) {

    .main-filter {
        display: none;
    }

    .main-filter {
        display: none;
        position: fixed;
        top: 0;
        max-width: 350px;
        width: 100%;
        height: 100dvh;
        z-index: 1001;
        padding: 20px;
        overflow: hidden;
        border-radius: 0;
    }

    .filter-selector {
        overflow: auto;
        height: 100%;
        max-width: none;
    }

    #clear-button {
        display: none;
    }

    #close-button {
        display: block;
    }

    .filter-open {
        left: 0;
        display: block;
    }

    .no-scroll {
        overflow: hidden !important;
    }

    .submit {
        margin-bottom: 50px;
    }

    .filt-button {
        display: flex;
    }
}

@media screen and (max-width: 425px) {
    .main-filter {
        width: 100%;
        max-width: 100%;
    }
}
</style>
