function displayAnimeListMost(animeList, selector) {
    let mainContent = document.querySelector(selector);
    let movie = mainContent.querySelectorAll('.most-content-movie');

    animeList.forEach((anime, index) => {
        let currentCell = movie[index];
        currentCell.innerHTML = '';
        let animeHTML = `
        <div class="most-content-movie-image">
        <img src="${anime.poster.mini2xUrl}" alt="${anime.name}">
        </div>
        <div class="most-content-movie-info">
          <div class="most-name" style="background: transparent !important;">
            <a href="anime.php?animeId=${anime.id}">${anime.russian}</a>
          </div>
          <div class="most-status" style="background: transparent !important;">
            <div class="most-type">${anime.kind}</div>
            <div class="rating">
              ${anime.score}
              <i class="fa-solid fa-star" aria-hidden="true" style="cursor: pointer;"></i>
            </div>
          </div>
          <div class="most-data" style="background: transparent !important;"><p>${anime.airedOn.year}</p></div>
        </div>
      `;
        currentCell.insertAdjacentHTML("beforeend", animeHTML);
        setTimeout(() => {
            currentCell.querySelector('.most-content-movie-image img').style.opacity = '1';
        }, 100);
        currentCell.onclick = function () {
            window.location.href = `anime.php?animeId=${anime.id}`;
        };
    });
}

async function fetchAdditionalAnime(count, status) {
    try {
        let queryStatus = "";
        if (status === "ongoing") {
            queryStatus = 'status: "ongoing"';
        } else if (status === "anons") {
            queryStatus = 'status: "anons", season: "2024"';
        } else if (status === "released") {
            queryStatus = 'status: "released"';
        }

        const response = await fetch("https://shikimori.one/api/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `
                    query {
                      animes(limit: ${count}, order: random, ${queryStatus}, kind: "tv") {
                       id
                        name
                        russian
                        kind
                        score
                        poster {
                          mini2xUrl
                        }
                        airedOn {
                          year
                        }
                      }
                    }
                `,
            }),
        });

        const data = await response.json();
        return data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );
    } catch (error) {
        console.warn("Request error => ", error);
        return [];
    }
}

async function mostFetchOnGoing(limit) {
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
                      animes(limit: ${limit}, order: popularity, status: "ongoing", kind: "tv") {
                       id
                        name
                        russian
                        kind
                        score
                        poster {
                           mini2xUrl
                        }
                        airedOn {
                          year
                        }
                      }
                    }
                `,
            }),
        });

        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        if (animeList.length < limit) {
            const additionalAnimeCount = limit - animeList.length;
            const additionalAnime = await fetchAdditionalAnime(additionalAnimeCount, "ongoing");
            animeList.push(...additionalAnime);
        }

        if (animeList.length < limit) {
            await mostFetchOnGoing(limit);
        } else {
            displayAnimeListMost(animeList, ".most-content-animes-list-option-1");
            await delay(400);
            await mostFetchOnAnonse(5);
        }
    } catch (error) {
        console.warn("Request error => ", error);
        await delay(400);
        await mostFetchOnGoing(5);
    }
}

async function mostFetchOnAnonse(limit) {
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
                      animes(season: "2024", limit: ${limit}, order: random, status: "anons", kind: "tv") {
                        id
                        name
                        russian
                        kind
                        score
                        poster {
                          mini2xUrl
                        }
                        airedOn {
                          year
                        }
                      }
                    }
                `,
            }),
        });

        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        if (animeList.length < limit) {
            const additionalAnimeCount = limit - animeList.length;
            const additionalAnime = await fetchAdditionalAnime(additionalAnimeCount, "anons");
            animeList.push(...additionalAnime);
        }

        if (animeList.length < limit) {
            await mostFetchOnAnonse(limit);
        } else {
            displayAnimeListMost(animeList, ".most-content-animes-list-option-2");
            await delay(400);
            await mostFetchOnTop(5);
        }
    } catch (error) {
        console.warn("Request error => ", error);
        await delay(400);
        await mostFetchOnAnonse(5);
    }
}

async function mostFetchOnTop(limit) {
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
                      animes(limit: ${limit}, order: ranked, status: "released", kind: "tv") {
                        id
                        name
                        russian
                        kind
                        score
                        poster {
                          mini2xUrl
                        }
                        airedOn {
                          year
                        }
                      }
                    }
                `,
            }),
        });

        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        if (animeList.length < limit) {
            const additionalAnimeCount = limit - animeList.length;
            const additionalAnime = await fetchAdditionalAnime(additionalAnimeCount, "released");
            animeList.push(...additionalAnime);
        }

        if (animeList.length < limit) {
            await mostFetchOnTop(limit);
        } else {
            displayAnimeListMost(animeList, ".most-content-animes-list-option-3");
            await delay(400);
            await mostFetchOnReleased(5);
        }
    } catch (error) {
        console.warn("Request error => ", error);
        await delay(400);
        await mostFetchOnTop(5);
    }
}

async function mostFetchOnReleased(limit) {
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
                      animes(limit: ${limit}, order: popularity, status: "released", kind: "tv") {
                        id
                        name
                        russian
                        kind
                        score
                        poster {
                          mini2xUrl
                        }
                        airedOn {
                          year
                        }
                      }
                    }
                `,
            }),
        });

        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        if (animeList.length < limit) {
            const additionalAnimeCount = limit - animeList.length;
            const additionalAnime = await fetchAdditionalAnime(additionalAnimeCount, "released");
            animeList.push(...additionalAnime);
        }

        displayAnimeListMost(animeList, ".most-content-animes-list-option-4");
    } catch (error) {
        console.warn("Request error => ", error);
        await delay(400);
        await mostFetchOnReleased(5);
    }
}