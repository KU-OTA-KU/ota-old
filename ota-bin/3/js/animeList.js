let currPage = 1;
const limit = 10;
let loading = false;
let maxFetchsInAnimeList = 3;
let animeFound = undefined;

async function fetchAnimeData() {
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
                        animes(season: "2020_2024", limit: ${limit}, page: ${currPage}, kind: "tv") {
                            id
                            name
                            russian
                            kind
                            score
                            poster {
                                mainUrl
                            }
                        }
                    }
                `.replace(/\n/g, ""),
            }),
        });
        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );
        currPage++;
        await generateAnimeListStekelton(limit, ".main-content")
        await displayAnimeList(animeList, ".main-content");
        loading = false;
    } catch (error) {
        // console.error("Request Error => ", error);
        loading = false;
    }
}

function displayAnimeList(animeList, selector) {
    let mainContent = document.querySelector(selector);
    let movies = mainContent.querySelectorAll('.movie:not(#appended)');

    animeList.forEach((anime, index) => {
        let currentCell = movies[index];
        if (!currentCell) return;
        currentCell.innerHTML = '';
        let animeHTML = `
      <div class="movie-image">
        <img src="${anime.poster.mainUrl}" alt="${anime.name}">
      </div>
      <div class="movie-name">
        <div class="status" style="background: transparent !important;">
          <div class="type">${anime.kind}</div>
          <div class="rating">
            ${anime.score}
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div class="name" style="background: transparent !important;">
          <a href="anime.php?animeId=${anime.id}">${anime.russian}</a>
        </div>
      </div>
    `;

        currentCell.insertAdjacentHTML('beforeend', animeHTML);
        setTimeout(() => {
            currentCell.querySelector('.movie-image img').style.opacity = '1';
        }, 500);
        currentCell.id = "appended";
        currentCell.onclick = function () {
            window.location.href = `anime.php?animeId=${anime.id}`;
        };
    });
}

async function generateAnimeListStekelton(count, selector) {
    let mainContent = document.querySelector(selector);

    for (let i = 0; i < count; i++) {
        let animeHTML = `
        <div class="movie" id="not-appended">
        <div class="movie-image"></div>
        <div class="movie-name">
        <div class="status">
          <div class="type"></div>
            <div class="rating"></div>
          </div>
          <div class="name"></div>
        </div>
      </div>
      `;
        mainContent.insertAdjacentHTML("beforeend", animeHTML);
    }
}

function isNearBottom() {
    const mainContent = document.querySelector(".main-content");
    const mainContentBottom = mainContent.offsetTop + mainContent.offsetHeight;
    return window.innerHeight + window.scrollY >= mainContentBottom - 200;
}

function canScroll() {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const bodyHeight = body.scrollHeight;
    const htmlHeight = html.scrollHeight;
    const maxScroll = Math.max(bodyHeight, htmlHeight) - windowHeight;
    return maxScroll > 0 && (bodyHeight > windowHeight || htmlHeight > windowHeight);
}

function loadNextPage() {
    if (!loading) {
        loading = true;
        if (currPage <= maxFetchsInAnimeList) {
            fetchAnimeData();
        } else {
            console.log(`%cДостигнут лимит загрузок аниме: ${maxFetchsInAnimeList}`, "color: aqua");
            window.removeEventListener("scroll", loadNextPage);
        }
    }
}

window.addEventListener("scroll", () => {
    if (isNearBottom()) {
        loadNextPage();
    }
});

function triggerScrollUntilScrollAppears() {
    console.log(animeFound)
    if(currPage <= maxFetchsInAnimeList) {
        if (!canScroll() && animeFound === true || animeFound === undefined) {
            setTimeout(() => {
                loadNextPage()
                triggerScrollUntilScrollAppears();
            }, 500);
        }
        // } else {
        //     console.log("Scrollni erevmaaaa");
        // }
    }
}
