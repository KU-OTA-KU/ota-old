<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$status = $_GET['status'] ?? [];
$kind = $_GET['kind'] ?? [];
$sort = $_GET['sort'] ?? '';
$season = $_GET['season'] ?? '';
$rating = $_GET['rating'] ?? '';
$genres = $_GET['genres'] ?? [];

function isChecked($value, $param)
{
    if (is_array($param)) {
        return in_array($value, $param) ? 'checked' : '';
    } else {
        return $value == $param ? 'checked' : '';
    }
}

// Функция для вывода параметров фильтра
function displayFilterParam($paramName, $paramValue)
{
  if (!empty($paramValue)) {
    if (is_array($paramValue)) {
      $paramValue = implode(', ', $paramValue);
    }
    echo "<div class='filter-item'>$paramName: $paramValue</div>";
  }
}
?>

<!-- filter Start -->
<section class="main-filter">
    <div class="filter-clear">
        <div class="filter-title">
            <i class="fa-solid fa-sliders"></i>
            <p>Фильтры</p>
        </div>
        <button onclick="window.location.href = 'catalog.php';" id="clear-button">
            Очистить
            <i class="fa-solid fa-xmark"></i>
        </button>
        <button onclick="closeFilter()" id="close-button">
            Закрыть
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
    <section class="filter-query">
        <div class="filter-title">
            <i class="fa-solid fa-search"></i>
            <p>Ваши запросы:</p>
        </div>
        <div class="filter-query-content">
          <?php
          displayFilterParam('Статус', $status);
          displayFilterParam('Тип', $kind);
          displayFilterParam('Сортировка', $sort);
          displayFilterParam('Сезон', $season);
          displayFilterParam('Оценка', $rating);
          displayFilterParam('Жанры', $genres);
          ?>
        </div>
    </section>
    <div class="filter-selector">
        <form action="catalog.php" method="GET">
            <div class="filter-fl-genre filter-box">
                <label for="select-status">Статус:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите Статус</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="checkbox" id="status1" name="status[]" value="anons" <?php echo isChecked('anons', $status); ?>><label for="status1">Анонсировано</label></div>
                        <div><input type="checkbox" id="status2" name="status[]" value="ongoing" <?php echo isChecked('ongoing', $status); ?>><label for="status2">Сейчас выходит</label></div>
                        <div><input type="checkbox" id="status3" name="status[]" value="released" <?php echo isChecked('released', $status); ?>><label for="status3">Вышедшее</label></div>
                    </div>
                </div>
                <label for="select-type">Тип:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите Тип</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="checkbox" id="type2" name="kind[]" value="tv" <?php echo isChecked('tv', $kind); ?>><label for="type2">Аниме</label></div>
                        <div><input type="checkbox" id="type3" name="kind[]" value="movie" <?php echo isChecked('movie', $kind); ?>><label for="type3">Фильм</label></div>
                        <!-- <div><input type="checkbox" id="type4" name="kind[]" value="ova" <?php echo isChecked('ova', $kind); ?>><label for="type4">OVA</label></div> -->
                        <!-- <div><input type="checkbox" id="type5" name="kind[]" value="ona" <?php echo isChecked('ona', $kind); ?>><label for="type5">ONA</label></div> -->
                        <div><input type="checkbox" id="type6" name="kind[]" value="special" <?php echo isChecked('special', $kind); ?>><label for="type6">Спецвыпуск</label></div>
                        <div><input type="checkbox" id="type7" name="kind[]" value="tv_special" <?php echo isChecked('tv_special', $kind); ?>><label for="type7">TV-спецвыпуск</label></div>
                        <!-- <div><input type="checkbox" id="type8" name="kind[]" value="pv" <?php echo isChecked('pv', $kind); ?>><label for="type7">PV (промо-видео)</label></div> -->
                        <!-- <div><input type="checkbox" id="type9" name="kind[]" value="cm" <?php echo isChecked('cm', $kind); ?>><label for="type7">CM (реклама)</label></div> -->
                        <div><input type="checkbox" id="type10" name="kind[]" value="tv_13" <?php echo isChecked('tv_13', $kind); ?>><label for="type10">TV_13</label></div>
                        <div><input type="checkbox" id="type11" name="kind[]" value="tv_24" <?php echo isChecked('tv_24', $kind); ?>><label for="type11">TV_24</label></div>
                        <div><input type="checkbox" id="type12" name="kind[]" value="tv_48" <?php echo isChecked('tv_48', $kind); ?>><label for="type12">TV_48</label></div>
                    </div>
                </div>
                <label for="select-sorting">Сортировка:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Сортировать по</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="radio" id="sort1" name="sort" value="ranked" <?php echo isChecked('ranked', $sort); ?>><label for="sort1">По рейтингу</label></div>
                        <div><input type="radio" id="sort2" name="sort" value="popularity" <?php echo isChecked('popularity', $sort); ?>><label for="sort2">По Популярности</label></div>
                        <div><input type="radio" id="sort3" name="sort" value="name" <?php echo isChecked('name', $sort); ?>><label for="sort3">По алфавиту</label></div>
                        <div><input type="radio" id="sort4" name="sort" value="aired_on" <?php echo isChecked('aired_on', $sort); ?>><label for="sort4">По дате выхода</label></div>
                        <div><input type="radio" id="sort5" name="sort" value="status" <?php echo isChecked('status', $sort); ?>><label for="sort5">Случайно</label></div>
                        <div><input type="radio" id="sort6" name="sort" value="episodes" <?php echo isChecked('episodes', $sort); ?>><label for="sort6">По количеству Серии</label></div>
                        <div><input type="radio" id="sort7" name="sort" value="id" <?php echo isChecked('id', $sort); ?>><label for="sort7">По ID</label>
                        </div>
                    </div>
                </div>
                <label for="select-season">Сезон:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите сезон</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="radio" id="season1" name="season" value="summer_2024" <?php echo isChecked('summer_2024', $season); ?>><label for="season1">Лето 2024</label></div>
                        <div><input type="radio" id="season2" name="season" value="spring_2024" <?php echo isChecked('spring_2024', $season); ?>><label for="season2">Весна 2024</label></div>
                        <div><input type="radio" id="season3" name="season" value="winter_2024" <?php echo isChecked('winter_2024', $season); ?>><label for="season3">Зима 2024</label></div>
                        <div><input type="radio" id="season4" name="season" value="fall_2024" <?php echo isChecked('fall_2024', $season); ?>><label for="season4">Осень 2024</label></div>
                        <div><input type="radio" id="season5" name="season" value="2024" <?php echo isChecked('2024', $season); ?>><label for="season5">2024 год</label></div>
                        <div><input type="radio" id="season6" name="season" value="2023" <?php echo isChecked('2023', $season); ?>><label for="season6">2023 год</label></div>
                        <div><input type="radio" id="season7" name="season" value="2021_2022" <?php echo isChecked('2021_2022', $season); ?>><label for="season7">2021-2022</label></div>
                        <div><input type="radio" id="season8" name="season" value="2016_2020" <?php echo isChecked('2016_2020', $season); ?>><label for="season8">2016-2020</label></div>
                        <div><input type="radio" id="season9" name="season" value="2010_2015" <?php echo isChecked('2010_2015', $season); ?>><label for="season9">2010-2015</label></div>
                        <div><input type="radio" id="season10" name="season" value="2000_2009" <?php echo isChecked('2000_2009', $season); ?>><label for="season10">2000-2009</label></div>
                        <div><input type="radio" id="season11" name="season" value="1980_1999" <?php echo isChecked('1980_1999', $season); ?>><label for="season11">1999е годы</label></div>
                        <div><input type="radio" id="season12" name="season" value="1970_1980" <?php echo isChecked('1970_1980', $season); ?>><label for="season12">1980е годы</label></div>
                        <div><input type="radio" id="season13" name="season" value="1968_1999" <?php echo isChecked('1968_1999', $season); ?>><label for="season13">Динозавры 1968г</label></div>
                    </div>
                </div>
                <label for="select-rating">Оценка:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите оценку</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="radio" id="rating1" name="rating" value="none" <?php echo isChecked('none', $rating); ?>><label for="rating1">Без оценки</label></div>
                        <div><input type="radio" id="rating2" name="rating" value="g" <?php echo isChecked('g', $rating); ?>><label for="rating2">Все оценки</label></div>
                        <div><input type="radio" id="rating3" name="rating" value="pg" <?php echo isChecked('pg', $rating); ?>><label for="rating3">PG - для детей</label></div>
                        <div><input type="radio" id="rating4" name="rating" value="pg_13" <?php echo isChecked('pg_13', $rating); ?>><label for="rating4">PG_13 - для детей 13 лет</label></div>
                        <div><input type="radio" id="rating5" name="rating" value="r" <?php echo isChecked('r', $rating); ?>><label for="rating5">r - для подростков 17+</label></div>
                        <div><input type="radio" id="rating6" name="rating" value="r_plus" <?php echo isChecked('r_plus', $rating); ?>><label for="rating6">R_plus - умеренная ногота</label></div>
                        <!-- <div><input type="radio" id="rating7" name="rating" value="rx"><label for="rating7">RX - Хентай</label></div> -->
                    </div>
                </div>
<!--                <label for="select-audience">Аудитория:</label>-->
<!--                <div class="custom-select">-->
<!--                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите аудиторию</div>-->
<!--                    <div class="custom-select-options" style="display: block; transform: translateY(10px); opacity: 1;">-->
<!--                        <div><input type="checkbox" id="audience1" name="audience" value=""><label for="audience1">Сёнен</label></div>-->
<!--                        <div><input type="checkbox" id="audience2" name="audience" value=""><label for="audience2">Сёдзё</label></div>-->
<!--                        <div><input type="checkbox" id="audience3" name="audience" value=""><label for="audience3">Сэйнэн</label></div>-->
<!--                        <div><input type="checkbox" id="audience4" name="audience" value=""><label for="audience4">Дзёсей</label></div>-->
<!--                        <div><input type="checkbox" id="audience5" name="audience" value=""><label for="audience5">Детское</label></div>-->
<!--                    </div>-->
<!--                </div>-->
                <label for="select-genres">Жанры:</label>
                <div class="custom-select">
                    <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите жанр</div>
                    <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;">
                        <div><input type="checkbox" id="genre1" name="genres[]" value="5" <?php echo isChecked('5', $genres); ?>><label for="genre1">Авангард</label></div>
                        <div><input type="checkbox" id="genre2" name="genres[]" value="543" <?php echo isChecked('543', $genres); ?>><label for="genre2">Гурман</label></div>
                        <div><input type="checkbox" id="genre3" name="genres[]" value="8" <?php echo isChecked('8', $genres); ?>><label for="genre3">Драма</label></div>
                        <div><input type="checkbox" id="genre4" name="genres[]" value="4" <?php echo isChecked('4', $genres); ?>><label for="genre4">Комедия</label></div>
                        <div><input type="checkbox" id="genre5" name="genres[]" value="36" <?php echo isChecked('36', $genres); ?>><label for="genre5">Повседневность</label></div>
                        <div><input type="checkbox" id="genre6" name="genres[]" value="2" <?php echo isChecked('2', $genres); ?>><label for="genre6">Приключения</label></div>
                        <div><input type="checkbox" id="genre7" name="genres[]" value="22" <?php echo isChecked('22', $genres); ?>><label for="genre7">Романтика</label></div>
                        <div><input type="checkbox" id="genre8" name="genres[]" value="37" <?php echo isChecked('37', $genres); ?>><label for="genre8">Сверхъестественное</label></div>
                        <div><input type="checkbox" id="genre9" name="genres[]" value="30" <?php echo isChecked('30', $genres); ?>><label for="genre9">Спорт</label></div>
                        <div><input type="checkbox" id="genre10" name="genres[]" value="7" <?php echo isChecked('7', $genres); ?>><label for="genre10">Тайна</label></div>
                        <div><input type="checkbox" id="genre11" name="genres[]" value="117" <?php echo isChecked('117', $genres); ?>><label for="genre11">Триллер</label></div>
                        <div><input type="checkbox" id="genre12" name="genres[]" value="14" <?php echo isChecked('14', $genres); ?>><label for="genre12">Ужасы</label></div>
                        <div><input type="checkbox" id="genre13" name="genres[]" value="24" <?php echo isChecked('24', $genres); ?>><label for="genre13">Фантастика</label></div>
                        <div><input type="checkbox" id="genre14" name="genres[]" value="10" <?php echo isChecked('10', $genres); ?>><label for="genre14">Фэнтези</label></div>
                        <div><input type="checkbox" id="genre15" name="genres[]" value="1" <?php echo isChecked('1', $genres); ?>><label for="genre15">Экшен</label></div>
                        <div><input type="checkbox" id="genre16" name="genres[]" value="9" <?php echo isChecked('9', $genres); ?>><label for="genre16">Этти</label></div>
                        <div><input type="checkbox" id="genre17" name="genres[]" value="143" <?php echo isChecked('143', $genres); ?>><label for="genre17">Антропоморфизм</label></div>
                        <div><input type="checkbox" id="genre18" name="genres[]" value="119" <?php echo isChecked('119', $genres); ?>><label for="genre18">CGDCT</label></div>
                        <div><input type="checkbox" id="genre19" name="genres[]" value="17" <?php echo isChecked('17', $genres); ?>><label for="genre19">Боевые исскусства</label></div>
                        <div><input type="checkbox" id="genre20" name="genres[]" value="32" <?php echo isChecked('32', $genres); ?>><label for="genre20">Вампиры</label></div>
                        <div><input type="checkbox" id="genre21" name="genres[]" value="104" <?php echo isChecked('104', $genres); ?>><label for="genre21">Взрослые персонажы</label></div>
                        <div><input type="checkbox" id="genre22" name="genres[]" value="103" <?php echo isChecked('103', $genres); ?>><label for="genre22">Видеоигры</label></div>
                        <div><input type="checkbox" id="genre23" name="genres[]" value="38" <?php echo isChecked('38', $genres); ?>><label for="genre23">Военое</label></div>
                        <div><input type="checkbox" id="genre24" name="genres[]" value="141" <?php echo isChecked('141', $genres); ?>><label for="genre24">Выживание</label></div>
                        <div><input type="checkbox" id="genre25" name="genres[]" value="35" <?php echo isChecked('35', $genres); ?>><label for="genre25">Гарем</label></div>
                        <div><input type="checkbox" id="genre26" name="genres[]" value="3" <?php echo isChecked('3', $genres); ?>><label for="genre26">Гонки</label></div>
                        <div><input type="checkbox" id="genre27" name="genres[]" value="112" <?php echo isChecked('112', $genres); ?>><label for="genre27">Гэг-юмор</label></div>
                        <div><input type="checkbox" id="genre28" name="genres[]" value="39" <?php echo isChecked('39', $genres); ?>><label for="genre28">Детектив</label></div>
                        <div><input type="checkbox" id="genre29" name="genres[]" value="105" <?php echo isChecked('105', $genres); ?>><label for="genre29">Жесткость</label></div>
                        <div><input type="checkbox" id="genre30" name="genres[]" value="134" <?php echo isChecked('134', $genres); ?>><label for="genre30">Забота о детях</label></div>
                        <div><input type="checkbox" id="genre31" name="genres[]" value="146" <?php echo isChecked('146', $genres); ?>><label for="genre31">Игра с высокими ставками</label></div>
                        <div><input type="checkbox" id="genre32" name="genres[]" value="145" <?php echo isChecked('145', $genres); ?>><label for="genre32">Идолы (жен.)</label></div>
                        <div><input type="checkbox" id="genre33" name="genres[]" value="150" <?php echo isChecked('150', $genres); ?>><label for="genre33">Идолы (муж.)</label></div>
                        <div><input type="checkbox" id="genre34" name="genres[]" value="108" <?php echo isChecked('108', $genres); ?>><label for="genre34">Изобразительное искусство</label></div>
                        <div><input type="checkbox" id="genre35" name="genres[]" value="142" <?php echo isChecked('142', $genres); ?>><label for="genre35">Исполнительское искусство</label></div>
                        <div><input type="checkbox" id="genre36" name="genres[]" value="13" <?php echo isChecked('13', $genres); ?>><label for="genre36">Исторический</label></div>
                        <div><input type="checkbox" id="genre37" name="genres[]" value="130" <?php echo isChecked('130', $genres); ?>><label for="genre37">Исэкай</label></div>
                        <div><input type="checkbox" id="genre38" name="genres[]" value="140" <?php echo isChecked('140', $genres); ?>><label for="genre38">Иясикэй</label></div>
                        <div><input type="checkbox" id="genre39" name="genres[]" value="102" <?php echo isChecked('102', $genres); ?>><label for="genre39">Командный спорт</label></div>
                        <div><input type="checkbox" id="genre40" name="genres[]" value="29" <?php echo isChecked('29', $genres); ?>><label for="genre40">Космос</label></div>
                        <div><input type="checkbox" id="genre41" name="genres[]" value="144" <?php echo isChecked('144', $genres); ?>><label for="genre41">Кроссдрессинг</label></div>
                        <div><input type="checkbox" id="genre42" name="genres[]" value="137" <?php echo isChecked('137', $genres); ?>><label for="genre42">Культура отаку</label></div>
                        <!-- <div><input type="checkbox" id="genre17" name="genres" value="539"><label for="genre17">Эротика</label></div>
                        <div><input type="checkbox" id="genre18" name="genres" value="12"><label for="genre18">Хентай</label></div> -->
                    </div>
                </div>
                <!-- <label for="select-themes">Темы:</label> -->
                <!-- <div class="custom-select"> -->
                <!--     <div class="custom-select-title" onclick="openCustomSelect(this)">Выберите тему</div> -->
                <!--     <div class="custom-select-options" style="display: none; transform: translateY(10px); opacity: 0;"> -->
                <!--         <div><input type="checkbox" id="theme1" name="themes" value=""><label for="theme1">Вампиры</label></div> -->
                <!--         <div><input type="checkbox" id="theme2" name="themes" value=""><label for="theme2">Гарем</label></div> -->
                <!--         <div><input type="checkbox" id="theme3" name="themes" value=""><label for="theme3">Гонки</label></div> -->
                <!--         <div><input type="checkbox" id="theme4" name="themes" value=""><label for="theme4">Идолы</label></div> -->
                <!--         <div><input type="checkbox" id="theme5" name="themes" value=""><label for="theme5">Исэкай</label></div> -->
                <!--         <div><input type="checkbox" id="theme6" name="themes" value=""><label for="theme6">Иясикэй</label></div> -->
                <!--         <div><input type="checkbox" id="theme7" name="themes" value=""><label for="theme7">Космос</label></div> -->
                <!--         <div><input type="checkbox" id="theme8" name="themes" value=""><label for="theme8">Школа</label></div> -->
                <!--         <div><input type="checkbox" id="theme9" name="themes" value=""><label for="theme9">Хулиганы</label></div> -->
                <!--         <div><input type="checkbox" id="theme10" name="themes" value=""><label for="theme10">Супер сила</label></div> -->
                <!--     </div> -->
                <!-- </div> -->
            </div>
            <div class="submit">
                <button type="submit"><!--Поищем, сэмпай 😊?--> Искать</button>
            </div>
        </form>
    </div>
</section>
<!-- filter End -->

<!-- filter button Start -->
<section class="filt-button">
    <button onclick="openFilter();"><i class="fa-solid fa-sliders" aria-hidden="true"></i>Фильтры</button>
</section>
<!-- filter button End -->