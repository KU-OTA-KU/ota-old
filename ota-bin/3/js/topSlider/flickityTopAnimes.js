function displayAnimeListInFlickity(animeList, selector) {
    const mainContent = document.querySelector(selector);
    const galleryCells = mainContent.querySelectorAll(".gallery-cell");

    // if (animeList.length > galleryCells.length) {
    //     console.warn("");
    //     animeList = animeList.slice(0, galleryCells.length);
    // }

    animeList.forEach((anime, index) => {
        const genres = anime.genres.slice(0, 3).map(genre => {
            return `<a href="catalog.php?genres=${genre.id}">${genre.russian}</a>`;
        }).join(" ");

        const animeHTML = `
            <div class="flickity-content-gallery-block">
                <div class="gallery-cell-content">
                    <div class="gallery-cell-image"><img src="${anime.poster.originalUrl}" alt="${anime.name}"></div>
                    <div class="gallery-cell-info">
                        <h2>${anime.russian}</h2>
                        <p>Название: ${anime.japanese}</p>
                        <p>Оценка: ${anime.score} <i class="fa-solid fa-star" aria-hidden="true"></i></p>
                        <div class="flickity-genres-list">
                            Жанры: 
                            ${genres} 
                        </div>
                        <a href="anime.php?animeId=${anime.id}" class="top-slider-anime-more-button">Подробнее</a>
                    </div>
                </div>
            </div>
        `;
        galleryCells[index].insertAdjacentHTML("beforeend", animeHTML);
        setTimeout(() => {
            galleryCells[index].querySelector('.gallery-cell-image img').style.opacity = '1';
        }, 100);
    });
}

async function flickityTopAnimesOpen(limit) {
    try {
        const response = await fetch("https://shikimori.one/api/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `
                    query {
                        animes(season: "2024", limit: ${limit}, order: popularity, status: "released", kind: "tv") {
                            id
                            name
                            russian
                            japanese
                            score
                            poster {
                                originalUrl
                            }
                            genres {
                                id
                                russian
                            }
                        }
                    }
                `,
            }),
        });

        if (!response.ok) {
            //throw new Error('Network response was not ok');
            window.location.href = "TechOperations.html";
        }

        const data = await response.json();
        const popularAnime = data.data.animes;
        const filteredAnime = shuffleArray(popularAnime).filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        displayAnimeListInFlickity(filteredAnime, ".flickity-slider");
    } catch (error) {
        console.error("Request error:", error);
        await delay(1000);
        await flickityTopAnimesOpen(5);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("%cНачинаю инициализацию Топ-слайдера в DOM...", "color: pink;");
    try {
        const topSlider = new Flickity('.flickity-inner', {
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: 5000,
        });

        topSlider.on("select", function () {
            const cells = document.querySelectorAll(".gallery-cell");
            cells.forEach(cell => cell.classList.remove("is-selected"));
            cells[topSlider.selectedIndex].classList.add("is-selected");
        });

        let isPointerDown = false;
        topSlider.on("pointerDown", () => {
            isPointerDown = true;
            topSlider.stopPlayer();
        });
        topSlider.on("pointerUp", () => {
            isPointerDown = false;
            topSlider.playPlayer();
        });
        topSlider.on("dragEnd", () => {
            if (!isPointerDown) {
                topSlider.playPlayer();
            }
        });

        console.log("%cТоп-слайдер успешно инициализирован и добавлен в DOM!", "color: green;");
    } catch (error) {
        console.log("%cОшибка при инициализации топ-слайдера", "color: red;", error);
    }
});
