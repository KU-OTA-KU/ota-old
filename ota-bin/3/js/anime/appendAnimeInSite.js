async function appendAnimeInSite(data) {
    sessionStorage.removeItem("CurrentAnime");
    data = JSON.stringify(data);
    sessionStorage.setItem("CurrentAnime", data);
    window.myData = data;
    await main();
}

async function main() {
    const storedData = sessionStorage.getItem("CurrentAnime");
    if (storedData) {
        const _ANIME_ID_ = JSON.parse(storedData)[0].id;
        const _ANIME_JAPANESE_NAME = JSON.parse(storedData)[0].japanese;
        const _ANIME_ENGLISH_NAME_ = JSON.parse(storedData)[0].english;
        const _ANIME_RUSSIAN_NAME_ = JSON.parse(storedData)[0].russian;
        const _ANIME_IMAGE_ = JSON.parse(storedData)[0].poster.originalUrl;
        const _ANIME_AIR_YEAR_ = JSON.parse(storedData)[0].airedOn.year;
        const _ANIME_KIND_ = JSON.parse(storedData)[0].kind;
        const _ANIME_STATUS_ = JSON.parse(storedData)[0].status;
        const _ANIME_SCORE_ = JSON.parse(storedData)[0].score;
        const _ANIME_GENRES_ = JSON.parse(storedData)[0].genres;
        const _ANIME_DESCRIPTION_ = JSON.parse(storedData)[0].description;
        const _ANIME_SCREENSHOTS_ = JSON.parse(storedData)[0].screenshots;
        const _ANIME_CHARACTER_ROLES_ = JSON.parse(storedData)[0].characterRoles;
        let _ANIME_RELATED_ = JSON.parse(storedData)[0].related;
        _ANIME_RELATED_ = _ANIME_RELATED_.filter(anime => anime.anime && anime.anime.id);
        // 1) append anime title
        document.title = `OTA-KU ${_ANIME_RUSSIAN_NAME_}`;

        // 2) append background image
        let background = document.querySelector(".anime-background");
        background.style.backgroundImage = `url(${_ANIME_IMAGE_})`;

        // 3) append anime image
        let animeImageBlock = document.querySelector(
            ".anime-back-global-info-image"
        );
        let appendAnimeImageBlock = `<img src="${_ANIME_IMAGE_}" alt="${_ANIME_ENGLISH_NAME_}">`;
        animeImageBlock.insertAdjacentHTML("beforeend", appendAnimeImageBlock);
        setTimeout(() => {
            animeImageBlock.querySelector('img').style.opacity = '1';
        }, 100);

        // 4) append anime names in eng and japance
        let animeNameEngJpg = document.querySelector(".anime-eng-jpg-name");
        let animeRussianStatus;
        if(_ANIME_STATUS_ === 'released') {
            animeRussianStatus = 'Завершено';
        } else if(_ANIME_STATUS_ === 'ongoing') {
            animeRussianStatus = 'Онгоинг';
        } else {
            animeRussianStatus = 'Анонс'
        }
        let appendAnimeNameEngJpg = `<p>${_ANIME_ENGLISH_NAME_}  /  ${_ANIME_JAPANESE_NAME}</p><p>${_ANIME_AIR_YEAR_} . ${_ANIME_KIND_} . ${animeRussianStatus}</p>`;
        animeNameEngJpg.insertAdjacentHTML("beforeend", appendAnimeNameEngJpg);
        animeNameEngJpg.style.cssText = "background: transparent !important;";

        // 5) append anime Name
        let animeName = document.querySelector(".anime-title-h2");
        let appendAnimeName = `<h1>${_ANIME_RUSSIAN_NAME_}</h1>`;
        animeName.insertAdjacentHTML("beforeend", appendAnimeName);
        animeName.style.cssText = "background: transparent !important;";

        // 6) append anime Score
        let animeScore = document.querySelector(".anime-score");
        let appendAnimeScore = `<p><i class="fa-solid fa-star"></i>${_ANIME_SCORE_}</p>`;
        animeScore.insertAdjacentHTML("beforeend", appendAnimeScore);
        animeScore.style.cssText = "background: transparent !important;";

        // 7) append anime genres
        let animeGenresList = document.querySelector(".anime-genres-list");
        const genresHTML = _ANIME_GENRES_.map((genre) => `<a href="catalog.php?genres=${genre.id}">${genre.russian}</a>`).join("");
        animeGenresList.insertAdjacentHTML("beforeend", genresHTML);

        // 8) append anime about
        let animeDescription = document.querySelector(".anime-description .anime-description-tit");
        if (_ANIME_DESCRIPTION_ !== null) {
            const cleanedDescription = _ANIME_DESCRIPTION_.replace(/\[.*?\]/g, "");
            let appendAnimeAbout = `<p>${cleanedDescription}</p>`;
            animeDescription.insertAdjacentHTML("beforeend", appendAnimeAbout);
        } else {
            animeDescription.style.display = "none";
            console.log("no have description")
            // let appendAnimeAbout = `<p>Описание не доступно</p>`;
            // animeDescription.insertAdjacentHTML("beforeend", appendAnimeAbout);
        }

        // 9) append anime stills
        let animeStillsContentList = document.querySelectorAll(
            ".anime-stills-content"
        );
        if (_ANIME_SCREENSHOTS_ && _ANIME_SCREENSHOTS_.length > 0) {
            animeStillsContentList.forEach((animeStillsContent, index) => {
                if (_ANIME_SCREENSHOTS_[index]) {
                    const stillUrl = _ANIME_SCREENSHOTS_[index].x332Url;
                    animeStillsContent.insertAdjacentHTML(
                        "beforeend",
                        `<img src="${stillUrl}"></img>`
                    );
                } else {
                    console.warn(
                        `No screenshot found for anime-stills-content ${index + 1}`
                    );
                }
            });
        } else {
            console.warn("No screenshots found for this anime.");
        }

        // 10) append anime Characters
        async function createCharactersBlocks() {
            let animeCharacters = document.querySelectorAll(
                ".characters-list-container"
            );
            animeCharacters.forEach((element, index) => {
                let mainCharactersCount = 0;
                _ANIME_CHARACTER_ROLES_.forEach((characterRole) => {
                    if (characterRole.rolesEn.includes("Main")) {
                        mainCharactersCount++;
                    }
                });
                if (mainCharactersCount <= 0) {
                    let charactersMainBlock = document.querySelector(".characters-list");
                    charactersMainBlock.style.display = "none";
                }
                mainCharactersCount--;
                for (let i = 0; i < mainCharactersCount; i++) {
                    let newCharacterBlock = `
            <div class="character-content">
              <div class="character-content-image"></div>
              <p></p>
            </div>
          `;
                    element.insertAdjacentHTML("beforeend", newCharacterBlock);
                }
            });
        }

        async function appendCharactersBlocks() {
            let characterBlocks = document.querySelectorAll(".character-content");
            characterBlocks.forEach((block, index) => {
                let character = _ANIME_CHARACTER_ROLES_[index];
                if (!character) return;
                let characterHTML = `
            <div class="character-content-image"><img src="${character.character.poster.mini2xUrl}" alt="Аниме Персонаж ${character.character.name}"></div>
            <p style="background: transparent !important;">${character.character.russian}</p>
        `;
                block.innerHTML = characterHTML;
                // block.insertAdjacentHTML("beforeend", characterHTML);
            });
        }

        await createCharactersBlocks();
        await appendCharactersBlocks();

        // 11) append curr anime related animes
        async function createRelatedAnimeBlocks() {
            let relatedAnimeMainBlock = document.querySelector(".animes-related");
            let relatedContainers = document.querySelectorAll(".related-animes-container");
            let mainAnimeRelated = _ANIME_RELATED_.filter(anime => anime.anime && anime.anime.id);
            let mainAnimeRelatedCount = mainAnimeRelated.length;
            if (mainAnimeRelatedCount <= 0) {
                relatedAnimeMainBlock.style.display = "none";
            }
            relatedContainers.forEach((container) => {
                mainAnimeRelatedCount--;
                for (let i = 0; i < mainAnimeRelatedCount; i++) {
                    let newAnimeRelatedCount = `
                <div class="related-animes-block">
                    <div class="related-animes-name">
                        <a href=""></a>
                    </div>
                    <div class="related-animes-info">
                        <div class="related-animes-info-image">
                            <img src="" alt="">
                        </div>
                        <div class="related-animes-type-year">
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            `;
                    container.insertAdjacentHTML("beforeend", newAnimeRelatedCount);
                }
            });
        }

        async function appendRelatedAnimeBlocks() {
            let relatedBlocks = document.querySelectorAll(".related-animes-block");

            relatedBlocks.forEach((block, index) => {
                let relatedAnime = _ANIME_RELATED_[index];
                if (!relatedAnime || !relatedAnime.anime) return;

                let relatedAnimeHTML = `
                    <div class="related-animes-name" style="background: transparent !important;">
                        <a href="anime.php?animeId=${relatedAnime.anime.id}">${relatedAnime.anime.russian}</a>
                    </div>
                    <div class="related-animes-info">
                        <div class="related-animes-info-image">
                            <img src="${relatedAnime.anime.poster.mini2xUrl}" alt="related-${_ANIME_ENGLISH_NAME_}">
                        </div>
                        <div class="related-animes-type-year">
                             <p style="background: transparent !important;">${relatedAnime.anime.kind} / ${relatedAnime.anime.airedOn.year}</p>
                             <p style="background: transparent !important;">${relatedAnime.relationRu}</p>
                        </div>
                    </div>
                `;
                block.innerHTML = relatedAnimeHTML;
            });
        }

        await createRelatedAnimeBlocks();
        await appendRelatedAnimeBlocks();

    } else {
        console.warn("No anime data found in sessionStorage.");
    }
}
