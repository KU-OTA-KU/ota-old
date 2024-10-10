document.addEventListener('DOMContentLoaded', function () {
    console.log("%cНачинаю инициализацию Слайдера с топ популярных жанов в DOM...", "color: pink;");
    try {
        let genresScroll = new Flickity('.all-genres-list-container', {
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
        });

        let genresIsDragging = false;

        genresScroll.on('dragStart', function (event, pointer) {
            genresIsDragging = true;
            document.querySelector('.all-genres-list-container').classList.add('is-dragging');
        });

        genresScroll.on('pointerUp', function () {
            setTimeout(function () {
                genresIsDragging = false;
                document.querySelector('.all-genres-list-container').classList.remove('is-dragging');
            }, 500);
        });
        console.log("%cСлайдер топ популярных жанров успешно инициализирован и добавлен в DOM!", "color: green;");
    } catch (error) {
        console.log("%cОшибка при инициализации Слайдера с топ популярных жанров", "color: red;", error);
    }
});
