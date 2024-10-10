document.addEventListener('DOMContentLoaded', function () {
    console.log("%cНачинаю инициализацию Слайдер Самые Популярные произведение в 2024 в DOM...", "color: pink;");
    try {
        if (!checkMobileModeStatus()) {
        let popularAnimeScroll = new Flickity('.top-popular-animes-content', {
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
        });

        let popularAnimeBlockIsDragging = false;

        popularAnimeScroll.on('dragStart', function (event, pointer) {
            popularAnimeBlockIsDragging = true;
            document.querySelector('.top-popular-animes-content').classList.add('is-dragging');
        });

        popularAnimeScroll.on('pointerUp', function () {
            setTimeout(function () {
                popularAnimeBlockIsDragging = false;
                document.querySelector('.top-popular-animes-content').classList.remove('is-dragging');
            }, 500);
        });
            console.log("%cСлайдер Самые Популярные произведение в 2024 успешно инициализирован и добавлен в DOM!", "color: green;");
        }
    } catch (error) {
        console.log("%cОшибка при инициализации Самые Популярные произведение в 2024", "color: red;", error);
    }
});
